
import { Link } from 'react-router-dom'
import verse from '../data/verseOfDay.json'
export default function VersePreview(){
  return (
    <div>
      <div className="kicker">Verso del día</div>
      <h3 className="title">{verse.reference}</h3>
      <p style={{whiteSpace:'pre-wrap'}}>{verse.text}</p>
      <p className="caption">Comentario: {verse.comment.slice(0,140)}...</p>
      <Link className="button" to="/verso-del-dia">Leer completo</Link>
    </div>
  )
}
