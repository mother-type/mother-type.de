import { useParams } from 'react-router-dom'

import data from './data/api.js'
import EditableContent from './EditableContent'

function Post() {

	const { id } = useParams();
	const product = data[id]
	return (
		<article>
			<div className="blog">
				<a href="/" className="home-button"><u>←</u></a>
					<h2>{product.title}</h2>
					<h5>{product.subtitle}</h5>
					<p>{product.description}</p>
					<div dangerouslySetInnerHTML={{__html: product.content }} />
					<EditableContent 
						title={data[id].title} 
						text={data[id].text}
						fontFamily={data[id].fontFamily}
						link={id}
						showDownload={false}
						/>
					<div className='flex'>
						<a className={product.downloadLink ? 'refresh-button' : 'hidden'} href={product.downloadLink} ><u>Download Specimin ➬</u></a>
						<a className={product.downloadLink ? 'refresh-button' : 'hidden'} href={product.downloadLink} ><u>Source Files</u></a>
					</div>
				

				<table>
					<tr>
						<th>Category</th>
						<th>Data</th>
					</tr>
					<tr>
						<td>Designed by</td>
						<td><a href={product.designerLink}>{product.designer}</a></td>
					</tr>
					{/* TODO ADD IN WHEN APPLICABLE */}
					{/* <tr>
						<td>Styles</td>
						<td>
							<ul>
								<li>jgs font</li>
								<li>jgs</li>
								<li>jgs5</li>
								<li>jgs7</li>
							</ul>
						</td>
					</tr> 
					<tr>
						<td>Collections</td>
						<td>
							<ul>
								<li>Pixel</li>
								<li>Monospace</li>
								<li>Sans Serif</li>
								<li>Geometric</li>
								<li>Ascii</li>
							</ul>
						</td>
					</tr>
					*/}
					<tr>
						<td>Writing systems</td>
						<td>{product.writingSystems}</td>
					</tr>
					<tr>
						<td>License</td>
						<td>SIL Open Font License, Version 1.1</td>
					</tr>
					<tr>
						<td>Date</td>
						<td>Published {product.releaseDate}</td>
					</tr>
				</table>
				<br /><br /><br />
					{/* TODO ADD IN WHEN READY */}
					{/* <h3>{product.title} in use</h3>
					<div className="grid-layout large-grid">
						{product.img1 && <div className="grid-item span-2"><img className="product-subhero" src={product.img1} alt={product.title} loading="lazy"></img></div>}
						{product.img2 && <div className="grid-item span-2"><img className="product-subhero" src={product.img2} alt={product.title} loading="lazy"></img></div>}
						{product.img3 && <div className="grid-item span-2"><img className="product-subhero" src={product.img3} alt={product.title} loading="lazy"></img></div>}
						{product.img4 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img4} loading="lazy"></img></div>}
						{product.img5 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img5} loading="lazy"></img></div>}
						{product.img6 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img6} loading="lazy"></img></div>}
						{product.mov && <div className="grid-item span-2"><video autoPlay={true} loop={true} muted={true} width="400px" height="auto"><source autoPlay loop src={product.mov} type="video/mp4" /></video></div>}
					</div> */}
				</div>
			</article>
		)
	}

export default Post
