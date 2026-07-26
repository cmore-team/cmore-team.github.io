import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LaborformPrivacy() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">
            근로계약서 작성
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 7월</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
          <p className="text-gray-400">이 앱은 개인정보를 수집하지 않습니다. 서버가 없고, 계정도 없으며, 작성한 계약서는 사용자의 기기에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">수집하지 않는 정보</h2>
          <p className="text-gray-400">개발자는 사용자가 앱에 입력한 어떤 정보에도 접근할 수 없습니다. 사업체명, 대표자, 근로자 성명·생년월일·주소·연락처, 임금, 근로시간 등 근로계약서에 입력하는 모든 항목은 기기 내부(UserDefaults)에만 저장되며 외부로 전송되지 않습니다.</p>
          <p className="text-gray-400">이 앱은 분석 SDK, 광고 SDK, 크래시 리포팅 SDK를 포함하지 않으며, 어떠한 네트워크 요청도 하지 않습니다. 비행기 모드에서 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
          <p className="text-gray-400">작성한 근로계약서 내용과 무료 발행 횟수가 기기에 저장됩니다. 앱을 삭제하면 이 데이터도 함께 삭제되며, 개발자는 이를 복구할 수 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">PDF 내보내기</h2>
          <p className="text-gray-400">PDF는 기기에서 생성되어 사용자가 선택한 앱(메일, 메신저, 파일 등)으로 전달됩니다. 전달 이후의 처리는 해당 앱과 서비스의 개인정보 처리방침을 따릅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
          <p className="text-gray-400">구매는 Apple의 App Store 결제를 통해 처리됩니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다. 구매 여부만 기기에 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
          <p className="text-gray-400">이 앱은 개인정보를 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
