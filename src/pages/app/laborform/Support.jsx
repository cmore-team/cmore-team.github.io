import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LaborformSupport() {
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
            근로계약서 작성
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">근로계약서 작성</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">고용노동부 표준근로계약서 서식으로 근로계약서를 작성하고, 내보내기 전에 최저임금·주휴수당·휴게시간 등 법정 항목을 자동으로 점검합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 몇 건까지 만들 수 있나요?</strong><br/>PDF 내보내기 기준 3건까지 무료입니다. 작성과 법정 점검은 제한 없이 사용할 수 있습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다. 다만 계약서 데이터는 기기에만 저장되므로 함께 옮겨지지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 최저임금은 언제 갱신되나요?</strong><br/>고용노동부 고시가 나오면 앱 업데이트로 반영합니다. 현재 2026년 시간급 10,320원 기준입니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 이 앱의 점검 결과가 법적 효력이 있나요?</strong><br/>없습니다. 이 앱은 서류 작성을 돕는 도구이며 법률 자문을 제공하지 않습니다. 개별 사안은 노무사·변호사 등 전문가와 상의하시기 바랍니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
