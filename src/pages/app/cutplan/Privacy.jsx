import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CutplanPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">CutPlan · 합판·목재 재단 도면 계산기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 / Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">CutPlan은 어떤 개인정보도 수집하지 않습니다. 계정과 외부 서버가 없으며, 모든 재단 계산·프로젝트 저장·PDF 생성은 사용자의 iPhone 안에서만 오프라인으로 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
            <p className="text-gray-400">개발자는 사용자의 이름, 이메일, 연락처, 위치, 기기 식별자, 광고 식별자, 프로젝트 치수나 사용 기록을 수집·열람·전송하지 않습니다. 서드파티 분석 SDK, 광고 SDK, 추적 도구를 포함하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 내 저장 및 PDF 내보내기</h2>
            <p className="text-gray-400">사용자가 입력한 원판 규격과 부품 목록은 기기 내부 저장 공간에만 보관되며, 앱을 삭제하면 함께 삭제됩니다. PDF 내보내기는 사용자가 직접 공유 시트를 눌렀을 때만 선택한 앱이나 프린터로 파일을 전달합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">인앱 결제</h2>
            <p className="text-gray-400">CutPlan Pro 평생 잠금 해제는 Apple App Store(StoreKit)를 통해 안전하게 처리됩니다. 개발자는 카드 번호나 결제 수단 정보에 접근하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 연락해 주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
