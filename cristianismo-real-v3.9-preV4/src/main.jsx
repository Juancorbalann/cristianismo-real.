
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import App from './App.jsx'
import Devotional from './pages/Devotional.jsx'
import VerseOfDay from './pages/VerseOfDay.jsx'
import Library from './pages/Library.jsx'
import Admin from './pages/Admin.jsx'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/devocional/:id' element={<Devotional/>} />
        <Route path='/verso-del-dia' element={<VerseOfDay/>} />
        <Route path='/biblioteca' element={<Library/>} />
        <Route path='/admin' element={<Admin/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
