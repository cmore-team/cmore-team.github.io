import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function WeightgraphSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">몸무게 그래프</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">몸무게 그래프</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">하루 한 번 몸무게를 넣으면 7일 평균선으로 진짜 추세를 보여 주고, 목표까지 남은 kg을 알려 주는 체중 기록 앱입니다. 기록은 이 폰에만 저장되고, 백업 파일로 다른 폰에 옮길 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사용 방법</h2>
            <p className="text-gray-400"><strong className="text-white">오늘</strong> 탭에서 ‘오늘 몸무게 넣기’를 눌러 0.1kg 단위로 넣으세요. <strong className="text-white">그래프</strong> 탭에서는 주·월·분기·년 단위로 추세와 목표선을 보고, 변화·평균·최저·최고를 확인할 수 있습니다. <strong className="text-white">기록</strong> 탭에서 지난 기록을 고치거나 지울 수 있습니다. 목표 체중·키·백업은 오른쪽 위 설정에 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 같은 날 두 번 넣으면 어떻게 되나요?</strong><br/>같은 날·같은 시간대(아침/저녁)에 다시 넣으면 새 값으로 바뀌고, 이전 값은 ‘수정 기록’에 남습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 폰을 바꾸면 기록이 사라지나요?</strong><br/>기록은 이 폰에만 저장됩니다. 바꾸기 전에 설정 › ‘백업 파일 저장’으로 파일을 만들고, 새 폰에서 ‘백업 불러오기’로 그 파일을 고르세요.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 기록을 엑셀로 보고 싶어요.</strong><br/>그래프 탭 옵션의 ‘기간 골라 내보내기’에서 CSV 파일로 저장하면 엑셀·구글 시트에서 열 수 있습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 광고를 끌 수 있나요?</strong><br/>지금은 화면 아래 배너 광고 하나로 운영합니다. 몸무게를 넣을 때(키보드가 열릴 때)는 광고가 가려집니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">버그 제보나 기능 제안은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
