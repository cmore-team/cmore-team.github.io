import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import CatchNotePrivacy from './pages/app/catchnote/Privacy'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app/catchnote/privacy" element={<CatchNotePrivacy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
