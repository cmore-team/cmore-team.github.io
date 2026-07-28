import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function QrbrandPrivacy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 7월 · Effective July 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">코드에 넣은 내용이 기기를 떠나지 않습니다. QR 생성, 로고 합성, 내보내기가 전부 기기 안에서 처리되며 서버도 계정도 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">입력한 내용은 어디로도 전송되지 않습니다</h2>
            <p className="text-gray-400">연락처(vCard), Wi-Fi 이름과 비밀번호, 링크, 텍스트 등 코드에 담는 모든 데이터는 QR 패턴을 계산하기 위해 기기 안에서만 사용됩니다. 개발자의 서버나 제3자 서버로 업로드되지 않습니다. 이 앱이 만드는 QR은 정적 코드라서 리다이렉트 서버 자체가 존재하지 않고, 따라서 스캔 기록도 수집될 수 없습니다.</p>
            <p className="text-gray-400">이 앱은 광고 SDK와 크래시 리포팅 SDK를 포함하지 않습니다. 비행기 모드에서 모든 기능이 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">저장한 코드 목록(코드 내용, 색상, 로고 설정)과 구매 여부가 기기에만 저장됩니다. 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
            <p className="text-gray-400"><strong className="text-white">사진</strong> — 로고 이미지를 고를 때 iOS 사진 선택기를 사용합니다. 이 방식은 사진 라이브러리 접근 권한을 요구하지 않으며, 사용자가 고른 이미지 한 장만 앱에 전달됩니다. 완성한 코드를 사진 앱에 저장할 때는 저장 전용 권한만 사용합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">구매는 Apple의 App Store 결제를 통해 처리됩니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 개인정보를 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy (English)</h2>
            <p className="text-gray-400">Nothing you put into a code leaves your device. All QR generation, logo compositing, and export happen on-device. There is no server and no account, and because every code is static, there is no redirect service and no scan tracking. The app contains no ads and no crash-reporting SDK, and works fully in airplane mode.</p>
            <p className="text-gray-400">Saved codes (content, colors, logo settings) and your purchase state are stored only on your device and are deleted with the app. Logo images are chosen through the iOS photo picker, which passes only the single image you select. Purchases are processed by Apple; we never see or store payment details. Since the app collects no personal data, it collects none from children either.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. For privacy questions, email us at the address above.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
