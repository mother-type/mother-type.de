import { useState, useEffect } from 'react';
import EditableContent from './EditableContent.jsx'

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(import.meta.env.BASE_URL + 'scripts/data/repos_metadata.json') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='products'>
      {Object.keys(data).map((id) => (
        <div key={id}>
          <h2>{data[id].name}</h2>
          {/* Load sample text */}
          <EditableContent 
            title={data[id].metadata["typeface family"]["name"]} 
            text={data[id].metadata["typeface family"]["sample text"][0]["en_us"]}
            fontFamily={data[id].name}
            link={id}
            showDownload={true}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
