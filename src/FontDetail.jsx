import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditableContent from './EditableContent';
import AlphabetLayout from './AlphabetLayout';

function FontDetail() {
  const { id } = useParams();
  const [fontData, setFontData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/repos_metadata.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        const matchingFont = jsonData.find(font => font.url === id);
        if (!matchingFont) {
          throw new Error('Font not found');
        }
        setFontData(matchingFont);
      } catch (error) {
        console.error('Error fetching font data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="products">
      <Font fontData={fontData} />
    </div>
  );
}

function Font({ fontData }) {
	const { name, metadata } = fontData;
	const { typeface_family } = metadata || {};
	const {
		name: fontName = "N/A",
		sample_text: sampleText = [],
		description = "N/A",
		designer = [],
		tags = [],
		similar_fonts = [],
		tools = "N/A",
		writing_systems = "N/A",
		license = "N/A",
		published = "N/A",
		project_url,
	} = typeface_family || {};
  
	return (
		<div className='font'>
			<EditableContent
				title={fontName}
				text={sampleText[0]?.en_us || "N/A"}
				fontFamily={name}
				link={fontName.toLowerCase().replace(/\s+/g, "-") || "#"}
				showDownload={false}
			/>
			<div className="font-detail">
			<div className='flex-child'>
				<div className="flex">
					<a className="refresh-button" href={`https://github.com/mother-type/${name}/raw/main/fonts/${name}.zip`} download>
						<u>Download Specimen ➬</u>
					</a>
					<a className={project_url ? "refresh-button" : "hidden"} href={project_url || "#"}>
						<u>Source Files</u>
					</a>
				</div>
				<table>
				<thead>
					<tr>
						<th>Category</th>
						<th>Data</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Designed by</td>
						<td>{designer[0]?.name || "N/A"}</td>
					</tr>
					<tr>
						<td>Built With</td>
						<td>{tags.join(', ') || "N/A"}</td>
					</tr>
					<tr>
						<td>Similar Fonts</td>
						<td>{similar_fonts.join(', ') || "N/A"}</td>
					</tr>
					<tr>
						<td>Built With</td>
						<td>{tools}</td>
					</tr>
					<tr>
						<td>Writing systems</td>
						<td>{writing_systems}</td>
					</tr>
					<tr>
						<td>License</td>
						<td>{license}</td>
					</tr>
					<tr>
						<td>Published</td>
						<td>{published}</td>
					</tr>
				</tbody>
			</table>
			</div>
			<div className='flex-child'>
				<h3>About {fontName}</h3>
				<p>{description}</p>
			</div>

			</div>
			<AlphabetLayout
				fontFamily={name} 
			/>			
		</div>
	);
}

  
export default FontDetail;
  