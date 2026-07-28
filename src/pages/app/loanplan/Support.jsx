import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LoanplanSupport() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            CMORE
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">대출 상환 계산기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">대출 상환 계산기 · Loan Planner</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">원금·금리·기간을 넣으면 월 상환액과 총 이자, 회차별 상환 스케줄을 계산합니다. 원리금균등과 원금균등 두 방식을 모두 지원하며, 조건이 다른 대출을 여러 개 저장해 나란히 비교할 수 있습니다. 갈아타기(대환)를 검토할 때 어느 쪽이 유리한지 한눈에 봅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 실제 대출 상품과 연결되나요?</strong><br/>아닙니다. 은행·계좌를 연동하지 않고 조건을 직접 입력해 계산하는 도구입니다. 어떤 금융 정보도 앱에 넘기지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>대출 하나의 월 상환액 계산은 무료입니다. 결제가 해제하는 것은 여러 조건의 다중 비교와 상환 스케줄 PDF 내보내기입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
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
