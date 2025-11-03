
export default function ImageWithCaption({src, alt, caption}){
  return (
    <figure className="card">
      <img src={src} alt={alt} style={{width:'100%', borderRadius:'.6rem'}}/>
      <figcaption className="caption">{caption}</figcaption>
    </figure>
  )
}
