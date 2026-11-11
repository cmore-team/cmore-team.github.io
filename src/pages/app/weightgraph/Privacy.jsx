import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function WeightgraphPrivacy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">몸무게 기록은 서버로 보내지 않고 사용자의 기기 안에만 저장합니다. 계정과 서버가 없습니다. 광고를 위해 Google AdMob을 사용합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">사용자가 넣은 몸무게, 날짜, 아침·저녁 구분, 메모, 고친 기록, 목표 체중, 키, 목표 방향만 기기의 앱 저장 공간에 보관됩니다. 개발자는 이 기록에 접근할 수 없습니다. 앱을 삭제하면 기록도 함께 삭제되며 개발자는 복구할 수 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">백업 파일과 내보내기</h2>
            <p className="text-gray-400">‘백업 파일 저장’과 ‘기간 골라 내보내기(CSV)’는 사용자가 누를 때만 파일을 만들고, 저장할 위치나 공유할 앱은 사용자가 고릅니다. 앱이 이 파일을 다른 곳으로 자동으로 보내지 않습니다. ‘백업 불러오기’는 사용자가 고른 파일 한 개만 읽습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">광고(Google AdMob)</h2>
            <p className="text-gray-400">오늘·그래프·기록 화면 아래에 Google AdMob 배너 광고가 나옵니다. 광고를 보여 주고 성과를 재기 위해 Google이 기기의 광고 식별자, IP 주소, 대략적인 위치, 광고 노출·클릭 기록 같은 정보를 수집할 수 있습니다. 이 정보는 Google이 처리하며 개발자는 받지 않습니다. 자세한 내용은 <a className="text-white underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google 광고 정책</a>을 참고해 주세요.</p>
            <p className="text-gray-400">유럽 경제 지역·영국·스위스에서는 앱을 처음 열 때 광고 동의 창이 나오고, 동의하지 않으면 광고를 보여 주지 않습니다. 기기의 설정 › Google › 광고에서 광고 식별자를 재설정하거나 맞춤 광고를 끌 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">건강 정보 안내</h2>
            <p className="text-gray-400">몸무게 그래프는 의료 기기가 아니며 진단이나 치료를 위한 앱이 아닙니다. 몸무게 기록은 광고나 다른 목적에 쓰이지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 만 13세 미만 아동을 대상으로 하지 않으며 아동의 개인정보를 알면서 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">변경과 문의</h2>
            <p className="text-gray-400">처리방침이 바뀌면 이 페이지에 시행일과 함께 게시합니다. 개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
