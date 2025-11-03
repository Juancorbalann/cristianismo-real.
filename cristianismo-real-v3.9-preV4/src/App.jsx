
import { Link } from 'react-router-dom'
import devotionals from './data/devotionals.json'
import VersePreview from './components/VersePreview.jsx'
import DevotionalCard from './components/DevotionalCard.jsx'

export default function App(){
  return (
    <div>
      <header className="header" role="banner" aria-label="Encabezado principal">
        <span className="brand">Cristianismo Real</span>
        <span className="badge">v3.9 pre‑V4</span>
        <nav style={{marginLeft:'auto', display:'flex', gap:'.75rem'}} aria-label="Navegación">
          <Link to="/verso-del-dia" className="tag">Verso del día</Link>
          <Link to="/biblioteca" className="tag">Biblia</Link>
          <Link to="/admin" className="tag">Admin</Link>
        </nav>
      </header>

      <main className="container">
        <section className="card">
          <div className="kicker">Devocional destacado</div>
          <h1 className="title">{devotionals[0].title}</h1>
          <p className="small">{devotionals[0].reference}</p>
          <p>{devotionals[0].reflection.slice(0,180)}...</p>
          <div style={{display:'flex', gap:'.5rem', marginTop:'.8rem'}}>
            <Link className="button" to={"/devocional/0"} aria-label="Ver devocional completo">Ver devocional</Link>
            <Link className="button ghost" to="/verso-del-dia">Ir al verso del día</Link>
          </div>
        </section>

        <h2 style={{marginTop:'1.2rem'}}>Últimos devocionales</h2>
        <div className="grid" role="list">
          {devotionals.slice(1,7).map((d, i)=>(
            <DevotionalCard key={i} id={i+1} d={d}/>
          ))}
        </div>

        <section className="card" style={{marginTop:'1rem'}}>
          <VersePreview/>
        </section>
      </main>
      <footer>Hecho con 💛 — Modo oscuro dorado</footer>
    </div>
  )
}
