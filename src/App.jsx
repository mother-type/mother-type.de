import data from './data/api.js'
import EditableContent from './EditableContent'

function App() {
  let productIds = Object.keys(data);
  return (
      <div>
        {productIds.map((id) => (

            <div key={id}>
            <EditableContent 
              title={data[id].title} 
              text={data[id].text}
              fontFamily={data[id].fontFamily}
            />
            <a
            href={data[id].link ? `${data[id].link}` : `work/${id}`}

            >
              {data[id].thumbnail && !data[id].mov && <img loading="lazy" src={data[id].thumbnail} alt={data[id].title} />}
              {data[id].mov && <video loading="lazy" autoPlay={true} muted={true}><source autoPlay src={data[id].mov} type="video/mp4" /></video>}
              <div className="text item">
                <p style={{fontSize: '12px', paddingBottom: '.5rem'}}>
                    {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} </p>
                <p>{data[id].description}</p>
              </div>
              </a>
            </div>
   ))}
  </div>
  );
}

export default App;
