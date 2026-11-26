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
import PromptvaultPrivacy from './pages/app/promptvault/Privacy'
import PromptvaultSupport from './pages/app/promptvault/Support'
import GeckonotePrivacy from './pages/app/geckonote/Privacy'
import GeckonoteSupport from './pages/app/geckonote/Support'
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
import MinesweeperPrivacy from './pages/app/minesweeper/Privacy'
import MinesweeperSupport from './pages/app/minesweeper/Support'
import MinesweeperShare from './pages/app/minesweeper/Share'
import LightWindowPrivacy from './pages/app/light-window/Privacy'
import LightWindowSupport from './pages/app/light-window/Support'
import ParcelfitPrivacy from './pages/app/parcelfit/Privacy'
import ParcelfitSupport from './pages/app/parcelfit/Support'
import WeightgraphPrivacy from './pages/app/weightgraph/Privacy'
import WeightgraphSupport from './pages/app/weightgraph/Support'
import LedboardPrivacy from './pages/app/ledboard/Privacy'
import LedboardSupport from './pages/app/ledboard/Support'
import RoomfitPrivacy from './pages/app/roomfit/Privacy'
import RoomfitSupport from './pages/app/roomfit/Support'
import SealpadPrivacy from './pages/app/sealpad/Privacy'
import SealpadSupport from './pages/app/sealpad/Support'
import KeepfewPrivacy from './pages/app/keepfew/Privacy'
import KeepfewSupport from './pages/app/keepfew/Support'
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
        <Route path="/app/promptvault/privacy" element={<PromptvaultPrivacy />} />
        <Route path="/app/promptvault/support" element={<PromptvaultSupport />} />
        <Route path="/app/geckonote/privacy" element={<GeckonotePrivacy />} />
        <Route path="/app/geckonote/support" element={<GeckonoteSupport />} />
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
        <Route path="/app/minesweeper/privacy" element={<MinesweeperPrivacy />} />
        <Route path="/app/minesweeper/support" element={<MinesweeperSupport />} />
        <Route path="/app/minesweeper/share" element={<MinesweeperShare />} />
        <Route path="/app/light-window/privacy" element={<LightWindowPrivacy />} />
        <Route path="/app/light-window/support" element={<LightWindowSupport />} />
        <Route path="/app/parcelfit/privacy" element={<ParcelfitPrivacy />} />
        <Route path="/app/parcelfit/support" element={<ParcelfitSupport />} />
        <Route path="/app/weightgraph/privacy" element={<WeightgraphPrivacy />} />
        <Route path="/app/weightgraph/support" element={<WeightgraphSupport />} />
        <Route path="/app/ledboard/privacy" element={<LedboardPrivacy />} />
        <Route path="/app/ledboard/support" element={<LedboardSupport />} />
        <Route path="/app/roomfit/privacy" element={<RoomfitPrivacy />} />
        <Route path="/app/roomfit/support" element={<RoomfitSupport />} />
        <Route path="/app/sealpad/privacy" element={<SealpadPrivacy />} />
        <Route path="/app/sealpad/support" element={<SealpadSupport />} />
        <Route path="/app/keepfew/privacy" element={<KeepfewPrivacy />} />
        <Route path="/app/keepfew/support" element={<KeepfewSupport />} />
        <Route path="/tools/app-icon-generator" element={<AppIconGenerator />} />
        <Route path="/tools/qr-code-generator" element={<QrCodeGenerator />} />
        <Route path="/tools/icon-resizer" element={<IconResizer />} />
        <Route path="/tools/feature-graphic-resizer" element={<FeatureGraphicResizer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
