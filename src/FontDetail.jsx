import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import EditableContent from './EditableContent';

function FontDetail() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}scripts/data/repos_metadata.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function toCamelCase(str) {
    return str.replace(/[-_](\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, c => c.toUpperCase());
  }

  const matchingProduct = data.find(product => product.name.toLowerCase() === toCamelCase(id).toLowerCase());

  if (!matchingProduct) {
	return <div>Error: Product not found</div>;
  }
  
  return (
	<div className='products'>
		<Font data={matchingProduct} />
	</div>
  );
}

function Font({ data }) {
	console.log(data.metadata.typeface_family.designer);

	return (
		<div className="blog">
			<a href="/" className="home-button">
				<u>←</u>
			</a>
			<h2>{data.name}</h2>
			<EditableContent
				title={data.metadata.typeface_family.name || "N/A"}
				text={data.metadata.typeface_family.sample_text?.[0]?.en_us || "N/A"}
				fontFamily={data.name}
				link={data.metadata.typeface_family.name?.toLowerCase().replace(/\s+/g, "-") || "#"}
				showDownload={false}
			/>
			<hp>{data.metadata.typeface_family.description}</hp>
			<div className="flex">
				<a className="refresh-button" href={`https://github.com/mother-type/${data.name}/raw/main/fonts/${data.name}.zip`} download>
					<u>Download Specimen ➬</u>
				</a>
				<a className={data.metadata.typeface_family.project_url ? "refresh-button" : "hidden"} href={data.metadata.typeface_family.project_url || "#"}>
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
						<td>
							{data.metadata.typeface_family.designer && data.metadata.typeface_family.designer[0] && data.metadata.typeface_family.designer[1] ? (
								<a href={data.metadata.typeface_family.designer[1].url}>{data.metadata.typeface_family.designer[0].name}</a>
							) : (
								"N/A"
							)}
						</td>
					</tr>					
					<tr>
						<td>Built With</td>
						<td>{data.metadata.typeface_family.tags ? data.metadata.typeface_family.tags.join(', ') : "N/A"}</td>
					</tr>
					<tr>
						<td>Similar Fonts</td>
						<td>{data.metadata.typeface_family.similar_fonts ? data.metadata.typeface_family.similar_fonts.join(', ') : "N/A"}</td>
					</tr>
					<tr>
						<td>Built With</td>
						<td>{data.metadata.typeface_family.tools || "N/A"}</td>
					</tr>
					<tr>
						<td>Writing systems</td>
						<td>{data.metadata.typeface_family.writing_systems || "N/A"}</td>
					</tr>
					<tr>
						<td>License</td>
						<td>{data.metadata.typeface_family.license || "N/A"}</td>
					</tr>
					<tr>
						<td>Published</td>
						<td>{data.metadata.typeface_family.published || "N/A"}</td>
					</tr>
				</tbody>
			</table>
			<br />
			<br />
		</div>
	);
}

export default FontDetail;
