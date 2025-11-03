
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Admin(){
  const [title,setTitle]=useState('')
  const [ok,setOk]=useState(false)
  return (
    <main className="container">
      <Link className="tag" to="/">← Volver</Link>
      <article className="card">
        <div className="kicker">Admin (placeholder)</div>
        <p>Cuando configures Firebase, este panel guardará devocionales en Firestore y también en caché local.</p>
        <label>Título de prueba</label>
        <input className="input" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Mi devocional"/>
        <button className="button" onClick={()=>setOk(true)}>Simular guardar</button>
        {ok && <p className="tag">Guardado (simulado). Integra Firebase en <code>src/services/firebase.js</code>.</p>}
      </article>
    </main>
  )
}
