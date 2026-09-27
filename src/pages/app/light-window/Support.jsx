import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LightWindowSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">볕사이</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">볕사이 · Byeotsai</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">볕사이는 고른 장소와 날짜, 직접 확인한 시간대를 기준으로 일출·일몰·시민박명 시작과 종료 시각을 보여 줍니다. 필요할 때만 출발 시각, 이동·체류·귀가 시간을 넣어 외출이 일몰까지 또는 시민박명 종료까지의 빛 구간 안에 들어가는지 계산합니다. 확인한 외출 계획 하나를 저장해 두고 다시 열어 수정할 수 있습니다. 계정과 서버가 없고, 모든 계산은 기기 안에서 이루어집니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사용 방법</h2>
            <p className="text-gray-400"><strong className="text-white">빛 조회</strong> 탭에서 장소와 날짜를 고르면 그날의 빛 시각이 바로 나옵니다. 위치 권한은 필요하지 않습니다. <strong className="text-white">외출 시간 계산</strong>을 열어 가능 시간과 이동·체류 조건을 넣으면 조건별로 성립, 불성립, 판단할 수 없음과 그 이유를 보여 줍니다. 결과를 저장하면 <strong className="text-white">저장한 계획</strong> 탭에서 다시 열 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 위치 권한을 꼭 허용해야 하나요?</strong><br/>아닙니다. 기본 도시 목록이나 직접 입력한 좌표로 모든 기능을 쓸 수 있습니다. 현재 위치 버튼을 눌렀을 때만 한 번 위치를 요청하며, 받은 좌표도 사용자가 시간대를 직접 확인한 뒤에야 조회에 쓰입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 시간대는 왜 직접 골라야 하나요?</strong><br/>기기의 시간대가 조회하려는 장소의 시간대와 다를 수 있기 때문입니다. 볕사이는 좌표에서 시간대를 추측하지 않고, 확인한 시간대 기준으로만 시각을 표시합니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 시각이 다른 서비스와 1분 정도 달라요.</strong><br/>표시는 분 단위로 반올림되고, 서비스마다 계산 방식과 반올림이 다를 수 있습니다. 성립 판정은 반올림하지 않은 시각으로 계산합니다. 지형, 건물, 날씨에 따른 실제 밝기는 반영하지 않으니 야외 활동에는 충분한 여유를 두세요.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 조회할 수 있는 날짜 범위는요?</strong><br/>2000년 1월 1일부터 2099년 12월 31일까지입니다. 극지처럼 해가 지지 않거나 뜨지 않는 날은 그 상태를 그대로 알려 줍니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 저장한 계획이 사라지지 않나요?</strong><br/>계획은 기기 안의 앱 저장 공간에만 저장됩니다. 저장에 실패하면 작성 중인 값과 이전에 저장한 계획이 그대로 남습니다. 앱을 삭제하면 저장한 계획도 함께 삭제됩니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 아이패드에서도 되나요?</strong><br/>됩니다. iPhone과 iPad 모두 지원하며 가로·세로 방향과 큰 글씨 설정을 따릅니다.</p>
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
