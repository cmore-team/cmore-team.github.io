import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Upload, Download, X, ArrowLeft, Loader2 } from 'lucide-react'
import JSZip from 'jszip'

const IOS_ICONS = [
  { size: 1024, label: 'App Store' },
  { size: 180, label: 'iPhone @3x (60pt)' },
  { size: 120, label: 'iPhone @2x (60pt)' },
  { size: 167, label: 'iPad Pro @2x (83.5pt)' },
  { size: 152, label: 'iPad @2x (76pt)' },
  { size: 80, label: 'Spotlight @2x' },
  { size: 87, label: 'Settings @3x' },
  { size: 58, label: 'Settings @2x' },
  { size: 60, label: 'Notification @3x' },
  { size: 40, label: 'Notification @2x' },
]

const ANDROID_ICONS = [
  { size: 512, density: 'playstore', folder: null, filename: 'playstore-icon.png', label: 'Play Store' },
  { size: 192, density: 'xxxhdpi', folder: 'mipmap-xxxhdpi', filename: 'ic_launcher.png', label: 'xxxhdpi' },
  { size: 144, density: 'xxhdpi', folder: 'mipmap-xxhdpi', filename: 'ic_launcher.png', label: 'xxhdpi' },
  { size: 96, density: 'xhdpi', folder: 'mipmap-xhdpi', filename: 'ic_launcher.png', label: 'xhdpi' },
  { size: 72, density: 'hdpi', folder: 'mipmap-hdpi', filename: 'ic_launcher.png', label: 'hdpi' },
  { size: 48, density: 'mdpi', folder: 'mipmap-mdpi', filename: 'ic_launcher.png', label: 'mdpi' },
]

function generateContentsJson() {
  const images = [
    { size: 1024, scale: '1x', idiom: 'universal', platform: 'ios', filename: 'icon-1024.png' },
    { size: 180, scale: '3x', idiom: 'iphone', sizePoint: '60x60', filename: 'icon-180.png' },
    { size: 120, scale: '2x', idiom: 'iphone', sizePoint: '60x60', filename: 'icon-120.png' },
    { size: 167, scale: '2x', idiom: 'ipad', sizePoint: '83.5x83.5', filename: 'icon-167.png' },
    { size: 152, scale: '2x', idiom: 'ipad', sizePoint: '76x76', filename: 'icon-152.png' },
    { size: 80, scale: '2x', idiom: 'universal', sizePoint: '40x40', filename: 'icon-80.png' },
    { size: 87, scale: '3x', idiom: 'iphone', sizePoint: '29x29', filename: 'icon-87.png' },
    { size: 58, scale: '2x', idiom: 'universal', sizePoint: '29x29', filename: 'icon-58.png' },
    { size: 60, scale: '3x', idiom: 'iphone', sizePoint: '20x20', filename: 'icon-60.png' },
    { size: 40, scale: '2x', idiom: 'universal', sizePoint: '20x20', filename: 'icon-40.png' },
  ]

  return JSON.stringify({
    images: images.map(img => {
      const entry = {
        filename: img.filename,
        idiom: img.idiom,
        scale: img.scale,
      }
      if (img.sizePoint) entry.size = img.sizePoint
      if (img.platform) entry.platform = img.platform
      return entry
    }),
    info: {
      author: 'xcode',
      version: 1,
    },
  }, null, 2)
}

function resizeToCanvas(img, size) {
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, size, size)
  return canvas
}

function canvasToBlob(canvas) {
  return new Promise(resolve => {
    canvas.toBlob(resolve, 'image/png')
  })
}

export default function AppIconGenerator() {
  const [sourceImage, setSourceImage] = useState(null)
  const [sourceInfo, setSourceInfo] = useState(null)
  const [generating, setGenerating] = useState(false)
  const [previews, setPreviews] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)
  const imgRef = useRef(null)

  const loadImage = useCallback((file) => {
    if (!file || !file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new window.Image()
      img.onload = () => {
        setSourceInfo({ width: img.width, height: img.height, name: file.name })
        setSourceImage(e.target.result)
        imgRef.current = img
        setPreviews(null)
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }, [])

  const handleFileSelect = (e) => {
    loadImage(e.target.files[0])
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    loadImage(e.dataTransfer.files[0])
  }

  const handleGenerate = async () => {
    if (!imgRef.current) return
    setGenerating(true)

    try {
      const img = imgRef.current
      const zip = new JSZip()
      const iosFolder = zip.folder('ios').folder('AppIcon.appiconset')
      const androidFolder = zip.folder('android')

      // Generate iOS icons
      const iosPreviewList = []
      for (const icon of IOS_ICONS) {
        const canvas = resizeToCanvas(img, icon.size)
        const blob = await canvasToBlob(canvas)
        const filename = `icon-${icon.size}.png`
        iosFolder.file(filename, blob)
        iosPreviewList.push({ size: icon.size, label: icon.label, url: canvas.toDataURL('image/png') })
      }
      iosFolder.file('Contents.json', generateContentsJson())

      // Generate Android icons
      const androidPreviewList = []
      for (const icon of ANDROID_ICONS) {
        const canvas = resizeToCanvas(img, icon.size)
        const blob = await canvasToBlob(canvas)
        if (icon.folder) {
          androidFolder.folder(icon.folder).file(icon.filename, blob)
        } else {
          androidFolder.file(icon.filename, blob)
        }
        androidPreviewList.push({ size: icon.size, label: icon.label, url: canvas.toDataURL('image/png') })
      }

      // Generate and download ZIP
      const content = await zip.generateAsync({ type: 'blob' })
      const url = URL.createObjectURL(content)
      const link = document.createElement('a')
      link.href = url
      link.download = 'AppIcons.zip'
      link.click()
      URL.revokeObjectURL(url)

      setPreviews({ ios: iosPreviewList, android: androidPreviewList })
    } finally {
      setGenerating(false)
    }
  }

  const reset = () => {
    setSourceImage(null)
    setSourceInfo(null)
    setPreviews(null)
    imgRef.current = null
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back</span>
          </Link>
          <h1 className="text-sm font-medium">App Icon Generator</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Icon Generator</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Upload your icon and generate all required sizes for iOS and Android. Downloads as a ready-to-use ZIP file.
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFileSelect}
            ref={fileInputRef}
            className="hidden"
            id="iconInput"
          />

          {!sourceImage ? (
            <label
              htmlFor="iconInput"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                isDragging ? 'border-white/60 bg-white/10' : 'border-white/20 hover:border-white/40'
              }`}
            >
              <Upload className="w-10 h-10 text-gray-400 mb-4" />
              <span className="text-gray-400 text-lg">Drop your icon here or click to upload</span>
              <span className="text-gray-500 text-sm mt-2">PNG or JPEG, square recommended</span>
            </label>
          ) : (
            <div className="space-y-8">
              {/* Source preview */}
              <div className="flex flex-col items-center gap-4">
                <p className="text-gray-400 text-sm">
                  Source: {sourceInfo?.name} ({sourceInfo?.width}x{sourceInfo?.height})
                </p>
                <img
                  src={sourceImage}
                  alt="Source icon"
                  className="w-32 h-32 rounded-2xl border border-white/10 object-cover"
                />
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-center">
                <button
                  onClick={handleGenerate}
                  disabled={generating}
                  className="flex items-center gap-2 px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {generating ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Generate & Download ZIP
                    </>
                  )}
                </button>
                <button
                  onClick={reset}
                  className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Reset
                </button>
              </div>

              {/* Generated previews */}
              {previews && (
                <div className="space-y-8 pt-4 border-t border-white/10">
                  {/* iOS */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">iOS (AppIcon.appiconset)</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                      {previews.ios.map((icon) => (
                        <div key={`ios-${icon.size}-${icon.label}`} className="text-center">
                          <img
                            src={icon.url}
                            alt={`${icon.size}x${icon.size}`}
                            className="w-full aspect-square rounded-lg border border-white/10 object-cover mb-1"
                          />
                          <p className="text-gray-500 text-xs">{icon.size}px</p>
                          <p className="text-gray-600 text-xs truncate">{icon.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Android */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Android (mipmap-*)</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
                      {previews.android.map((icon) => (
                        <div key={`android-${icon.size}`} className="text-center">
                          <img
                            src={icon.url}
                            alt={`${icon.size}x${icon.size}`}
                            className="w-full aspect-square rounded-lg border border-white/10 object-cover mb-1"
                          />
                          <p className="text-gray-500 text-xs">{icon.size}px</p>
                          <p className="text-gray-600 text-xs truncate">{icon.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={handleGenerate}
                      disabled={generating}
                      className="flex items-center gap-2 mx-auto px-6 py-2.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors disabled:opacity-50"
                    >
                      <Download className="w-4 h-4" />
                      Download ZIP Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
