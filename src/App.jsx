import data from './data/api.js'
import EditableContent from './EditableContent'

function App() {
  let productIds = Object.keys(data);
  return (
      <div className='products'>
        {productIds.map((id) => (

            <div className='item' key={id}>
            <EditableContent 
              title={data[id].title} 
              text={data[id].text}
              fontFamily={data[id].fontFamily}
              link={id}
              showDownload={true}
            />
            <a
            href={data[id].link ? `${data[id].link}` : `fonts/${id}`}

            >
              {data[id].thumbnail && !data[id].mov && <img loading="lazy" src={data[id].thumbnail} alt={data[id].title} />}
              {data[id].mov && <video loading="lazy" autoPlay={true} muted={true}><source autoPlay src={data[id].mov} type="video/mp4" /></video>}
              <div className="text item">
                <p>{data[id].description}</p>
              </div>
              </a>
            </div>
   ))}
  </div>
  );
}

export default App;
