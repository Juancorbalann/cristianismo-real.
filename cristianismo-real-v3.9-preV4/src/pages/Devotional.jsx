
import { useParams, Link } from 'react-router-dom'
import devotionals from '../data/devotionals.json'
import AudioPlayer from '../components/AudioPlayer.jsx'
import ImageWithCaption from '../components/ImageWithCaption.jsx'

export default function Devotional(){
  const { id } = useParams()
  const idx = parseInt(id,10)
  const d = devotionals[idx]
  if(!d){ return <div className="container"><p>No encontrado.</p></div> }

  return (
    <main className="container">
      <Link className="tag" to="/">← Volver</Link>
      <article className="card" aria-labelledby="title">
        <div className="kicker">{d.reference}</div>
        <h1 id="title" className="title">{d.title}</h1>
        <p className="small">Tema: {d.theme} • Día {d.dayOfYear}/365</p>
        <hr/>
        <section aria-label="Lectura bíblica">
          <h2>Lectura</h2>
          <p style={{whiteSpace:'pre-wrap'}}>{d.reading}</p>
        </section>
        <section aria-label="Reflexión">
          <h2>Reflexión</h2>
          <p style={{whiteSpace:'pre-wrap'}}>{d.reflection}</p>
        </section>
        <section aria-label="Aplicación">
          <h2>Aplicación</h2>
          <p style={{whiteSpace:'pre-wrap'}}>{d.application}</p>
        </section>
        <section aria-label="Oración">
          <h2>Oración</h2>
          <p style={{whiteSpace:'pre-wrap'}}>{d.prayer}</p>
        </section>
      </article>

      <AudioPlayer src="/audio/placeholder.wav" transcript={d.audioTranscript}/>

      <ImageWithCaption src="/images/hero.jpg" alt="Imagen inspiracional" caption="“A Él sea la gloria por los siglos, amén.”"/>
    </main>
  )
}
