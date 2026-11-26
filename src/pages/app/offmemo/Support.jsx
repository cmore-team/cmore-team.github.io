import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function OffmemoSupport() {
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
            녹음글 · OffMemo
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">녹음글 - 음성 녹음·받아쓰기 · OffMemo: Offline Voice Notes</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">녹음글(OffMemo)은 회원가입·클라우드 업로드·월간 구독 없이 아이폰 기기 안에서 음성 녹음, 실시간 받아쓰기, 핵심 요약 및 할 일 정리까지 한 번에 끝내는 오프라인 음성 메모 앱입니다. 백그라운드 녹음, 다이나믹 아일랜드 실시간 상태 표시, 타임스탬프 북마크, Siri 단축어 녹음을 모두 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 녹음 파일이 외부 서버로 전송되나요?</strong><br/>아니요. 모든 음성 녹음(.m4a), 받아쓰기 전사문, 핵심 요약, 북마크 데이터는 사용자 기기 내부(Documents 폴더)에만 저장되며 개발자 서버나 제3자 AI 서버로 전송되지 않습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 무료로 어디까지 사용할 수 있나요?</strong><br/>무제한 백그라운드 녹음, 실시간 파형·재생(배속·구간 이동), 3분 이내 실시간 온디바이스 받아쓰기, 녹음당 북마크 3개, 전문 검색, Siri 녹음 시작이 광고 없이 무료입니다. Pro 1회 평생 구매는 3분 초과 장시간 청크 받아쓰기, 온디바이스 구조화 핵심 요약 및 할 일 자동 추출, 외부 오디오 파일(.m4a/.mp3/.wav) 가져오기, 무음 건너뛰기 재생, 무제한 북마크·폴더, Markdown/TXT/SRT 자막 내보내기를 해제합니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 온디바이스 받아쓰기가 동작하지 않을 때는 어떻게 하나요?</strong><br/>iOS 설정 &gt; 녹음글에서 마이크 및 음성 인식 권한을 켜고, iOS 설정 &gt; 일반 &gt; 키보드 &gt; 받아쓰기 활성화에서 한국어/영어 언어팩이 기기에 준비되어 있는지 확인해 주세요.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 구독인가요? 기기를 바꾸면 유지되나요?</strong><br/>자동 갱신 구독이 아닌 1회 평생 구매(비소모성)이며 Apple 가족 공유를 지원합니다. 기기 변경 시 설정에서 '구매 복원'을 누르면 바로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">OffMemo is an offline, private voice recorder with on-device transcription and structured summaries—no accounts, no cloud uploads, no subscriptions. Unlimited background recording, synchronized playback, live transcription up to 3 minutes, bookmarks, full-text search, and Siri Shortcuts are free forever. One-time Pro unlocks unlimited long-form chunked transcription, on-device summaries &amp; action-item extraction (using Apple Intelligence FoundationModels on supported iOS 26+ devices with automatic on-device NaturalLanguage fallback), external audio file import (.m4a/.mp3/.wav), Smart Silence Skip playback, unlimited folders/bookmarks, and Markdown/TXT/SRT export with Family Sharing.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다. For support or feature requests, email us — we reply within two business days.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
