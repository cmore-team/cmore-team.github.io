import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function GeckonoteSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">게코노트</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">크레스티드 게코를 키우는 입문자를 위한 케어 기록장입니다. 입양일과 월령만 넣으면 급여·분무·청소·체중 측정 주기가 자동으로 잡히고, 홈에서 오늘 할 일을 한 번 탭해 체크합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 로그인해야 하나요?</strong><br/>아닙니다. 로그인은 선택이며, 로그인하지 않아도 모든 기록 기능을 쓸 수 있습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 계정은 어떻게 삭제하나요?</strong><br/>설정 &gt; 계정 &gt; 계정 삭제를 누르면 서버의 계정 정보가 바로 삭제됩니다. 기기에 저장된 기록은 지워지지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br/>설정의 백업으로 사진을 포함한 zip 파일을 만든 뒤 새 기기에서 불러오면 됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 가족과 함께 기록할 수 있나요?</strong><br/>설정 &gt; 가족 초대로 iCloud 공유를 만들어 같은 개체 기록을 함께 볼 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 기기 모델, iOS 버전, 앱 버전(설정 아래쪽)을 함께 적어 주시면 빨리 확인할 수 있습니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
