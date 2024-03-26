import { useState, useEffect } from 'react';
import FontDemo from '../components/FontDemo.jsx';

function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/repos_metadata.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);

  return (
    <div>
      {Object.keys(data).map((id) => (
        <div key={id}>
          <FontDemo 
            title={data[id].metadata.typeface_family.name} 
            text={data[id].metadata.typeface_family.sample_text[0]["en_us"]}
            fontFamily={data[id].name}
            link={data[id].url}
            showDownload={true}
          />
        </div>
      ))}
    </div>
  );
}

export default Home;
