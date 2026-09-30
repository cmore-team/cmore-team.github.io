import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function ParcelfitPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">택배크기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 10월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">택배크기는 개인정보를 수집하지 않습니다. 서버와 계정이 없고, 측정·요금 판정·저장은 모두 사용자의 기기 안에서만 이루어집니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
            <p className="text-gray-400">개발자는 사용자에 대한 어떤 정보에도 접근할 수 없습니다. 이 앱은 이름, 이메일, 연락처, 위치, 기기 식별자, 광고 식별자, 사용 기록을 수집하거나 외부로 전송하지 않습니다.</p>
            <p className="text-gray-400">분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 사용하지 않고 사용자를 추적하지 않습니다. 요금표는 앱에 함께 들어 있어 판정을 위해 네트워크에 연결하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">카메라</h2>
            <p className="text-gray-400">카메라 권한은 선택 사항이며 ‘카메라로 재기’를 누를 때만 요청합니다. 카메라 영상과 라이다 깊이 정보는 상자 모서리의 위치를 계산하는 데에만 기기 안에서 쓰이고 저장하거나 전송하지 않습니다. 측정을 마칠 때 사용자가 보관을 선택하면 작은 미리보기 사진 한 장만 기기에 저장됩니다. 권한을 허용하지 않아도 줄자로 잰 값을 입력해 모든 판정 기능을 쓸 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진</h2>
            <p className="text-gray-400">‘사진 붙이기’는 시스템 사진 선택기를 사용하므로 앱은 사용자가 고른 사진 한 장에만 접근합니다. 고른 사진은 작은 미리보기로 줄여 기기 안에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">사용자가 보관을 선택한 상자의 이름, 치수, 무게, 측정 방법, 미리보기 사진만 기기의 앱 저장 공간에 보관됩니다. 앱을 삭제하면 이 데이터도 함께 삭제되며, 개발자는 이를 확인하거나 복구할 수 없습니다. 공유를 누르면 사용자가 고른 앱으로 치수와 요금 텍스트가 전달되며, 이는 사용자가 직접 선택한 경우에만 일어납니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">상자 보관 무제한과 묶음 합산은 한 번 구매로 열리며, 결제는 Apple이 처리합니다. 개발자는 결제 정보를 받지 않습니다. 광고는 없습니다.</p>
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
