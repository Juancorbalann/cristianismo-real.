
import { Link } from 'react-router-dom'
export default function DevotionalCard({id, d}){
  return (
    <article className="card" role="listitem">
      <div className="kicker">{d.reference}</div>
      <h3 className="title" style={{fontSize:'1.1rem'}}>{d.title}</h3>
      <p className="small">Tema: {d.theme}</p>
      <p>{d.reflection.slice(0,120)}...</p>
      <Link className="button" to={`/devocional/${id}`} aria-label={`Ver devocional: ${d.title}`}>Ver devocional</Link>
    </article>
  )
}
