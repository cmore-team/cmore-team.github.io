import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AnzanPage from './pages/app/anzan/AnzanPage'
import AnzanPrivacy from './pages/app/anzan/Privacy'
import AnzanSupport from './pages/app/anzan/Support'
import CatchNotePrivacy from './pages/app/catchnote/Privacy'
import LaborformPrivacy from './pages/app/laborform/Privacy'
import LaborformSupport from './pages/app/laborform/Support'
import CrosslinePrivacy from './pages/app/crossline/Privacy'
import IdphotoPrivacy from './pages/app/idphoto/Privacy'
import IdphotoSupport from './pages/app/idphoto/Support'
import ReceiptcsvPrivacy from './pages/app/receiptcsv/Privacy'
import ReceiptcsvSupport from './pages/app/receiptcsv/Support'
import BillformPrivacy from './pages/app/billform/Privacy'
import BillformSupport from './pages/app/billform/Support'
import InkframePrivacy from './pages/app/inkframe/Privacy'
import InkframeSupport from './pages/app/inkframe/Support'
import QrbrandPrivacy from './pages/app/qrbrand/Privacy'
import QrbrandSupport from './pages/app/qrbrand/Support'
import SubsledgerPrivacy from './pages/app/subsledger/Privacy'
import SubsledgerSupport from './pages/app/subsledger/Support'
import PressuretrackPrivacy from './pages/app/pressuretrack/Privacy'
import PressuretrackSupport from './pages/app/pressuretrack/Support'
import WattcalcPrivacy from './pages/app/wattcalc/Privacy'
import WattcalcSupport from './pages/app/wattcalc/Support'
import LoanplanPrivacy from './pages/app/loanplan/Privacy'
import LoanplanSupport from './pages/app/loanplan/Support'
import LanbeamPage from './pages/app/lanbeam/LanbeamPage'
import LanbeamPrivacy from './pages/app/lanbeam/Privacy'
import LanbeamSupport from './pages/app/lanbeam/Support'
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
        <Route path="/app/laborform/privacy" element={<LaborformPrivacy />} />
        <Route path="/app/laborform/support" element={<LaborformSupport />} />
        <Route path="/app/idphoto/privacy" element={<IdphotoPrivacy />} />
        <Route path="/app/idphoto/support" element={<IdphotoSupport />} />
        <Route path="/app/receiptcsv/privacy" element={<ReceiptcsvPrivacy />} />
        <Route path="/app/receiptcsv/support" element={<ReceiptcsvSupport />} />
        <Route path="/app/billform/privacy" element={<BillformPrivacy />} />
        <Route path="/app/billform/support" element={<BillformSupport />} />
        <Route path="/app/inkframe/privacy" element={<InkframePrivacy />} />
        <Route path="/app/inkframe/support" element={<InkframeSupport />} />
        <Route path="/app/qrbrand/privacy" element={<QrbrandPrivacy />} />
        <Route path="/app/qrbrand/support" element={<QrbrandSupport />} />
        <Route path="/app/subsledger/privacy" element={<SubsledgerPrivacy />} />
        <Route path="/app/subsledger/support" element={<SubsledgerSupport />} />
        <Route path="/app/pressuretrack/privacy" element={<PressuretrackPrivacy />} />
        <Route path="/app/pressuretrack/support" element={<PressuretrackSupport />} />
        <Route path="/app/wattcalc/privacy" element={<WattcalcPrivacy />} />
        <Route path="/app/wattcalc/support" element={<WattcalcSupport />} />
        <Route path="/app/loanplan/privacy" element={<LoanplanPrivacy />} />
        <Route path="/app/loanplan/support" element={<LoanplanSupport />} />
        <Route path="/app/lanbeam" element={<LanbeamPage />} />
        <Route path="/app/lanbeam/privacy" element={<LanbeamPrivacy />} />
        <Route path="/app/lanbeam/support" element={<LanbeamSupport />} />
        <Route path="/tools/app-icon-generator" element={<AppIconGenerator />} />
        <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/tools/icon-resizer" element={<IconResizer />} />
        <Route path="/tools/feature-graphic-resizer" element={<FeatureGraphicResizer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
