import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function OffmemoPrivacy() {
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
            녹음글 · OffMemo
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 26일 · Effective Date: November 26, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 수집하는 개인정보</h2>
            <p className="text-gray-400">녹음글(OffMemo)은 회원가입이나 계정을 요구하지 않으며, 사용자의 개인정보, 음성 파일, 전사 텍스트, 요약 내용을 개발자 서버나 제3자 서버로 수집·전송·저장하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 마이크 및 음성 인식 권한</h2>
            <p className="text-gray-400">마이크 권한은 음성 메모 녹음과 실시간 파형 표시에만 사용되며, 음성 인식 권한은 기기 내 온디바이스 받아쓰기(Apple Speech 프레임워크, requiresOnDeviceRecognition)에만 사용됩니다. 핵심 요약 또한 기기 내 Apple Intelligence(지원 기기) 또는 온디바이스 NaturalLanguage 프레임워크로만 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 데이터 보관 및 삭제</h2>
            <p className="text-gray-400">녹음된 오디오(.m4a), 전사 텍스트, 요약, 북마크, 할 일 목록은 모두 사용자 기기의 앱 로컬 저장소에만 보관됩니다. 앱 내에서 개별 녹음을 삭제하거나 앱을 삭제하면 기기에 저장된 데이터도 함께 영구 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. 인앱 결제</h2>
            <p className="text-gray-400">Pro 평생 잠금 해제 결제는 Apple App Store(StoreKit)를 통해 처리되며, 개발자는 사용자의 결제 카드 정보나 Apple 계정 정보를 열람하거나 저장하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Privacy Policy (English Summary)</h2>
            <p className="text-gray-400">OffMemo does not collect, transmit, or store any personal data, audio recordings, transcripts, or summaries on external servers. Microphone and Speech Recognition permissions are used strictly on-device for recording and local transcription. Summaries are generated locally on-device. All recordings and notes stay on your device until you export or delete them. In-app purchases are handled solely by Apple StoreKit.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. 문의 · Contact</h2>
            <p className="text-gray-400">개인정보 관련 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 연락해 주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
