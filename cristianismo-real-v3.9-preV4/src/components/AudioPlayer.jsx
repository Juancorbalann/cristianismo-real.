
export default function AudioPlayer({src, transcript}){
  return (
    <div className="card">
      <div className="kicker">Audio del devocional</div>
      <audio controls aria-label="Reproductor de audio del devocional">
        <source src={src} type="audio/wav"/>
        Tu navegador no soporta el audio.
      </audio>
      {transcript && <details style={{marginTop:'.5rem'}}>
        <summary className="tag">Transcripción (modo sordo)</summary>
        <p style={{whiteSpace:'pre-wrap'}}>{transcript}</p>
      </details>}
    </div>
  )
}
