import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function AnzanPrivacy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective Date: May 2026</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we handle information when you use{' '}
            <strong className="text-white">Anzan</strong>, our mental arithmetic practice app.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Practice Progress</h3>
                <p className="text-sm">
                  Daily progress, recent session records, current level, and reminder settings are
                  stored locally on your device. This data is not sent to CMORE or any third party.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Local Notifications</h3>
                <p className="text-sm">
                  If you enable daily reminders, Anzan schedules notifications on your device at the
                  time you choose. Reminder data is not transmitted externally.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Purchases</h3>
                <p className="text-sm">
                  If you choose an in-app purchase, the purchase is handled by Apple StoreKit. CMORE
                  does not receive or store your payment card information.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What We Do NOT Collect</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not require an account, name, email address, or phone number to use Anzan.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not use analytics SDKs or tracking SDKs.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not operate a backend server that stores your practice data.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not sell or share personal data with third parties.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Apple StoreKit</strong> (In-App Purchases and restore) &mdash;{' '}
                  <a
                    href="https://www.apple.com/legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    Apple Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Your Choices</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can disable notification permission at any time in iOS Settings.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                Deleting the app removes locally stored practice progress and reminder settings.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can manage or cancel App Store subscriptions in your Apple Account settings.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Children&rsquo;s Privacy</h2>
            <p className="text-sm">
              Anzan does not knowingly collect personal information from children. The app can be used
              without account registration or sharing personal details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated effective date.
            </p>
          </section>

          <section className="pt-6 border-t border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-sm">
              If you have questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:hunny3790@gmail.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                hunny3790@gmail.com
              </a>
            </p>
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
