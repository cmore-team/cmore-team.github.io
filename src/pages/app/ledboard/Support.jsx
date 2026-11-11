import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LedboardSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">LED 글자 전광판</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">응원 문구를 쓰면 휴대폰 가로 화면 가득 LED 점 글자로 흘려 보내는 전광판 앱입니다. 콘서트·경기 응원, 공항·학원 픽업, 차 안 안내판으로 쓸 수 있습니다. 무지개·네온·거울 모드까지 모든 효과가 무료입니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사용 방법</h2>
            <p className="text-gray-400">띄울 글자를 쓰고 <strong className="text-white">글자색·바탕색·효과·흐름·속도·글자 크기</strong>를 고르세요. 위 미리보기에서 바로 확인할 수 있습니다. ‘가로 전체 화면으로 띄우기’를 누르면 화면 가득 흐릅니다. 띄운 화면을 한 번 누르면 닫기와 일시정지 버튼이 나오고, 뒤로 가기 버튼으로도 닫힙니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 차 유리창에 붙이면 글자가 거꾸로 보여요.</strong><br/>‘거울 모드’를 켜면 좌우가 뒤집혀 밖에서 바로 읽힙니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 이모지가 안 보여요.</strong><br/>점 글자는 한글·영문·숫자·기호를 지원합니다. 색 이모지는 점 글자로 표시되지 않을 수 있습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 띄우는 중에 화면이 꺼져요.</strong><br/>앱은 띄우는 동안 화면 켜짐을 요청합니다. 절전 모드나 기기 설정에 따라 꺼질 수 있으니 절전 모드를 꺼 주세요.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 결제나 광고가 있나요?</strong><br/>결제 창은 없습니다. 편집 화면 아래에 배너 광고 하나가 있고, 전광판을 띄우는 동안에는 광고가 나오지 않습니다.</p>
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
