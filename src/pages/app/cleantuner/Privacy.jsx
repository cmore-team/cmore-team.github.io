import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CleantunerPrivacy() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침 · Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 · Effective November 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
            <p className="text-gray-400">마이크 입력 오디오는 실시간 음정(Hz) 계산에만 기기 메모리에서 즉시 사용되며, 단 1초도 녹음·저장·전송되지 않습니다. 계정, 서버, 광고, 추적 SDK가 전혀 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">오디오와 연주 데이터는 외부로 나가지 않습니다</h2>
            <p className="text-gray-400">기타조율(CleanTuner)은 Apple AVAudioEngine과 Accelerate(vDSP)를 사용해 기기 안에서 실시간으로 음정을 분석하고 기준음·메트로놈 클릭음을 합성합니다. 오디오 파일은 생성되지 않으며 비행기 모드에서도 모든 기능이 완전히 동작합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기에 저장되는 정보</h2>
            <p className="text-gray-400">사용자가 저장한 세트리스트 곡(제목, BPM, 박자, 튜닝 프리셋), A4 기준 주파수 설정, 마지막 선택 튜닝 및 메트로놈 설정은 기기 로컬(UserDefaults)에만 저장되며 앱을 삭제하면 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
            <p className="text-gray-400"><strong className="text-white">마이크 (튜너 사용 시 필수):</strong> 악기 소리의 음정을 실시간으로 측정하기 위해서만 사용합니다. 마이크를 허용하지 않아도 기준음 재생과 메트로놈 기능은 정상적으로 사용할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
            <p className="text-gray-400">Pro 1회 평생 구매는 Apple App Store(StoreKit)를 통해 처리됩니다. 개발자는 결제 수단이나 개인 청구 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Privacy Policy (English)</h2>
            <p className="text-gray-400">CleanTuner processes microphone input strictly in device memory in real time to measure pitch (Hz) and immediately discards audio buffers—nothing is ever recorded, saved to disk, or transmitted off your device. There are no accounts, no cloud servers, no ad SDKs, and no analytics trackers. Every feature works completely offline.</p>
            <p className="text-gray-400 mt-3">Saved setlist songs, A4 calibration, and metronome preferences live strictly locally via UserDefaults and are removed if you uninstall the app. Microphone access is used solely for real-time tuning; Reference Tones and the Metronome also work without microphone permission. One-time Pro purchases are processed exclusively by Apple via StoreKit. Because CleanTuner collects no personal data, it collects none from children either.</p>
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
