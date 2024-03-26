import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import FontDemo from '../components/FontDemo.jsx';
import AlphabetGrid from '../components/AlphabetGrid.jsx';
import Table from '../components/Table.jsx';

function Detail() {
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
    <div>
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
		repository_url,
	} = typeface_family || {};
  
	return (
		<div>
			<FontDemo
				title={fontName}
				text={sampleText[0]?.en_us || "N/A"}
				fontFamily={name}
				link={fontName.toLowerCase().replace(/\s+/g, "-") || "#"}
				showDownload={false}
			/>
			<div className="Detail">
			<div className='flex-child'>
				<div className="flex">
					<a className="button" href={`https://github.com/mother-type/${name}/raw/main/fonts/${name}.zip`} download>
						<u>Download Specimen ➬</u>
					</a>
					<a className={repository_url ? "button" : "hidden"} href={repository_url || "#"}>
						<u>Source Files</u>
					</a>
				</div>
				<Table
					designer={designer}
					tags={tags}
					similarFonts={similar_fonts}
					tools={tools}
					writingSystems={writing_systems}
					license={license}
					published={published}
				/>
			</div>
			<div className='flex-child'>
				<h3>About {fontName}</h3>
				<p>{description}</p>
			</div>

			</div>
			<AlphabetGrid
				fontFamily={name} 
			/>			
		</div>
	);
}

  
export default Detail;
  