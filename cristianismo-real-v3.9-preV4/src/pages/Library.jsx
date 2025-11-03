
import { Link } from 'react-router-dom'
import sample from '../data/bible-sample.json'

export default function Library(){
  return (
    <main className="container">
      <Link className="tag" to="/">← Volver</Link>
      <article className="card">
        <div className="kicker">Biblia — Módulo de ejemplo (WEB)</div>
        <p className="small">Incluye Génesis 1 para pruebas. Podés importar el texto completo más tarde (WEB/KJV/Reina-Valera 1909 PD).</p>
        <h2>Génesis 1</h2>
        <pre style={{whiteSpace:'pre-wrap'}}>
{sample.Genesis["1"].map((v,i)=>`${i+1}. ${v}`).join('\n')}
        </pre>
      </article>
      <div className="alert">
        Para cargar una Biblia completa offline, colocá un archivo JSON en <code>src/data/bible.json</code> con formato {'{ "Book": {"1": ["verso1", "verso2"]} }'} y ajustá este módulo.
      </div>
    </main>
  )
}
