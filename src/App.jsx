import data from './data/api.js'

function App() {
  let productIds = Object.keys(data);
  return (
      <div>
        {productIds.map((id) => (
					<a
            href={data[id].link ? `${data[id].link}` : `work/${id}`}
            key={id}
            >
            <>
              {data[id].thumbnail && !data[id].mov && <img loading="lazy" src={data[id].thumbnail} alt={data[id].title} />}
              {data[id].mov && <video loading="lazy" autoPlay={true} muted={true}><source autoPlay src={data[id].mov} type="video/mp4" /></video>}
              <div className="text item">
                <p>{data[id].link ? <span>↗ </span> : ''} <b>{data[id].title}</b></p>
                <p style={{fontSize: '12px', paddingBottom: '.5rem'}}>{data[id].subcategory ? <span className="grid-crumbs">{data[id].subcategory}</span> : ''}
                  {data[id].category ? <span className="grid-crumbs">{data[id].category}</span> : ''}
                    {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} </p>
                <p>{data[id].description}</p>
              </div>
            </>
          </a>
   ))}
  </div>
  );
}

export default App;
