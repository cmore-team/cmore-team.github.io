import { Link } from 'react-router-dom'
import { ArrowLeft, Download, ShieldCheck } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

const downloadURL = '/downloads/lanbeam/LanbeamAgent-1.0.0.zip'

export default function LanbeamPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            CMORE
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-300 border border-cyan-300/30 rounded-full">LAN-FIRST MAC LAUNCHER</span>
        <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-4">Lanbeam</h1>
        <p className="text-xl text-gray-300 mb-10">Turn your iPhone or iPad into a private control deck for your own Mac.</p>

        <a href={downloadURL} className="inline-flex items-center gap-3 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition-colors">
          <Download className="w-5 h-5" />
          Download Lanbeam Agent 1.0.0 for Mac
        </a>
        <p className="text-sm text-gray-500 mt-3">Requires macOS 14 or later. Developer ID signed, notarized, and stapled by Apple.</p>

        <div className="grid gap-6 mt-14 text-gray-300">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white mb-3">Set up in three steps</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-400">
              <li>Download and open Lanbeam Agent on your Mac.</li>
              <li>Open Lanbeam on iPhone or iPad while both devices use the same local network.</li>
              <li>Scan the Mac Agent QR code or enter its six-digit pairing code.</li>
            </ol>
          </section>
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-white mb-3"><ShieldCheck className="w-5 h-5" />Private by design</h2>
            <p className="text-gray-400">No account and no cloud relay. Lanbeam only requests apps approved in the Mac allowlist. Paired requests are signed, protected against replay, and encrypted when supported.</p>
          </section>
        </div>

        <div className="flex gap-6 mt-10 text-sm">
          <Link className="underline text-gray-300" to="/app/lanbeam/support">Support</Link>
          <Link className="underline text-gray-300" to="/app/lanbeam/privacy">Privacy policy</Link>
        </div>
      </main>
    </div>
  )
}
