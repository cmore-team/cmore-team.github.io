import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function MinesweeperSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">지뢰찾기 클래식 · Minesweeper Classic</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">고전 규칙 그대로의 지뢰찾기입니다. 초급 9×9(지뢰 10개), 중급 16×16(40개), 고급 30×16(99개) 세 가지 난이도, 첫 탭 안전 보장, 깃발, 코드(숫자 칸 탭으로 이웃 한 번에 열기), 확대/축소와 이동을 지원합니다. 완전 오프라인이며 광고, 계정, 결제가 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">조작 방법</h2>
            <p className="text-gray-400">칸을 탭하면 열립니다. 칸을 길게 누르거나 하단의 깃발 모드를 켠 뒤 탭하면 깃발이 토글됩니다. 깃발이 있는 칸은 열리지 않습니다. 숫자 칸 주변의 깃발 수가 숫자와 같을 때 그 숫자 칸을 탭하면 나머지 이웃 칸이 한 번에 열립니다. 큰 보드는 두 손가락으로 확대/축소하거나 드래그해서 이동하고, 화면의 확대 버튼도 쓸 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 앱을 닫으면 게임이 사라지나요?</strong><br/>아닙니다. 진행 중인 게임은 자동으로 저장되고, 다시 열면 이어서 할 수 있습니다. 앱이 뒤에 있는 동안의 시간은 기록에 포함되지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 첫 탭에서 지뢰를 밟을 수 있나요?</strong><br/>없습니다. 첫 번째로 연 칸과 그 주변 8칸에는 지뢰가 놓이지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 힌트나 되돌리기가 있나요?</strong><br/>없습니다. 고전 규칙을 그대로 지키는 것이 이 앱의 목표입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 글자가 너무 작아요.</strong><br/>iOS 설정의 글자 크기(손쉬운 사용 크기 포함)를 따라 화면이 다시 배치됩니다. 보드 칸은 항상 44pt 이상으로 유지되며 대신 보드를 이동해서 봅니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 아이패드에서도 되나요?</strong><br/>됩니다. iPhone과 iPad 모두 지원하며 가로·세로 방향을 모두 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>

          <hr className="border-white/10" />

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Support (English)</h2>
            <p className="text-gray-400">Minesweeper Classic follows the classic rules: Beginner 9×9 with 10 mines, Intermediate 16×16 with 40, Expert 30×16 with 99. The first tap is always safe, flags block digging, and tapping a number whose adjacent flags match reveals the remaining neighbors (chord). Pinch or drag to move around large boards. Games save automatically and resume where you left off. The app is fully offline with no ads, accounts, or purchases. For bug reports or questions, email <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a>; we reply within two business days.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
