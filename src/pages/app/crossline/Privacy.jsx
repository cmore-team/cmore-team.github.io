import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CrosslinePrivacy() {
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
            Crossline
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">Effective Date: April 2026</p>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, and safeguard your information
            when you use <strong className="text-white">Crossline</strong>, our ADHD-friendly habit tracking app.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Habit &amp; Completion Data</h3>
                <p className="text-sm">
                  Your habit names, nudge actions, schedules, completion records, mood entries,
                  and graduation notes are stored on your device using Apple&rsquo;s SwiftData framework.
                  This data never leaves your device unless you enable iCloud sync (premium feature).
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">iCloud Sync (Premium)</h3>
                <p className="text-sm">
                  If you subscribe to Crossline Premium, your habit data is synced across your devices
                  through Apple&rsquo;s CloudKit infrastructure. This data is stored in your personal iCloud
                  account and is encrypted in transit and at rest by Apple. We do not have access to your
                  iCloud data.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">AI Nudge Suggestions</h3>
                <p className="text-sm">
                  When you use the AI nudge feature, your habit name and context are sent to
                  OpenRouter API to generate personalized nudge suggestions. This data is processed
                  in real time and is not stored by us. Please refer to{' '}
                  <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    OpenRouter&rsquo;s Privacy Policy
                  </a>{' '}
                  for their data handling practices.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Screen Time &amp; App Blocking</h3>
                <p className="text-sm">
                  Crossline uses Apple&rsquo;s Family Controls and Screen Time APIs to enable app
                  blocking as a focus tool. All Screen Time data is processed entirely on your device
                  within Apple&rsquo;s privacy sandbox. We cannot see which apps you block or how you
                  use Screen Time.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Calendar Events</h3>
                <p className="text-sm">
                  If you enable calendar integration, Crossline creates events in your device&rsquo;s
                  calendar using Apple&rsquo;s EventKit. These events are managed within your local
                  calendar app. We do not access or read your existing calendar entries.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-medium mb-2">Notifications</h3>
                <p className="text-sm">
                  Reminder notifications are scheduled locally on your device. No notification data
                  is transmitted externally.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">What We Do NOT Collect</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not collect personal identifiers (name, email, phone number).
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not use advertising identifiers or run any ads.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not use third-party analytics or tracking services.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                We do not operate any server that stores your data.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Apple CloudKit</strong> (iCloud Sync, Premium only) &mdash;{' '}
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Apple Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">OpenRouter API</strong> (AI Nudge Suggestions) &mdash;{' '}
                  <a href="https://openrouter.ai/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Privacy Policy
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                <p className="text-sm">
                  <strong className="text-white">Apple StoreKit 2</strong> (Subscription Management) &mdash;{' '}
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                    Apple Privacy Policy
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
                You can export all your habit data as a CSV file from the app&rsquo;s settings at any time.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can disable iCloud sync at any time from the app&rsquo;s settings. Your data
                will remain on your device only.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                You can revoke Screen Time and Calendar permissions at any time in
                iOS Settings &gt; Privacy &amp; Security.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
                Deleting the app removes all locally stored data. iCloud data can be managed through
                iOS Settings &gt; Apple ID &gt; iCloud &gt; Manage Storage.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Data Protection</h2>
            <p className="text-sm">
              Crossline is designed with a privacy-first architecture. Your habit data is stored
              on-device by default. We do not operate any backend servers. The only external data
              transmission occurs when you actively use the AI nudge feature, which sends minimal
              context (habit name and anchor) to generate suggestions. iCloud sync uses Apple&rsquo;s
              end-to-end encrypted infrastructure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Children&rsquo;s Privacy</h2>
            <p className="text-sm">
              Crossline is not intended for children under 13. We do not knowingly collect data
              from children. The Screen Time features are intended for adult self-management,
              not parental controls.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-sm">
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated effective date. Continued use of the app after changes constitutes
              acceptance of the revised policy.
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
