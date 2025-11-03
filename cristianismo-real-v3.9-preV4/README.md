
# Cristianismo Real — v3.9 (pre‑V4)

Base lista para desplegar en Netlify/Vercel y editar online (sin bajar ZIPs). Incluye:
- React (Vite), PWA, modo oscuro dorado
- Estructura de **Devocionales** (365) con **“Ver devocional”** (completo, no de 1 párrafo)
- **Verso del día** con comentario, aplicación y oración (texto largo)
- **Biblia (módulo sample)**: Génesis 1 (WEB, dominio público). Preparado para importar una Biblia completa
- **Audio**: reproductor + transcripción (modo sordo). Incluye `placeholder.wav`
- **Accesibilidad**: ARIA, transcripciones, contraste, focus
- **Firebase** preparado (auth + Firestore), variables en `.env`

## Scripts
```bash
npm i
npm run dev
npm run build
npm run preview
```

## Deploy (Netlify/Vercel)
1. Subí el repo a GitHub.
2. Linkealo en Netlify/Vercel → Build command: `npm run build` → Publish dir: `dist/`.
3. Para editar sin ZIP: modificá archivos en GitHub o CodeSandbox conectado al repo.

## Firebase
Crea `.env` con:
```
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```
Luego usa `src/services/firebase.js`. El panel `/admin` es un placeholder listo para conectar.

## Biblia completa offline
- Colocá un archivo `src/data/bible.json` con formato:
```json
{ "Genesis": {"1": ["verso1","verso2"]}, "Exodus": {...} }
```
- Ajustá `pages/Library.jsx` para leer ese archivo. El sample usa `bible-sample.json`.

## Estructura de devocional
Cada devocional tiene:
`title`, `theme`, `reference`, `reading`, `reflection`, `application`, `prayer`, `audioTranscript`.
Se muestra **completo** en `/devocional/:id`.

## Imágenes y audio
- Tus imágenes → `public/images/`
- Tus audios → `public/audio/` (mp3/wav). El player trae transcripción (modo sordo).

## PWA/Offline
- Cache básico en `public/service-worker.js`. Podés ampliar reglas (JSON, imágenes, audio).
