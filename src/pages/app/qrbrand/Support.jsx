import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function QrbrandSupport() {
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
            브랜드 QR 명함 · QRBrand
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">브랜드 QR 명함 · QRBrand: QR Code Maker</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">정적 QR 코드만 만드는 앱입니다. vCard 명함, Wi-Fi 접속, 링크, 텍스트, 결제 링크를 코드 패턴 안에 직접 담습니다. 리다이렉트 서버를 거치지 않으므로 한 번 만든 코드는 만료되지 않습니다. 가운데 로고 삽입, 색상 지정, 인쇄 해상도 PNG(2048px)·벡터 SVG·PDF 내보내기를 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 만든 코드가 나중에 죽지 않나요?</strong><br/>죽지 않습니다. 이 앱은 데이터를 코드 패턴 안에 직접 넣는 정적 QR만 만듭니다. 서버도, 계정도, 만료도 없습니다. 앱을 삭제해도, 저희 회사가 사라져도 인쇄된 코드는 계속 동작합니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 로고를 넣으면 스캔이 안 되지 않나요?</strong><br/>로고를 넣으면 앱이 오류 보정 레벨을 자동으로 올려 코드 일부가 가려져도 스캔되도록 만듭니다. 내보내기 전에 미리보기로 직접 스캔해서 확인하는 것을 권장합니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다. 무료 체험이 몰래 유료로 전환되는 일도 없습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>코드 종류 전부, 색상 지정, 저장·재편집, 화면용 PNG 내보내기까지 무료입니다. 무료 내보내기에는 워터마크가 들어갑니다. 결제가 해제하는 것은 로고 삽입, 인쇄 해상도 PNG·벡터 SVG·PDF 내보내기, 워터마크 제거입니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. Wi-Fi 코드가 연결되지 않습니다.</strong><br/>네트워크 이름(SSID)과 비밀번호의 오타, 암호화 방식(WPA/WEP) 선택을 확인해주세요. 숨김 네트워크는 기기에 따라 iOS 카메라가 접속을 지원하지 않을 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">QRBrand makes static QR codes only: vCard, Wi-Fi, links, text, and payment links, with a center logo, custom colors, and export as print-resolution PNG (2048px), vector SVG, and PDF. The data is encoded directly in the pattern — no redirect server, so a printed code never expires, even if you delete the app.</p>
            <p className="text-gray-400"><strong className="text-white">Is it a subscription?</strong> No. The full unlock is a one-time purchase and never renews. The free tier exports screen-resolution PNG with a watermark; the purchase unlocks logo insertion, print/vector export, and watermark removal. Restore purchases from Settings on a new device with the same Apple account.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다. For bug reports or feature requests, email us — we reply within two business days.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
