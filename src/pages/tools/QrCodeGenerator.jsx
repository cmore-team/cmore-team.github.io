import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Copy, Check } from 'lucide-react'
import QRCode from 'qrcode'

const SIZES = [128, 256, 512, 1024]
const ERROR_LEVELS = [
  { value: 'L', label: 'L (Low ~7%)' },
  { value: 'M', label: 'M (Medium ~15%)' },
  { value: 'Q', label: 'Q (Quartile ~25%)' },
  { value: 'H', label: 'H (High ~30%)' },
]

export default function QrCodeGenerator() {
  const [text, setText] = useState('')
  const [size, setSize] = useState(256)
  const [fgColor, setFgColor] = useState('#ffffff')
  const [bgColor, setBgColor] = useState('#000000')
  const [errorLevel, setErrorLevel] = useState('M')
  const [qrDataUrl, setQrDataUrl] = useState(null)
  const [copied, setCopied] = useState(false)
  const debounceRef = useRef(null)

  const generateQr = useCallback(async (value, sz, fg, bg, level) => {
    if (!value.trim()) {
      setQrDataUrl(null)
      return
    }
    try {
      const url = await QRCode.toDataURL(value, {
        width: sz,
        margin: 2,
        color: { dark: fg, light: bg },
        errorCorrectionLevel: level,
      })
      setQrDataUrl(url)
    } catch {
      setQrDataUrl(null)
    }
  }, [])

  useEffect(() => {
    clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      generateQr(text, size, fgColor, bgColor, errorLevel)
    }, 300)
    return () => clearTimeout(debounceRef.current)
  }, [text, size, fgColor, bgColor, errorLevel, generateQr])

  const handleDownload = () => {
    if (!qrDataUrl) return
    const link = document.createElement('a')
    link.download = `qrcode_${size}x${size}.png`
    link.href = qrDataUrl
    link.click()
  }

  const handleCopy = async () => {
    if (!qrDataUrl) return
    try {
      const res = await fetch(qrDataUrl)
      const blob = await res.blob()
      await navigator.clipboard.write([
        new ClipboardItem({ 'image/png': blob }),
      ])
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard API may not be available
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          <h1 className="text-sm font-medium">QR Code Generator</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">QR Code Generator</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter text or a URL to generate a QR code. Customize size, colors, and error correction level.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              {/* Text input */}
              <div>
                <label htmlFor="qrText" className="block text-sm font-medium text-gray-300 mb-2">
                  Text or URL
                </label>
                <textarea
                  id="qrText"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="https://example.com"
                  rows={4}
                  className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 resize-none"
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Size</label>
                <div className="flex gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`flex-1 px-3 py-2 text-sm rounded-lg border transition-colors ${
                        size === s
                          ? 'bg-white text-black border-white'
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fgColor" className="block text-sm font-medium text-gray-300 mb-2">
                    Foreground
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      id="fgColor"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-white/10 bg-transparent cursor-pointer"
                    />
                    <span className="text-sm text-gray-400 font-mono">{fgColor}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="bgColor" className="block text-sm font-medium text-gray-300 mb-2">
                    Background
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      id="bgColor"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="w-10 h-10 rounded-lg border border-white/10 bg-transparent cursor-pointer"
                    />
                    <span className="text-sm text-gray-400 font-mono">{bgColor}</span>
                  </div>
                </div>
              </div>

              {/* Error correction */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Error Correction</label>
                <div className="grid grid-cols-2 gap-2">
                  {ERROR_LEVELS.map((lvl) => (
                    <button
                      key={lvl.value}
                      onClick={() => setErrorLevel(lvl.value)}
                      className={`px-3 py-2 text-sm rounded-lg border transition-colors ${
                        errorLevel === lvl.value
                          ? 'bg-white text-black border-white'
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      {lvl.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="flex flex-col items-center justify-center">
              {qrDataUrl ? (
                <div className="space-y-6 w-full flex flex-col items-center">
                  <img
                    src={qrDataUrl}
                    alt="QR Code"
                    className="w-64 h-64 rounded-xl border border-white/10"
                  />
                  <p className="text-gray-500 text-sm">{size} × {size} px</p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PNG
                    </button>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                  <div className="w-32 h-32 border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-4xl opacity-30">QR</span>
                  </div>
                  <p className="text-sm">Enter text to generate a QR code</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
