import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function KeepfewSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">사진솎기: 중복·흐린 사진 정리 · Keep Few: Swipe Photo Cleanup</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">사진솎기(Keep Few)는 광고·계정·주간 구독 없이 iPhone·iPad 기기 안에서 비슷한 사진 묶음, 완전 중복, 흐린 사진, 스크린샷, 연사, 큰 동영상을 찾아내고 월별 스와이프와 안전한 2단계 보류함으로 깔끔하게 정리하는 사진 보관함 정리 도구입니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 구독 상품인가요?</strong><br/>아닙니다. 사진솎기 Pro는 1회 결제 평생 소장(비소모성) 상품이며 자동 갱신이나 숨은 체험 결제가 없습니다. 가족 공유도 지원합니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 무료로 어디까지 사용할 수 있나요?</strong><br/>전체 사진 검사, 6가지 항목 요약 보기, 월별 넘기기(스와이프) 정리, 보류함 삭제는 장수 제한 없이 무료입니다. 묶음 정리에서 한 번에 지우는 일괄 삭제도 누적 50장까지 무료로 체험할 수 있으며, Pro 1회 구매로 묶음 일괄 삭제를 무제한으로 해제할 수 있습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 지운 사진을 실수로 삭제하면 복구할 수 있나요?</strong><br/>네. 보류함에서 삭제를 확인해도 영구 삭제되지 않고 iOS 사진 앱의 '최근 삭제된 항목' 앨범으로 이동합니다. 30일 이내에 사진 앱에서 바로 되살릴 수 있습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 사진을 지웠는데 기기 여유 공간이 바로 안 늘어나요.</strong><br/>'최근 삭제된 항목'에 남아 있거나 iCloud 사진 최적화로 원본이 iCloud에 보관된 사진은 기기 로컬 용량 반영까지 시간이 걸릴 수 있습니다. 앱에 표시되는 정리 용량은 추정치입니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 일부 사진만 허용했는데 나중에 사진을 더 추가할 수 있나요?</strong><br/>가능합니다. 홈·설정 화면의 '사진 더 선택하기' 버튼으로 언제든 검사 대상 사진을 추가하거나 iOS 설정에서 전체 접근으로 변경할 수 있습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 기기를 바꾸거나 재설치하면 구매가 유지되나요?</strong><br/>같은 Apple 계정으로 로그인한 뒤 설정 탭의 '구매 복원'을 누르면 Pro 권한이 즉시 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">Keep Few is a 100% on-device photo library cleanup app with zero ads, zero accounts, and zero subscriptions. Group N similar photos together with an automatically recommended sharpest Best Shot, spot exact duplicates, blurry shots, screenshots, bursts, and large videos, triage month-by-month with smooth swipes and undo, and review everything safely in the Staging Bin before confirming deletion.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Is Keep Few a subscription?</strong> No. Keep Few Pro is a single one-time non-consumable purchase with Family Sharing—never a weekly or annual subscription. Full scanning, category overview, unlimited month-by-month Swipe triage, Staging Bin deletion, and your first 50 Smart Batch deletions are free. Pro unlocks unlimited Smart Batch cleanup. Tap Restore Purchases in Settings on any device signed into the same Apple Account.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Can I recover deleted photos?</strong> Yes. Confirmed deletions move to Apple Photos &gt; Recently Deleted, where you can recover them for 30 days. Estimated space savings for iCloud-optimized photos may take time to reflect on local device storage.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다. For bug reports or feature requests, email us — we reply within two business days.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
