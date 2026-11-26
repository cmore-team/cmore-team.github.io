import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function LinelensSupport() {
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
            대본촬영 · LineLens
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">대본촬영 - 텔레프롬프터 카메라 · LineLens: Video Teleprompter</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">대본촬영(LineLens)은 워터마크·회원가입·구독 없이 렌즈 바로 아래에 대본을 띄워 자연스럽게 눈을 맞추며 영상을 촬영하는 텔레프롬프터 카메라 앱입니다. WPM 정밀 속도 조절, 카운트다운, 1080p/4K 영상 녹화, 말할 때만 움직이는 음성 속도 동기화(Voice Pace), 물리 프롬프터 반사경 미러 모드를 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 무료 버전 영상에 워터마크가 붙나요?</strong><br/>아니요. 무료 버전에서도 워터마크 없이 깨끗한 1080p 영상 촬영, 대본 3개 저장, WPM 속도·글자 크기·투명도·여백 조절, 카운트다운, 전체화면 프롬프터를 이용할 수 있습니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. Pro 1회 구매는 무엇을 해제하나요?</strong><br/>무제한 대본 저장 및 .txt/.md 가져오기, 4K Ultra HD 촬영, 말할 때만 자동 스크롤되는 음성 동기화(Voice Pace), 반사경 물리 프롬프터용 좌우/상하 미러 모드, 블루투스·키보드 리모컨 단축키를 구독 없이 1회 결제로 해제합니다 (Apple 가족 공유 지원).</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 촬영한 영상과 대본은 어디에 저장되나요?</strong><br/>영상은 아이폰 사진 앱(카메라 롤)에 직접 저장되며, 대본은 기기 내부에만 보관됩니다. 외부 서버로 전송되지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">LineLens is a watermark-free, subscription-free video teleprompter built right around your camera lens. Record clean 1080p video with up to 3 scripts, exact WPM scroll speed, eye-line guide, font/opacity/margin controls, and countdown completely free. One-time Lifetime Pro unlocks unlimited scripts + .txt/.md import, 4K recording, on-device Voice-Pace auto-pause, horizontal/vertical Mirror Mode for glass beam-splitter rigs, and Bluetooth/keyboard remote controls with Family Sharing.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 · Contact</h2>
            <p className="text-gray-400">문의 및 기능 제안은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
