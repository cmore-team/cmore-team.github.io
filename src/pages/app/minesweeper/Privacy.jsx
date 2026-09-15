import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function MinesweeperPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">지뢰찾기 클래식</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 9월 · Privacy Policy (English below)</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">이 앱은 개인정보를 수집하지 않습니다. 서버가 없고, 계정도 없으며, 게임 진행 상태는 사용자의 기기에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
            <p className="text-gray-400">개발자는 사용자에 대한 어떤 정보에도 접근할 수 없습니다. 이 앱은 이름, 이메일, 연락처, 위치, 사진, 기기 식별자, 광고 식별자, 사용 기록을 수집하지 않습니다.</p>
            <p className="text-gray-400">이 앱은 분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 포함하지 않으며, 어떠한 네트워크 요청도 하지 않습니다. 비행기 모드에서 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">진행 중인 게임의 보드 상태(열린 칸, 깃발, 난이도, 경과 시간)와 마지막으로 사용한 입력 모드(파기/깃발)가 기기 내부에만 저장됩니다. 앱을 삭제하면 이 데이터도 함께 삭제되며, 개발자는 이를 복구할 수 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제와 광고</h2>
            <p className="text-gray-400">이 앱은 무료이며 인앱 구매, 구독, 광고가 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 개인정보를 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요.</p>
          </section>

          <hr className="border-white/10" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy (English)</h2>
            <p className="text-gray-400">Minesweeper Classic does not collect any personal data. There is no server, no account, no analytics, advertising, or crash-reporting SDK, and the app makes no network requests. Your in-progress board (revealed cells, flags, difficulty, elapsed time) and your last input mode are stored only on your device and are deleted with the app. The app is free, with no purchases, subscriptions, or ads. Because no data is collected, no data is collected from children either. Questions: <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a>.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
