import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function PressuretrackSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">혈압 기록장</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">혈압 기록장 · Blood Pressure Log</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">매일 잰 혈압과 맥박을 날짜별로 기록하고 추이를 봅니다. 수축기·이완기·맥박을 입력하면 최근 기록과 흐름이 한눈에 정리됩니다. 진료 때 그대로 보여줄 수 있는 PDF 리포트와, 가족을 각각 관리하는 프로필을 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 의료 기기인가요?</strong><br/>아닙니다. 측정한 값을 기록·정리하는 도구이며 진단이나 치료 판단을 대신하지 않습니다. 혈압계로 잰 값을 직접 입력하는 방식입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>네. 진료용 PDF 리포트와 가족 프로필은 월·연간 구독으로 제공됩니다. 기록하고 화면으로 보는 것은 계속 무료입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>혈압·맥박 기록과 최근 추이 확인까지 무료입니다. 결제가 해제하는 것은 진료용 PDF 리포트 내보내기와 가족 프로필입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 데이터는 어디에 저장되나요?</strong><br/>모두 기기 안에 저장됩니다. 서버로 전송되지 않습니다.</p>
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
