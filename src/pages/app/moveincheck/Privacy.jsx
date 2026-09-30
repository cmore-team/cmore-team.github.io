import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function MoveincheckPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">입주체크</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 10월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">입주체크는 개인정보를 수집하지 않습니다. 서버와 계정이 없고, 집 점검 기록과 사진은 모두 사용자의 기기 안에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
            <p className="text-gray-400">개발자는 사용자에 대한 어떤 정보에도 접근할 수 없습니다. 이 앱은 이름, 이메일, 연락처, 위치, 기기 식별자, 광고 식별자, 사용 기록을 수집하거나 외부로 전송하지 않습니다.</p>
            <p className="text-gray-400">분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 사용하지 않고 사용자를 추적하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진</h2>
            <p className="text-gray-400">‘앨범에서 추가’는 시스템 사진 선택기를 사용하므로 앱은 사용자가 고른 사진에만 접근합니다. 고른 사진은 원본 파일 그대로(촬영 시각 등 사진 속 정보 포함) 앱 저장 공간에 보관되어 점검 기록의 근거로 쓰입니다. 이 정보는 기기 밖으로 나가지 않습니다.</p>
            <p className="text-gray-400">‘촬영’을 누르면 카메라 권한을 요청하며, 찍은 사진은 위와 같이 기기 안에만 저장됩니다. 권한을 허용하지 않아도 앨범의 사진으로 모든 기능을 쓸 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">집 이름, 입주일, 메시지에 쓸 호칭과 이름, 공간별 점검 항목과 상태, 메모, 수리 요청 기록, 사진만 기기의 앱 저장 공간에 보관됩니다. 앱을 삭제하면 이 데이터도 함께 삭제되며, 개발자는 이를 확인하거나 복구할 수 없습니다.</p>
            <p className="text-gray-400">PDF 정리본, 사진, 메시지를 공유하면 사용자가 고른 앱(카카오톡, 메일 등)으로 전달되며, 이는 사용자가 직접 선택한 경우에만 일어납니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">여러 집, 퇴거 비교, 사진 무제한은 한 번 구매로 열리며, 결제는 Apple이 처리합니다. 개발자는 결제 정보를 받지 않습니다. 광고는 없습니다.</p>
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
