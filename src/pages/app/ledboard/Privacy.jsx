import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LedboardPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">LED 글자 전광판</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">이 앱은 개발자가 받는 개인정보가 없습니다. 계정과 서버가 없고, 쓴 글자와 설정은 기기 안에만 저장됩니다. 편집 화면에 Google AdMob 배너 광고가 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">마지막으로 쓴 글자, 최근 띄운 문구, 색·효과·속도·크기·거울 모드 설정만 기기의 앱 저장 공간에 보관됩니다. 개발자는 이 내용에 접근할 수 없고, 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">화면 켜짐 유지</h2>
            <p className="text-gray-400">전광판을 띄우는 동안에는 화면이 꺼지지 않도록 화면 켜짐 유지 기능을 씁니다. 닫으면 바로 해제됩니다. 이 기능은 정보를 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">광고(Google AdMob)</h2>
            <p className="text-gray-400">글자를 쓰고 고르는 편집 화면 아래에 Google AdMob 배너 광고가 나옵니다. 광고를 보여 주고 성과를 재기 위해 Google이 기기의 광고 식별자, IP 주소, 대략적인 위치, 광고 노출·클릭 기록 같은 정보를 수집할 수 있습니다. 이 정보는 Google이 처리하며 개발자는 받지 않습니다. 자세한 내용은 <a className="text-white underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google 광고 정책</a>을 참고해 주세요.</p>
            <p className="text-gray-400">유럽 경제 지역·영국·스위스에서는 앱을 처음 열 때 광고 동의 창이 나오고, 동의하지 않으면 광고를 보여 주지 않습니다. 기기의 설정 › Google › 광고에서 광고 식별자를 재설정하거나 맞춤 광고를 끌 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">전광판을 띄우는 동안</h2>
            <p className="text-gray-400">가로 전체 화면으로 띄우는 동안에는 광고가 나오지 않습니다.</p>
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
