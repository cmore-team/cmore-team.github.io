import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function KeepfewPrivacy() {
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
            사진솎기 · Keep Few
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 · Effective November 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">사진과 동영상은 단 한 장도 기기를 떠나지 않습니다. 유사 사진 비교, 흐린 사진 판별, 중복 검사, 월별 스와이프 정리와 삭제가 모두 iPhone·iPad 기기 안에서만 처리되며 계정, 서버, 광고, 추적 SDK가 전혀 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진·동영상 데이터는 어디로도 전송되지 않습니다</h2>
            <p className="text-gray-400">사진솎기(Keep Few)는 사용자가 허용한 사진 보관함 항목을 Apple Vision 및 Accelerate 프레임워크로 기기 내부에서만 분석합니다. 분석 결과나 썸네일, 메타데이터는 개발자 서버나 제3자 서버로 전송되지 않습니다. 비행기 모드에서도 모든 정리 기능이 정상 작동합니다.</p>
            <p className="text-gray-400 mt-3">앱에서 삭제를 확인한 사진·동영상은 영구 삭제되지 않고 iOS 사진 앱의 '최근 삭제된 항목'으로 이동하며, 30일 이내에 사진 앱에서 언제든 복원할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">월별 스와이프 정리 진행 위치, 보류함 대기 목록, 이번 달 정리한 추정 용량 기록, 무료 일괄 삭제 사용 횟수 및 앱 설정은 사용자의 기기 로컬(UserDefaults)에만 저장됩니다. 앱을 삭제하면 모든 로컬 기록도 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
            <p className="text-gray-400"><strong className="text-white">사진 보관함 접근 (필수):</strong> 비슷한·중복·흐린 사진, 스크린샷, 연사, 큰 동영상을 기기 안에서 찾고 사용자가 직접 고른 항목만 삭제 요청하기 위해 사용합니다. 제한된 사진 접근(일부 사진 선택) 모드도 완전히 지원하며, 선택한 사진만 검사합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">Pro 1회 구매는 Apple App Store(StoreKit)를 통해 처리됩니다. 개발자는 결제 수단이나 청구 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 어떠한 개인정보도 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy (English)</h2>
            <p className="text-gray-400">Your photos and videos never leave your device. Similar-photo clustering, blur detection, duplicate finding, month-by-month swipe triage, and batch cleanup all run 100% on-device using Apple PhotoKit, Vision, and Accelerate. There is no account, no cloud server, no ad SDK, and no analytics tracking. Core features work completely offline—even in Airplane Mode.</p>
            <p className="text-gray-400 mt-3">Swipe progress, staging bin selections, monthly estimated space-saved history, and preferences are stored strictly locally on your iPhone or iPad via UserDefaults and removed if you uninstall the app. Photo Library access (full or Limited Access) is used solely to scan items you authorize and submit your confirmed deletions to iOS Recently Deleted (recoverable for 30 days in Apple Photos). One-time Pro purchases are processed exclusively by Apple via StoreKit—we never see or store payment details. Because Keep Few collects no personal data, it collects none from children either.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. For privacy inquiries, email us at the address above.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
