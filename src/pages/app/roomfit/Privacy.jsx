import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function RoomfitPrivacy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 10월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">RoomFit(새집 가구 배치)은 개인정보를 수집하지 않습니다. 서버와 계정이 없고, 방 스캔·도면·가구 배치·메모는 모두 사용자의 기기 안에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
            <p className="text-gray-400">개발자는 사용자에 대한 어떤 정보에도 접근할 수 없습니다. 이 앱은 이름, 이메일, 연락처, 위치, 기기 식별자, 광고 식별자, 사용 기록을 수집하거나 외부로 전송하지 않습니다.</p>
            <p className="text-gray-400">분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 사용하지 않고 사용자를 추적하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">카메라(라이다 스캔·AR)</h2>
            <p className="text-gray-400">카메라 권한은 선택 사항이며 ‘라이다로 방 스캔’이나 ‘AR로 크기 보기’를 누를 때만 요청합니다. 카메라 영상은 방의 벽·문·창문 위치를 계산하거나 가구 크기 상자를 화면에 띄우는 데에만 기기 안에서 쓰이고, 영상 자체는 저장하거나 전송하지 않습니다. 스캔 결과(도면 치수와 3D 모델 파일)만 기기에 저장됩니다. 권한을 허용하지 않아도 가로×세로 숫자를 직접 넣어 도면을 만들 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">마이크와 음성 인식</h2>
            <p className="text-gray-400">마이크와 음성 인식 권한은 ‘말로 입력’의 마이크 버튼을 누를 때만 요청합니다. 기기가 지원하면 음성은 기기 안에서만 글자로 바뀝니다. 기기 안 인식을 지원하지 않는 기기에서는 Apple의 음성 인식 서비스가 처리하며, 이 경우 Apple의 개인정보 처리방침이 적용됩니다. 녹음 파일은 만들지 않으며, 받아쓴 문장은 사용자가 고친 뒤 치수로 적용할 때만 쓰입니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">사용자가 만든 방의 이름, 치수, 스캔 파일, 가구 배치, 저장한 배치 안, 메모만 기기의 앱 저장 공간(문서 폴더)에 보관됩니다. 앱을 삭제하면 이 데이터도 함께 삭제되며, 개발자는 이를 확인하거나 복구할 수 없습니다. 공유를 누르면 사용자가 고른 앱으로 도면 이미지나 PDF가 전달되며, 이는 사용자가 직접 선택한 경우에만 일어납니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">방 4개부터, 집 전체 도면, AR 미리보기, 배치 안 무제한 저장, 표기 없는 고해상도 도면·PDF는 한 번 구매로 열리며 구독이 아닙니다. 결제는 Apple이 처리하고 개발자는 결제 정보를 받지 않습니다. 광고는 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 개인정보를 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
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
