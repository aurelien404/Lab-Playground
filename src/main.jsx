import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // 🆕 Ajout
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* 🆕 Ajout */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
