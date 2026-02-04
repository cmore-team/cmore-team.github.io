import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CatchNotePrivacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">
            Catch Note
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective Date: February 2025</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information
            when you use <strong className="text-white">Catch Note</strong>, our real-time voice pitch detection app.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Microphone Audio</h3>
                <p className="text-sm">
                  Used for real-time pitch detection. Audio data is processed entirely on your device
                  and is never transmitted to any server.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Advertising Identifier (IDFA)</h3>
                <p className="text-sm">
                  When you grant permission through App Tracking Transparency, your device advertising
                  identifier is shared with Google AdMob to deliver personalized ads.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Analytics Data</h3>
                <p className="text-sm">
                  We collect anonymized usage statistics through Firebase Analytics, such as screen views
                  and events, to improve the app experience.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Session Records</h3>
                <p className="text-sm">
                  Pitch detection session data is stored only in your device&rsquo;s local storage
                  and is never sent externally.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Google AdMob</strong> (Advertising) &mdash;{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Firebase Analytics</strong> (Analytics) &mdash;{' '}
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can decline tracking in the App Tracking Transparency prompt. Non-personalized ads
                will be shown instead.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can change tracking permissions at any time in iOS Settings &gt; Privacy &amp; Security.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                Deleting the app removes all locally stored data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-sm">
              We do not store personal data on any server or share it with third parties.
              Advertising and analytics data is processed in accordance with Google&rsquo;s privacy policies.
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
