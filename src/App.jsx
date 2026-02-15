import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Smartphone, Gamepad2, Image, RectangleHorizontal, Layers, QrCode,
  Menu, X, ArrowUp, Github, Mail, ChevronRight, FileText,
} from 'lucide-react'
import logoWhite from './assets/CMORE_logo_white.svg'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
]

const TOOLS = [
  { to: '/tools/app-icon-generator', icon: Layers, title: 'App Icon Generator', desc: 'Generate all iOS & Android icon sizes as a ZIP' },
  { to: '/tools/qr-code-generator', icon: QrCode, title: 'QR Code Generator', desc: 'Generate customizable QR codes from text or URLs' },
  { to: '/tools/icon-resizer', icon: Image, title: 'Icon Resizer', desc: 'Resize any image to 512x512 PNG' },
  { to: '/tools/feature-graphic-resizer', icon: RectangleHorizontal, title: 'Feature Graphic Resizer', desc: 'Resize to 1024x500 PNG for Play Store' },
]

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const animatedRef = useRef(false)

  // Scroll animations with Intersection Observer
  useEffect(() => {
    if (animatedRef.current) return
    animatedRef.current = true

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // Back to top visibility
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setIsMobileMenuOpen(false)

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
            <div className="px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-sm text-gray-400 hover:text-white transition-colors py-3 border-b border-white/5 last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          <span className="fade-in-up inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-gray-400 border border-white/20 rounded-full">
            EST. 2025
          </span>
          <h1 className="fade-in-up text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              See More, Create More.
            </span>
          </h1>
          <p className="fade-in-up text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
            We build intuitive mobile utilities and immersive indie games.
          </p>
          <a
            href="#projects"
            className="fade-in-up inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
          >
            Explore Our Work
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="fade-in-up text-3xl md:text-4xl font-bold mb-4 text-center">What We Build</h2>
          <p className="fade-in-up text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            From productivity tools to creative experiences
          </p>

          {/* Category cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="fade-in-up group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                <Smartphone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Utility Apps</h3>
              <p className="text-gray-400 leading-relaxed">
                Simple, focused tools that solve everyday problems. Designed for clarity and ease of use.
              </p>
            </div>
            <div className="fade-in-up group p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-14 h-14 mb-6 rounded-xl bg-white/10 flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Indie Games</h3>
              <p className="text-gray-400 leading-relaxed">
                Crafted experiences that spark joy. Small-scale games with heart and creativity.
              </p>
            </div>
          </div>

          {/* App showcase */}
          <h3 className="fade-in-up text-2xl font-semibold mb-8 text-center">Our Apps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="fade-in-up p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Catch Note</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Quick capture note app. Catch your ideas instantly with a simple and intuitive interface.
              </p>
              <Link
                to="/app/catchnote/privacy"
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Coming soon placeholder */}
            <div className="fade-in-up p-6 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center min-h-[220px]">
              <p className="text-gray-500 text-sm">More apps coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="fade-in-up text-3xl md:text-4xl font-bold mb-4 text-center">Free Tools</h2>
          <p className="fade-in-up text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Simple utilities for developers and designers
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {TOOLS.map((tool) => (
              <Link
                key={tool.to}
                to={tool.to}
                className="fade-in-up flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <tool.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                  <p className="text-gray-400 text-sm truncate">{tool.desc}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoWhite} alt="CMORE" className="h-5 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Mobile app & game development studio.<br />
                See more, create more.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/cmore-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="mailto:hunny3790@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Contact</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                hunny3790@gmail.com<br />
                Ansan-si, Gyeonggi-do,<br />
                Republic of Korea
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

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Privacy Modal */}
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
              <p><strong className="text-white">Effective Date:</strong> December 2025</p>
              <p>
                CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
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
                hunny3790@gmail.com
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
