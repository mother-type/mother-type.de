import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from repos.json file
    fetch(import.meta.env.BASE_URL + 'scripts/data/repos_metadata.json') // Adjusted fetch path
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
        <h2 key={id}>{data[id].name}</h2>
      ))}
    </div>
  );
}

export default App;
