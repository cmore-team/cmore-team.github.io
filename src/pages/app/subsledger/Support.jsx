import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function SubsledgerSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">새는돈</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">새는돈 · 구독 관리</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">매달 나가는 구독료를 한곳에 모아 관리합니다. 넷플릭스, 유튜브 프리미엄, 각종 멤버십까지 결제일과 금액을 등록하면 월·연간 지출이 자동으로 계산됩니다. 해지하지 않고 잊고 있던 구독이 얼마인지 한눈에 보입니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 구독 정보를 자동으로 불러오나요?</strong><br/>아닙니다. 카드·계좌를 연동하지 않고 직접 등록하는 방식입니다. 결제 수단을 앱에 넘기지 않아도 되며, 모든 데이터는 기기 안에만 저장됩니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다. 구독을 관리하는 앱이 구독으로 돈을 받으면 본末이 뒤바뀌기 때문입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>구독 5개까지 등록하고 월 지출을 볼 수 있습니다. 결제가 해제하는 것은 5개 초과 등록과 연간 리포트입니다.</p>
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
