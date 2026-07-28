import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function PressuretrackPrivacy() {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            CMORE
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">혈압 기록장</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 7월</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">건강 기록이 기기를 떠나지 않습니다. 서버도 계정도 없으며, 모든 기록이 기기 안에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">건강 데이터는 전송되지 않습니다</h2>
            <p className="text-gray-400">입력한 혈압·맥박 기록은 리포트 생성을 포함해 모든 처리가 기기 안에서 이뤄집니다. 개발자의 서버나 제3자 서버로 업로드되지 않습니다. 이 앱은 광고 SDK와 크래시 리포팅 SDK를 포함하지 않으며 비행기 모드에서 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">혈압·맥박 기록, 프로필 설정, 구매(구독) 상태가 기기에만 저장됩니다. 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">구독은 Apple의 App Store 결제를 통해 처리되며 Apple이 관리합니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다. 구독은 설정에서 언제든 해지할 수 있습니다.</p>
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
