import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CleantunerSupport() {
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
            기타조율 · CleanTuner
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 · Support</h1>
        <p className="text-gray-500 text-sm mb-12">기타조율 - 기타 튜너·메트로놈 · CleanTuner: Guitar &amp; Metronome</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">기타조율(CleanTuner)은 광고·주간 구독·회원가입 없이 실시간 YIN 음정 측정 튜너와 정밀 메트로놈을 한 곳에 담은 악기 조율 도구입니다. 기본 기타 표준 조율, 크로매틱 모드, 기준음 재생, 탭 템포 메트로놈을 광고 없이 무료로 사용할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 구독 상품인가요?</strong><br/>아닙니다. 기타조율 Pro는 자동 갱신이나 체험 결제 함정이 없는 1회 평생 구매(비소모성) 상품이며 Apple 가족 공유를 지원합니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 무료로 어디까지 사용할 수 있나요?</strong><br/>표준 6현 기타 튜너(E A D G B E), 크로매틱 모드, A4 기준음 조절(430~450 Hz), 각 줄 기준음 재생, 30~260 BPM 메트로놈·박자·탭 템포가 모두 광고 없이 무료입니다. Pro 1회 구매는 얼터네이트 기타 튜닝(Drop D, DADGAD, Open G, 반음 내림 등), 우쿨렐레·베이스·바이올린 프리셋, 무제한 공연 세트리스트 저장을 해제합니다.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 소리가 잘 인식되지 않아요.</strong><br/>iOS 설정 &gt; 기타조율에서 마이크 권한이 켜져 있는지 확인해 주세요. 주변 소음이 클 때는 기기를 기타 사운드홀이나 앰프 가까이에 두고 한 줄씩 또렷하게 튕겨 주세요.</p>
            <p className="text-gray-400 mt-3"><strong className="text-white">Q. 기기를 바꾸거나 재설치하면 구매가 유지되나요?</strong><br/>같은 Apple 계정으로 로그인한 뒤 설정 탭의 '구매 복원'을 누르면 Pro 권한이 즉시 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">About · FAQ (English)</h2>
            <p className="text-gray-400">CleanTuner is an ad-free, subscription-free chromatic guitar tuner and precision metronome. Standard 6-string guitar tuning, chromatic mode, A4 calibration (430–450 Hz), plucked reference tones, and the full 30–260 BPM Tap-Tempo metronome are completely free forever. One-time Pro unlocks alternate guitar tunings (Drop D, DADGAD, Open G, Open D, Eb, D), Ukulele, 4/5-string Bass, Violin presets, and unlimited custom song setlists with Family Sharing.</p>
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
