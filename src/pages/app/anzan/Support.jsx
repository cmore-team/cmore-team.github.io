import { Link } from 'react-router-dom'
import { ArrowLeft, Mail, RotateCcw, Bell, ShieldCheck } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function AnzanSupport() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link
            to="/app/anzan"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Anzan
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">
            Anzan
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Support</h1>
        <p className="text-gray-500 text-sm mb-12">
          Help for Anzan, CMORE&rsquo;s daily mental arithmetic practice app.
        </p>

        <section className="p-6 rounded-2xl border border-white/10 bg-white/5 mb-12">
          <Mail className="w-7 h-7 text-cyan-300 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            For bugs, purchase issues, accessibility feedback, or general questions, email CMORE.
          </p>
          <a
            href="mailto:hunny3790@gmail.com?subject=Anzan%20Support"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
          >
            <Mail className="w-4 h-4" />
            hunny3790@gmail.com
          </a>
        </section>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Common Help Topics</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <RotateCcw className="w-5 h-5 text-cyan-300 mb-3" />
                <h3 className="text-white font-medium mb-2">Restore purchases</h3>
                <p className="text-sm">
                  Open the Pro screen and use Restore Purchases. Purchases and subscriptions are
                  managed through your Apple Account.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <Bell className="w-5 h-5 text-cyan-300 mb-3" />
                <h3 className="text-white font-medium mb-2">Daily reminders</h3>
                <p className="text-sm">
                  If reminders do not appear, check iOS Settings &gt; Notifications and confirm that
                  notifications are enabled for Anzan.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <ShieldCheck className="w-5 h-5 text-cyan-300 mb-3" />
                <h3 className="text-white font-medium mb-2">Privacy</h3>
                <p className="text-sm">
                  Anzan does not require an account and stores practice progress on your device. Read
                  the full privacy policy for details.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Useful Links</h2>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/app/anzan"
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Anzan overview
              </Link>
              <Link
                to="/app/anzan/privacy"
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-3xl mx-auto text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CMORE. All rights reserved.
        </div>
      </footer>
    </div>
  )
}
