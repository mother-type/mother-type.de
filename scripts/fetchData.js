import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

const orgName = 'mother-type';
const apiUrl = `https://api.github.com/orgs/${orgName}/repos`;

// Get the directory name using import.meta.url
const currentFileUrl = new URL(import.meta.url);
const currentDir = path.dirname(currentFileUrl.pathname);
const outputFile = path.join(currentDir, '..', 'public', 'repos_metadata.json'); // Adjusted output path

// Function to convert CamelCase to kebab-case
function camelToKebabCase(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

async function fetchData() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const repositories = await response.json();

    // Fetch metadata for each repository
    const metadataPromises = repositories.map(async (repo) => {
      const apiUrl = `https://api.github.com/repos/${orgName}/${repo.name}/contents/METADATA.yml`;

      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          const metadata = await response.json();
          if (metadata && metadata.type === 'file') {
            const metadataContent = Buffer.from(metadata.content, 'base64').toString('utf-8');
            const parsedMetadata = YAML.parse(metadataContent);

            // Convert keys and values from kebab-case to snake_case
            const convertedMetadata = convertToSnakeCase(parsedMetadata);

            return { name: repo.name, metadata: convertedMetadata, url: camelToKebabCase(repo.name) };
          }
        }
      } catch (error) {
        console.error(`Error fetching METADATA for ${repo.name}:`, error);
      }
      return null;
    });

    const metadataResults = await Promise.all(metadataPromises);
    const metadataOnly = metadataResults.filter(metadata => metadata !== null && metadata.name !== "Unified-Font-Repository");

    // Create the directory if it doesn't exist
    const dataDirectory = path.dirname(outputFile);
    if (!fs.existsSync(dataDirectory)) {
      fs.mkdirSync(dataDirectory, { recursive: true });
    }

    // Stringify metadata with indentation before writing to file
    const formattedMetadata = JSON.stringify(metadataOnly, null, 2);
    fs.writeFileSync(outputFile, formattedMetadata);
    
    console.log('Metadata fetched and saved successfully.');
  } catch (error) {
    console.error('Error fetching and saving metadata:', error);
    process.exit(1);
  }
}

// Function to convert keys and values from kebab-case to snake_case
function convertToSnakeCase(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertToSnakeCase);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/-/g, '_'), // Convert key from kebab-case to snake_case
      typeof value === 'string' && value.includes('-') ? value.replace(/-/g, '_') : convertToSnakeCase(value) // Convert value from kebab-case to snake_case
    ])
  );
}

fetchData();
