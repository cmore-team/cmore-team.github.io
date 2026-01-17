import { useState, useRef } from 'react'
import { Smartphone, Gamepad2, X, Image, Download, Upload } from 'lucide-react'
import logoWhite from './assets/CMORE_logo_white.svg'

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [resizedImage, setResizedImage] = useState(null)
  const [imageInfo, setImageInfo] = useState(null)
  const fileInputRef = useRef(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new window.Image()
      img.onload = () => {
        setImageInfo({ width: img.width, height: img.height, name: file.name })
        setSelectedImage(event.target.result)

        // Resize to 512x512
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 512
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, 512, 512)
        setResizedImage(canvas.toDataURL('image/png'))
      }
      img.src = event.target.result
    }
    reader.readAsDataURL(file)
  }

  const handleDownload = () => {
    if (!resizedImage) return
    const link = document.createElement('a')
    link.download = 'resized_512x512.png'
    link.href = resizedImage
    link.click()
  }

  const resetImage = () => {
    setSelectedImage(null)
    setResizedImage(null)
    setImageInfo(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </a>
          <div className="flex items-center gap-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#tools" className="text-sm text-gray-400 hover:text-white transition-colors">Tools</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div className="text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-widest text-gray-400 border border-white/20 rounded-full">
            EST. 2025
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

      <section id="tools" className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Free Tools</h2>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Simple utilities for developers and designers
          </p>

          <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Image className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Image Resizer</h3>
                <p className="text-gray-400 text-sm">1024×1024 → 512×512 PNG</p>
              </div>
            </div>

            <input
              type="file"
              accept="image/png,image/jpeg"
              onChange={handleImageSelect}
              ref={fileInputRef}
              className="hidden"
              id="imageInput"
            />

            {!selectedImage ? (
              <label
                htmlFor="imageInput"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-white/20 rounded-xl cursor-pointer hover:border-white/40 transition-colors"
              >
                <Upload className="w-8 h-8 text-gray-400 mb-3" />
                <span className="text-gray-400">Click to upload image</span>
                <span className="text-gray-500 text-sm mt-1">PNG or JPEG</span>
              </label>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Original ({imageInfo?.width}×{imageInfo?.height})</p>
                    <img src={selectedImage} alt="Original" className="w-full max-w-[256px] mx-auto rounded-lg border border-white/10" />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">Resized (512×512)</p>
                    <img src={resizedImage} alt="Resized" className="w-full max-w-[256px] mx-auto rounded-lg border border-white/10" />
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </button>
                  <button
                    onClick={resetImage}
                    className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    Reset
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoWhite} alt="CMORE" className="h-5 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed">
                Mobile app & game development studio.<br />
                See more, create more.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-300">Contact</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                hunny3790@gmail.com<br />
                9-3 Wadong-ro 7an-gil, Danwon-gu,<br />
                Ansan-si, Gyeonggi-do, 15255,<br />
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
