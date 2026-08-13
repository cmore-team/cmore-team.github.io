import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LanbeamPrivacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/"><img src={logoWhite} alt="CMORE" className="h-6" /></Link>
          <Link to="/app/lanbeam" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"><ArrowLeft className="w-4 h-4" />Lanbeam</Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <span className="inline-block px-3 py-1 text-xs text-gray-400 border border-white/20 rounded-full">Lanbeam</span>
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective August 12, 2026</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-xl font-semibold text-white mb-3">Summary</h2><p>Lanbeam has no developer account system, advertising SDK, analytics SDK, or cloud relay. It communicates directly with the Mac Agent on your local network.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Local-network data</h2><p>The app discovers Lanbeam Agent through Bonjour. After pairing, it exchanges the Mac name, approved app list and icons, launch results, and optional CPU, memory, and disk metrics. Operational payloads are encrypted when supported. The developer does not receive this traffic.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Pairing and storage</h2><p>Pairing creates a device identifier and shared secret. Secrets are stored in the Apple Keychain on each device. The Mac keeps its allowlist and launch audit locally in Application Support. Revoking a device removes its paired access.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Camera and photos</h2><p>The camera is used only to scan the Mac pairing QR code. Photo-library access is used only when you choose a custom background. Selected media stays on the device and is not uploaded to the developer.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Purchases</h2><p>Apple processes Lanbeam Pro purchases. The developer does not receive payment-card information. The app reads the StoreKit entitlement needed to unlock Pro features.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Contact</h2><p>Email privacy questions to <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a>.</p></section>
        </div>
      </main>
    </div>
  )
}
