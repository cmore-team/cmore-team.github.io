import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AnzanPage from './pages/app/anzan/AnzanPage'
import AnzanPrivacy from './pages/app/anzan/Privacy'
import AnzanSupport from './pages/app/anzan/Support'
import CatchNotePrivacy from './pages/app/catchnote/Privacy'
import CrosslinePrivacy from './pages/app/crossline/Privacy'
import AppIconGenerator from './pages/tools/AppIconGenerator'
import QrCodeGenerator from './pages/tools/QrCodeGenerator'
import IconResizer from './pages/tools/IconResizer'
import FeatureGraphicResizer from './pages/tools/FeatureGraphicResizer'
import NotFound from './pages/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app/anzan" element={<AnzanPage />} />
        <Route path="/app/anzan/privacy" element={<AnzanPrivacy />} />
        <Route path="/app/anzan/support" element={<AnzanSupport />} />
        <Route path="/app/catchnote/privacy" element={<CatchNotePrivacy />} />
        <Route path="/app/crossline/privacy" element={<CrosslinePrivacy />} />
        <Route path="/tools/app-icon-generator" element={<AppIconGenerator />} />
        <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/tools/icon-resizer" element={<IconResizer />} />
        <Route path="/tools/feature-graphic-resizer" element={<FeatureGraphicResizer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
