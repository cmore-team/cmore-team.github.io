import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function IdphotoPrivacy() {
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
            증명사진 메이커
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 10월 (1.1.1 익명 사용 통계 반영)</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
          <p className="text-gray-400">사진이 기기를 떠나지 않습니다. 서버가 없고, 계정도 없으며, 얼굴 인식과 배경 분리와 규격 계산이 모두 기기 안에서 처리됩니다. 사용자가 동의한 경우에만 사진이 포함되지 않은 익명 사용 통계를 보냅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진은 어디로도 전송되지 않습니다</h2>
          <p className="text-gray-400">앱이 사진을 처리하는 모든 단계 — 얼굴 위치 측정, 배경 흰색 교체, 규격에 맞춘 잘라내기, 4x6 인화 시트 생성 — 는 Apple이 iOS에 내장한 Vision·Core Image 기능으로 기기 안에서 실행됩니다. 원본 사진도, 완성된 증명사진도 개발자의 서버나 제3자 서버로 업로드되지 않습니다.</p>
          <p className="text-gray-400">이 앱은 광고 SDK와 크래시 리포팅 SDK를 포함하지 않습니다. 아래 익명 사용 통계에 동의하지 않으면 어떠한 네트워크 요청도 하지 않으며, 비행기 모드에서도 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">익명 사용 통계 (TelemetryDeck, 동의 시에만)</h2>
          <p className="text-gray-400">1.1.1부터 앱을 개선하기 위한 익명 사용 통계를 선택할 수 있습니다. 첫 화면 안내에서 &ldquo;보내기&rdquo;를 누르거나 설정의 &ldquo;익명 사용 통계 보내기&rdquo;를 켠 경우에만 통계 서비스 <a className="text-white underline" href="https://telemetrydeck.com/privacy/" target="_blank" rel="noopener noreferrer">TelemetryDeck</a>으로 전송하며, 동의하지 않으면 아무것도 보내지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">보내는 것</strong> — 앱 실행, 규격 선택(규격 이름), 사진 불러오기 방식(카메라·앨범), 저장·인화 시트·공유 완료, 구매 화면 열기, 구매·복원의 시작과 결과 같은 이벤트 종류와, 기기에서 무작위로 만든 통계용 ID(Apple 기기 식별자나 광고 식별자가 아님).</p>
          <p className="text-gray-400"><strong className="text-white">보내지 않는 것</strong> — 사진, 얼굴 위치·측정값, 파일 이름, 공유한 앱 이름, 이름·이메일 같은 개인 정보, 결제 수단 정보.</p>
          <p className="text-gray-400">이 통계는 사용자 신원과 연결하지 않고(비연결), 다른 회사 데이터와 결합하거나 광고 추적에 쓰지 않습니다(비추적). 판매하지 않습니다.</p>
          <p className="text-gray-400">설정에서 &ldquo;익명 사용 통계 보내기&rdquo;를 끄면 즉시 전송을 멈추고 기기의 통계용 ID를 지웁니다. 다시 켜면 이전과 이어지지 않는 새 ID가 만들어집니다. 이미 보낸 통계의 보관은 TelemetryDeck의 처리 방식을 따릅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">얼굴 데이터를 저장하지 않습니다</h2>
          <p className="text-gray-400">얼굴 인식은 사진 한 장에서 정수리·턱·눈의 위치를 재기 위해서만 사용되며, 그 결과는 화면에 규격 사진을 만드는 동안에만 메모리에 존재합니다. 얼굴 특징이나 생체 정보를 파일로 저장하거나 다른 사진과 대조하지 않고, 신원을 식별하는 용도로 사용하지 않습니다.</p>
          <p className="text-gray-400">앱을 닫으면 불러온 사진과 측정값은 메모리에서 사라집니다. 앱은 사진 라이브러리를 뒤지지 않고, 사용자가 고른 사진 한 장만 받습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
          <p className="text-gray-400"><strong className="text-white">카메라</strong> — 증명사진을 직접 촬영할 때만 사용합니다. 촬영한 사진은 기기 안에서 처리됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">사진 추가</strong> — 완성된 증명사진과 인화용 시트를 사진 앱에 저장하기 위해 사용합니다. 저장 전용 권한이라 앱은 기존 사진을 읽지 않습니다.</p>
          <p className="text-gray-400">앨범에서 사진을 고를 때는 iOS 사진 선택기를 사용하며, 이 방식은 사진 라이브러리 접근 권한을 요구하지 않습니다. 사용자가 고른 사진만 앱에 전달됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
          <p className="text-gray-400">구매 여부와 익명 사용 통계 동의 여부(동의한 경우 통계용 무작위 ID)만 기기에 저장됩니다. 사진은 저장하지 않습니다. 앱을 삭제하면 이 정보도 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
          <p className="text-gray-400">구매는 Apple의 App Store 결제를 통해 처리됩니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
          <p className="text-gray-400">이 앱은 이름·연락처 같은 개인정보를 수집하지 않으며, 동의한 경우의 익명 사용 통계 외에는 어떤 정보도 보내지 않습니다. 아동의 개인정보를 별도로 수집하지 않습니다.</p>
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
