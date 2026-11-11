import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function GeckonotePrivacy() {
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
            게코노트
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 10월 (1.0.0)</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
          <p className="text-gray-400">개체·케어 기록과 사진은 기본적으로 이 기기에만 저장됩니다. 로그인은 선택이며, 로그인하면 계정 식별자와 로그인 제공자가 확인한 이메일만 게코노트 서버에 저장합니다. 광고·분석 SDK가 없고 사용자를 추적하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 안에만 저장되는 정보</h2>
          <p className="text-gray-400">등록한 개체(이름·입양일·사진), 급여·분무·청소·체중 기록, 알림 설정은 앱의 기기 내부 저장공간에 보관됩니다. 앱을 삭제하면 함께 삭제됩니다.</p>
          <p className="text-gray-400">사진은 iOS 사진 선택기나 카메라로 사용자가 고른 것만 앱에 들어오며, 사진 라이브러리 전체 접근 권한을 요구하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">로그인(선택)</h2>
          <p className="text-gray-400">첫 실행 화면이나 설정 &gt; 계정에서 Apple 또는 Google로 로그인할 수 있습니다. 로그인하지 않아도 모든 기록 기능을 쓸 수 있습니다.</p>
          <p className="text-gray-400">로그인하면 게코노트 서버(<code>gecko-api.cmore.dev</code>)에 다음만 저장합니다: 게코노트 계정 ID, 로그인 제공자가 준 사용자 식별자(sub), 제공자가 확인한 이메일 주소(Apple의 &ldquo;이메일 가리기&rdquo;를 고르면 중계 주소), 계정 생성일, 로그인 유지용 토큰의 해시값. 이름·프로필 사진·연락처는 받지 않습니다.</p>
          <p className="text-gray-400">Apple로 로그인한 경우, 계정 삭제 시 Apple에 받은 토큰을 해지하기 위해 Apple이 발급한 갱신 토큰을 서버에 보관합니다.</p>
          <p className="text-gray-400">이 정보는 로그인 유지와 기기 간 계정 연결에만 쓰며, 광고·마케팅에 쓰거나 제3자에게 판매·제공하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">가족 공유(선택)</h2>
          <p className="text-gray-400">설정 &gt; 가족 초대로 공유를 켜면, 공유한 개체와 기록이 Apple iCloud(CloudKit) 공유를 통해 초대한 가족에게 전달됩니다. 이 데이터는 사용자의 iCloud 계정에 저장되며 개발자는 그 내용을 볼 수 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">보관 기간과 삭제</h2>
          <p className="text-gray-400">로그인 정보는 계정을 삭제할 때까지 보관합니다. 설정 &gt; 계정 &gt; 계정 삭제를 누르면 서버의 계정·연결된 로그인·토큰이 즉시 삭제되고, Apple 로그인은 Apple에 토큰 해지를 요청합니다. 기기의 기록은 지우지 않습니다.</p>
          <p className="text-gray-400">앱을 쓸 수 없는 경우 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 로 삭제를 요청할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">네트워크와 보안</h2>
          <p className="text-gray-400">서버와의 통신은 모두 HTTPS로 암호화됩니다. 서버는 IP 주소를 저장하지 않으며, 과도한 요청을 막기 위한 요청 수 제한에만 일시적으로 사용합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
          <p className="text-gray-400"><strong className="text-white">카메라</strong> — 개체 프로필과 체중 측정 사진을 찍을 때만 사용합니다.</p>
          <p className="text-gray-400"><strong className="text-white">알림</strong> — 급여·분무 등 케어 일정을 알려 드릴 때만 사용하며, 알림은 기기에서 예약됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
          <p className="text-gray-400">구매가 있는 경우 Apple의 App Store 결제를 통해 처리되며, 개발자는 결제 수단 정보를 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
          <p className="text-gray-400">이 앱은 아동을 대상으로 하지 않으며, 아동의 개인정보를 별도로 수집하지 않습니다.</p>
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
