import { useState } from 'react'
import { Smartphone, Gamepad2, X } from 'lucide-react'

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">CMORE</a>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-gray-400 border border-white/20 rounded-full">
            EST. 2026
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              See More, Create More.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            We build intuitive mobile utilities and immersive indie games.
          </p>
          <a
            href="#projects"
            className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
          >
            Explore Our Work
          </a>
        </div>
      </section>

      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What We Build</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From productivity tools to creative experiences
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Utility Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Simple, focused tools that solve everyday problems. Designed for clarity and ease of use.
              </p>
            </div>
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Indie Games</h3>
              <p className="text-gray-400 leading-relaxed">
                Crafted experiences that spark joy. Small-scale games with heart and creativity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">CMORE</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Mobile app & game development studio.<br />
                See more, create more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Contact</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                support@cmore.io<br />
                Ansan-si, Gyeonggi-do, Korea
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 text-sm hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CMORE. All rights reserved.
          </div>
        </div>
      </footer>

      {isPrivacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6">
          <div className="bg-zinc-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10">
            <div className="sticky top-0 bg-zinc-900 p-6 border-b border-white/10 flex items-center justify-between">
              <h2 className="text-xl font-bold">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 text-gray-400 text-sm leading-relaxed space-y-4">
              <p><strong className="text-white">Effective Date:</strong> January 2026</p>
              <p>
                CMORE ("we", "our", or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information
                when you use our mobile applications.
              </p>
              <h3 className="text-white font-semibold pt-4">Information We Collect</h3>
              <p>
                We may collect information you provide directly, such as when you contact us
                for support. We do not collect personal data unless explicitly provided by you.
              </p>
              <h3 className="text-white font-semibold pt-4">How We Use Information</h3>
              <p>
                Any information collected is used solely to improve our services and respond
                to your inquiries. We do not sell or share your information with third parties.
              </p>
              <h3 className="text-white font-semibold pt-4">Contact Us</h3>
              <p>
                If you have questions about this Privacy Policy, please contact us at
                support@cmore.io
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
