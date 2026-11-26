import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LinelensPrivacy() {
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
            대본촬영 · LineLens
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 26일 · Effective Date: November 26, 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. 수집하는 개인정보</h2>
            <p className="text-gray-400">대본촬영(LineLens)은 회원가입이나 로그인을 요구하지 않으며, 사용자의 영상, 음성, 대본 텍스트 및 개인정보를 외부 서버로 수집·전송·저장하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. 카메라·마이크·사진 보관함 권한</h2>
            <p className="text-gray-400">카메라와 마이크 권한은 대본을 보며 영상을 촬영하고 기기 내 음성 감지(Voice Pace)로 스크롤을 자동 일시정지하는 데에만 사용됩니다. 사진 보관함 추가 권한은 촬영이 끝난 영상을 사용자의 아이폰 사진 앱에 저장하는 용도로만 사용됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. 데이터 보관 및 삭제</h2>
            <p className="text-gray-400">모든 대본은 사용자 기기 내부에만 저장되며, 촬영된 영상은 사용자 사진 앱에만 저장됩니다. 앱에서 대본을 삭제하거나 앱을 삭제하면 로컬 대본 데이터도 즉시 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Privacy Policy (English Summary)</h2>
            <p className="text-gray-400">LineLens collects zero personal data, video, audio, or scripts. Camera and microphone permissions are used solely on-device for video recording and local voice-activity pacing. Recorded videos are saved directly to your Photos library. In-app purchases are processed exclusively by Apple StoreKit.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. 문의 · Contact</h2>
            <p className="text-gray-400">개인정보 관련 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 연락해 주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
