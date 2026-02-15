import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Upload, Download, X } from 'lucide-react'

export default function IconResizer() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [resizedImage, setResizedImage] = useState(null)
  const [imageInfo, setImageInfo] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef(null)

  const processFile = (file) => {
    if (!file || !file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const img = new window.Image()
      img.onload = () => {
        setImageInfo({ width: img.width, height: img.height, name: file.name })
        setSelectedImage(event.target.result)

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

  const handleFileSelect = (e) => processFile(e.target.files[0])

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
    processFile(e.dataTransfer.files[0])
  }

  const handleDownload = () => {
    if (!resizedImage) return
    const link = document.createElement('a')
    link.download = 'resized_512x512.png'
    link.href = resizedImage
    link.click()
  }

  const reset = () => {
    setSelectedImage(null)
    setResizedImage(null)
    setImageInfo(null)
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
          <h1 className="text-sm font-medium">Icon Resizer</h1>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Icon Resizer</h2>
          <p className="text-gray-400">
            Resize any image to 512x512 PNG
          </p>
        </div>

        <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
          <input
            type="file"
            accept="image/png,image/jpeg"
            onChange={handleFileSelect}
            ref={fileInputRef}
            className="hidden"
            id="iconResizerInput"
          />

          {!selectedImage ? (
            <label
              htmlFor="iconResizerInput"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${
                isDragging ? 'border-white/60 bg-white/10' : 'border-white/20 hover:border-white/40'
              }`}
            >
              <Upload className="w-10 h-10 text-gray-400 mb-4" />
              <span className="text-gray-400 text-lg">Drop image here or click to upload</span>
              <span className="text-gray-500 text-sm mt-2">PNG or JPEG</span>
            </label>
          ) : (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Original ({imageInfo?.width}&times;{imageInfo?.height})</p>
                  <img src={selectedImage} alt="Original" className="w-full max-w-[256px] mx-auto rounded-lg border border-white/10" />
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Resized (512&times;512)</p>
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
                  onClick={reset}
                  className="flex items-center gap-2 px-6 py-2.5 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
