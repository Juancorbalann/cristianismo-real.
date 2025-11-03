
import { Link } from 'react-router-dom'
import verse from '../data/verseOfDay.json'

export default function VerseOfDay(){
  return (
    <main className="container">
      <Link className="tag" to="/">← Volver</Link>
      <article className="card">
        <div className="kicker">Verso del día</div>
        <h1 className="title">{verse.reference}</h1>
        <p style={{whiteSpace:'pre-wrap'}}>{verse.text}</p>
        <h2>Comentario</h2>
        <p style={{whiteSpace:'pre-wrap'}}>{verse.comment}</p>
        <h2>Aplicación</h2>
        <p style={{whiteSpace:'pre-wrap'}}>{verse.application}</p>
        <h2>Oración</h2>
        <p style={{whiteSpace:'pre-wrap'}}>{verse.prayer}</p>
      </article>
    </main>
  )
}
