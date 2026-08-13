import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LanbeamSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-2">Support</h1>
        <p className="text-gray-500 text-sm mb-12">iPhone and iPad launcher for your Mac</p>
        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section><h2 className="text-xl font-semibold text-white mb-3">Install the Mac companion</h2><p>Download the signed and notarized Lanbeam Agent from the <Link className="text-white underline" to="/app/lanbeam">Lanbeam download page</Link>. Open it on a Mac running macOS 14 or later. The agent lives in the menu bar.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Pairing</h2><p>Keep the Mac and iPhone or iPad on the same local network. Open the pairing QR code from the Mac menu and scan it in Lanbeam. You can also enter the six-digit code and compare the verification code shown on both devices.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Apps do not launch</h2><p>Open Lanbeam Agent and check the app policy. Allowed apps open immediately, Ask apps require confirmation on the Mac, and Blocked apps never launch. Launches are also denied while the Mac screen is locked.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Connection problems</h2><p>Confirm both devices are on the same LAN and local-network permission is enabled for Lanbeam. Restart Lanbeam Agent, then reopen Lanbeam. If the paired device was revoked from the Mac, pair it again.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Purchases</h2><p>Lanbeam Pro is a one-time, non-consumable purchase. Use Restore Purchases in the app after changing devices while signed in to the same Apple Account.</p></section>
          <section><h2 className="text-xl font-semibold text-white mb-3">Contact</h2><p>Email <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> with the iOS version, macOS version, and steps to reproduce the issue.</p></section>
        </div>
      </main>
    </div>
  )
}
