import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function WattcalcSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">전기 계산기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">전기 계산기 · Electrician Calculator</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">현장에서 바로 쓰는 전기 계산기 모음입니다. 옴의 법칙(전압·전류·저항·전력), 전압강하, 전력량, 전선 허용전류와 굵기 계산을 지원합니다. 값 하나를 잘못 넣으면 사고로 이어지는 작업이니, 공식과 기준값을 정확히 담는 데 집중했습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 계산 결과가 맞는지 어떻게 믿나요?</strong><br/>옴의 법칙과 전압강하 공식은 알려진 기준값으로 자동 테스트를 거칩니다. 그래도 최종 판단은 현장 규정과 도면을 따르세요. 이 앱은 빠른 산출 도구이며 설계를 대체하지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>옴의 법칙과 전력량 같은 기본 계산기는 무료입니다. 결제가 해제하는 것은 전압강하·전선 굵기를 포함한 계산기 전체 세트와 현장 프리셋 저장입니다.</p>
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
