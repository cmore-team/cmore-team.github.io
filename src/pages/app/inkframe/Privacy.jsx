import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function InkframePrivacy() {
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
            CMORE
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">
            글자 뒤 사진
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 7월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
          <p className="text-gray-400">사진이 기기를 떠나지 않습니다. 서버가 없고, 계정도 없으며, 인물 분리와 합성이 모두 기기 안에서 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진은 어디로도 전송되지 않습니다</h2>
          <p className="text-gray-400">앱이 사진을 처리하는 모든 단계 — 인물 분리, 글자 합성, 원본 해상도 저장 — 는 Apple이 iOS에 내장한 Vision·Core Image 기능으로 기기 안에서 실행됩니다. 원본 사진도, 완성된 이미지도 개발자의 서버나 제3자 서버로 업로드되지 않습니다.</p>
          <p className="text-gray-400">이 앱은 분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 포함하지 않으며 어떠한 네트워크 요청도 하지 않습니다. 비행기 모드에서 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사람의 형태만 인식합니다</h2>
          <p className="text-gray-400">인물 인식은 사진에서 사람의 윤곽을 떼어내기 위해서만 사용되며, 그 결과는 이미지를 만드는 동안에만 메모리에 존재합니다. 얼굴 특징이나 생체 정보를 파일로 저장하거나 다른 사진과 대조하지 않고, 신원을 식별하는 용도로 사용하지 않습니다.</p>
          <p className="text-gray-400">앱을 닫으면 불러온 사진과 작업 내용은 메모리에서 사라집니다. 앱은 사진 라이브러리를 뒤지지 않고, 사용자가 고른 사진 한 장만 받습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
          <p className="text-gray-400"><strong className="text-white">사진 추가</strong> — 완성한 이미지를 사진 앱에 저장하기 위해 사용합니다. 저장 전용 권한이라 앱은 기존 사진을 읽지 않습니다.</p>
          <p className="text-gray-400">앨범에서 사진을 고를 때는 iOS 사진 선택기를 사용하며, 이 방식은 사진 라이브러리 접근 권한을 요구하지 않습니다. 사용자가 고른 사진만 앱에 전달됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
          <p className="text-gray-400">구매 여부만 기기에 저장됩니다. 사진과 작업 내용은 저장하지 않습니다. 앱을 삭제하면 이 정보도 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
          <p className="text-gray-400">구매는 Apple의 App Store 결제를 통해 처리됩니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
          <p className="text-gray-400">이 앱은 개인정보를 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
