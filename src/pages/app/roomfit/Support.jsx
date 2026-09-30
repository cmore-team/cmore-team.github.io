import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function RoomfitSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">RoomFit</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">RoomFit · 새집 가구 배치</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">RoomFit은 이사 갈 집의 방을 도면으로 만들고, 지금 쓰는 가구를 실제 크기로 놓아 들어가는지 미리 확인하는 앱입니다. 가구끼리 겹치거나 벽을 넘으면, 문이 열리는 자리를 가리면, 가구 사이 통로가 60cm보다 좁으면 바로 알려 줍니다. 계정과 서버가 없고 모든 데이터는 기기 안에만 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사용 방법</h2>
            <p className="text-gray-400"><strong className="text-white">라이다로 방 스캔</strong>은 라이다가 있는 iPhone Pro에서 방을 한 바퀴 비추면 벽·문·창문이 들어간 도면을 만듭니다. 라이다가 없으면 <strong className="text-white">직접 입력</strong>에 방의 가로×세로(cm)와 문 위치를 넣으세요. 도면에서 <strong className="text-white">가구 추가</strong>로 흔한 규격 가구를 고르거나 직접 크기를 넣고, 끌어서 옮기거나 90°씩 돌려 보세요. <strong className="text-white">말로 입력</strong>에서는 “베란다 폭 93 깊이 80”처럼 말한 치수를 확인한 뒤 적용할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 스캔한 치수가 실제와 조금 달라요.</strong><br/>스캔 도면은 몇 cm 차이가 날 수 있습니다. 벽을 탭하면 길이가 나오고, 메모에 실제 값을 적어 두거나 직접 입력으로 도면을 다시 만들 수 있습니다. 가구 자리가 빠듯하면 여유를 두고 판단해 주세요.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 문 열림 경고가 실제 방향과 달라요.</strong><br/>도면에서 문을 탭하면 경첩 위치와 열리는 방향(안쪽·바깥쪽)을 바꿀 수 있습니다. 실제 문과 맞추면 경고가 정확해집니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 쓸 수 있나요?</strong><br/>방 3개까지의 도면, 모든 경고, 말로 입력, 이삿짐 박스 어림셈, 도면 이미지 공유는 무료입니다. 한 번 구매하면 방 개수 제한이 없어지고 집 전체 도면, AR 미리보기, 배치 안 무제한 저장, 표기 없는 고해상도 도면과 PDF를 쓸 수 있습니다. 구매 복원은 설정(왼쪽 위 톱니바퀴)에서 할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">버그 제보나 가구 규격 추가 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
