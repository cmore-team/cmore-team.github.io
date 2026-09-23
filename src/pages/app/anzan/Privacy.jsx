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
        <p className="text-gray-500 text-sm mb-12">Effective Date: September 6, 2026</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we handle information when you use{' '}
            <strong className="text-white">Harumath / Anzan</strong>, our mental arithmetic practice app.
            The usage analytics and StoreKit practices below describe the iOS app. Android advertising
            uses separate Google services, described under Third-Party Services.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Practice Progress</h3>
                <p className="text-sm">
                  Full daily progress, session records, missed-problem review records, current level,
                  and reminder settings are stored locally on your device, not uploaded as a database
                  or cloud backup. Selected usage and result summaries are sent for analytics as
                  described below; this does not mean that all information about your practice stays local.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Local Notifications</h3>
                <p className="text-sm">
                  If you enable daily reminders, Anzan schedules notifications on your device at the
                  time you choose. The full notification schedule stays on your device. Analytics
                  events can report enabling or disabling reminders, the selected hour and cadence,
                  cadence changes, and opening a reminder.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Purchases</h3>
                <p className="text-sm">
                  If you choose an in-app purchase, the purchase is handled by Apple StoreKit. CMORE
                  does not receive or store your payment card information through the app. Separately,
                  we send purchase-start, pending, cancellation, failure and successful-purchase events
                  with the selected product identifier to TelemetryDeck to understand the purchase flow.
                  These events do not contain payment card details or StoreKit transaction identifiers.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">iOS Usage Analytics</h3>
                <p className="text-sm">
                  Our own HTTPS client sends events to TelemetryDeck to help us understand and improve
                  app use, training and purchases. Events include app launches, training starts,
                  completions and exits, progress and level-report views, mental-math-age test actions,
                  daily puzzle completions, paywall views and reminder interactions. Depending on the
                  event, summaries include mode, timed status, scores, attempts, mistakes, best combo,
                  session count, level, streak and the calculated mental-math-age game result. That
                  result is not your actual age or a medical assessment.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Analytics Identifiers and Context</h3>
                <p className="text-sm">
                  Events carry a random identifier saved for this app installation and a random
                  session identifier, allowing events from the same installation or session to be
                  counted together. They also carry the app version/build, OS version, broad device
                  family and platform, preferred language, region and locale. Region here is a locale
                  preference, not a measured location. We do not send a name, email, advertising
                  identifier or hardware identifier with these events. Our client sends the random
                  installation identifier over HTTPS; TelemetryDeck documents additional identifier
                  hashing on its servers. We do not use these events to identify you personally or
                  combine them with other companies&apos; data for targeted advertising.
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
                The iOS app has no ads, advertising SDK, IDFA or IDFV collection. Analytics is sent
                through our own client, not through a third-party analytics SDK.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not operate a cloud backup of your full practice records. TelemetryDeck
                processes the separate usage summaries and purchase events described above.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not sell the iOS analytics data or share it for cross-company advertising
                tracking. Sending it to our analytics provider is still off-device data collection.
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
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">TelemetryDeck</strong> (iOS usage and purchase analytics) &mdash;{' '}
                  <a
                    href="https://telemetrydeck.com/docs/guides/privacy-faq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    TelemetryDeck Privacy FAQ
                  </a>
                  . The provider documents storage of event timestamps and metadata and states that
                  incoming IP addresses are not stored by its app analytics service. Its FAQ does not
                  guarantee a fixed deletion schedule for stored analytics events. These are provider
                  processing practices, not a promise that the app deletes previously sent data.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Google Mobile Ads and User Messaging Platform (Android only)</strong>{' '}
                  &mdash; Android uses Google services for ads and consent choices. Depending on
                  consent and region, Google may process advertising identifiers, app and ad interactions,
                  diagnostics and approximate location inferred from IP for advertising, analytics,
                  fraud prevention and personalization. Google privacy options are available in the
                  Android app when required. This is separate from the ad-free iOS app. See{' '}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-2"
                  >
                    Google Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Your Choices</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can disable reminders in the app or notification permission in iOS Settings.
                This does not disable analytics. The iOS app does not currently offer an analytics opt-out.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                Resetting progress clears the local progress covered by that action; deleting the app
                removes its local app data. Neither action deletes usage or purchase analytics already
                transmitted to TelemetryDeck, including aggregate analytics, or data held by Apple or Google.
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
              The app does not ask for an account or date of birth. The calculated mental-math-age
              result is a game score, not a child&apos;s actual age. The iOS analytics described above
              also applies when the app is used without an account. Parents or guardians with privacy
              questions can contact us below.
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
