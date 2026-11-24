import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function SealpadSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">인주 - PDF 도장·전자서명 · SealPad - Sign &amp; Stamp PDF</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">인주(SealPad)는 서버 업로드나 구독 없이 iPhone·iPad 안에서 PDF와 사진 계약서에 도장과 자필 서명을 30초 만에 날인하고 평탄화 사본으로 회신하는 온디바이스 문서 도구입니다. 종이에 찍은 실제 인감·법인직인을 촬영해 배경을 투명하게 제거하는 실물 도장 스캔, 한글·한자·영문 전자도장 생성, 다중 페이지 간인, 투명 PNG 도장 추출을 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 구독 상품인가요?</strong><br/>아닙니다. 인주 Pro는 1회 결제 평생 소장(비소모성) 상품이며 자동 갱신이나 숨은 체험 결제가 없습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 무료로 어디까지 사용할 수 있나요?</strong><br/>PDF·사진 문서 열기, 전자도장 1개 생성, 자필 서명 1개 저장, 날짜·텍스트 기입, 워터마크 없는 평탄화 문서 저장 월 3회까지 무료로 사용할 수 있습니다. Pro 1회 구매는 실물 도장 스캔 누끼 저장, 도장·서명 무제한 보관, 여러 페이지 간인, 월 저장 횟수 무제한, 한글·워드용 투명 PNG 도장 추출을 해제합니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 실물 도장 스캔이 흐리거나 배경이 남아요.</strong><br/>흰 종이에 인주를 선명하게 찍어 그림자가 덜 지는 밝은 곳에서 촬영해 주세요. 스캔 화면에서 '붉은 인주 우선' 모드를 선택하고 '잉크 인식 강도' 슬라이더를 조절하면 종이 질감과 검은 인쇄선까지 깔끔하게 제거됩니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 저장한 PDF에서 상대방이 도장을 옮길 수 있나요?</strong><br/>인주는 모든 도장·서명·텍스트·간인을 페이지에 합쳐 평탄화(Flatten)된 새 PDF로 저장합니다. 일반 편집 주석과 달리 도장이 이미지로 고정됩니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 공인전자서명이나 법적 공증 효력이 있나요?</strong><br/>인주는 PDF·이미지 위에 시각적 도장과 자필 서명을 배치하는 문서 도구이며, 공동인증서 기반 공인전자서명이나 공증 서비스가 아닙니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 기기를 바꾸거나 재설치하면 구매가 유지되나요?</strong><br/>같은 Apple 계정으로 로그인한 뒤 설정 탭의 '구매 복원'을 누르면 Pro 권한이 즉시 복원됩니다. 다만 모든 도장과 문서 파일은 기기 로컬에만 저장되므로 새 기기로 자동 동기화되지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">SealPad is a 100% on-device PDF and photo stamping &amp; signing app with zero subscriptions and zero server uploads. Create digital stamps, scan physical paper stamps into transparent PNGs, draw handwritten signatures, add dates, text, and multi-page edge straddle seals, then export a flattened copy straight to Mail, Messages, or Files.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Is SealPad a subscription?</strong> No. SealPad Pro is a one-time non-consumable purchase that never renews. The free tier includes 1 digital stamp, 1 signature, dates/text, and 3 watermark-free document saves per month. Pro unlocks saving scanned physical stamps, unlimited vault assets, transparent PNG export, multi-page straddle seals, and unlimited monthly saves. Use Restore Purchases in Settings on any device signed into the same Apple Account.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Legal scope:</strong> SealPad is a visual document stamping and signing utility, not a government-certified PKI digital certificate or notarization service.</p>
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
