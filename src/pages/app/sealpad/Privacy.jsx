import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function SealpadPrivacy() {
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
            인주 · SealPad
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 · Effective November 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">도장, 자필 서명, 계약서 PDF 및 사진 문서는 기기를 떠나지 않습니다. 실물 도장 배경 제거, 전자도장 생성, 다중 페이지 간인, 평탄화 저장이 모두 기기 안에서 처리되며 서버도 계정도 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문서와 도장은 어디로도 전송되지 않습니다</h2>
            <p className="text-gray-400">사용자가 불러오는 PDF 계약서, 사진 문서, 촬영한 실물 인감 사진, 직접 그린 서명과 입력한 텍스트는 문서에 날인하고 평탄화 사본을 생성하기 위해 기기 내부에서만 사용됩니다. 개발자 서버나 제3자 서버로 업로드되지 않으며, 공유 시트를 통해 사용자가 직접 선택한 앱(카카오톡, 메일, 파일 등)으로만 전달됩니다.</p>
            <p className="text-gray-400 mt-3">이 앱은 광고 SDK, 추적 SDK, 외부 분석 SDK를 포함하지 않습니다. 비행기 모드에서도 모든 핵심 기능이 정상 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">도장·서명 보관함 이미지, 최근 날인한 문서 사본, 월간 무료 저장 횟수, 기본 날짜 표기 및 잠금 설정은 사용자의 iPhone·iPad 로컬 저장소(Application Support 및 UserDefaults)에만 저장됩니다. 보관함에서 직접 삭제하거나 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
            <p className="text-gray-400"><strong className="text-white">카메라 (선택):</strong> 종이에 찍은 실물 도장을 촬영해 배경을 투명하게 제거할 때만 사용합니다. 촬영된 사진은 기기 안에서만 처리됩니다.</p>
            <p className="text-gray-400 mt-2"><strong className="text-white">사진 보관함 추가 (선택):</strong> 날인된 이미지 문서나 투명 PNG 도장을 사진첩에 저장할 때만 사용합니다. 사진 선택 시에는 iOS 시스템 선택기를 통해 사용자가 고른 항목만 앱에 전달됩니다.</p>
            <p className="text-gray-400 mt-2"><strong className="text-white">Face ID (선택):</strong> 사용자가 설정에서 보관함 잠금을 켠 경우 로컬 잠금 해제 확인에만 사용되며, 생체 정보는 iOS가 직접 처리하고 앱에 전달되지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">Pro 1회 구매는 Apple App Store(StoreKit)를 통해 처리됩니다. 개발자는 결제 수단이나 개인 청구 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
            <p className="text-gray-400">이 앱은 어떠한 개인정보도 수집하지 않으므로 아동의 개인정보 역시 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy (English)</h2>
            <p className="text-gray-400">Your stamps, signatures, PDFs, and photo contracts never leave your device. Digital stamp generation, physical paper-stamp background removal, multi-page straddle seals, and flattened PDF/image export all run 100% on-device. There is no account, no cloud server, no ad SDK, and no analytics tracking. Core features work completely offline.</p>
            <p className="text-gray-400 mt-3">Saved stamps, signatures, recent exported documents, and preferences are stored strictly locally on your iPhone or iPad and are removed when deleted in-app or when the app is uninstalled. Optional Camera access is used only to photograph a physical stamp for local background removal; optional Photo Library Add access is used only when saving an image or transparent PNG; optional Face ID is handled by iOS to lock your local vault. One-time Pro purchases are processed exclusively by Apple via StoreKit—we never see or store payment details. Because SealPad collects no personal data, it collects none from children either.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. For privacy inquiries, email us at the address above.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
