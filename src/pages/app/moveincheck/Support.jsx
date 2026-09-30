import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function MoveincheckSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">입주체크</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">입주체크 · MoveInCheck</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">입주체크는 어떤 앱인가요?</h2>
            <p className="text-gray-400">전·월세 입주 때 공간별로 집 상태를 점검하고, 문제 항목을 사진·메모로 남기고, 집주인·중개사에게 보낸 수리 요청과 답변을 타임라인으로 정리하는 기록 도구입니다. 기간과 공간을 골라 PDF 정리본과 정중한 부탁 메시지를 만들 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사진의 촬영 시각은 어떻게 표시되나요?</h2>
            <p className="text-gray-400">앨범에서 고른 사진은 원본 파일 그대로 저장되어 사진 속 촬영 시각이 유지됩니다. 촬영 정보가 없는 사진은 앱에 추가한 시각을 ‘기록 시각’으로 따로 표시합니다. 정리본과 공유용 사본에만 시각을 표시하고 원본은 바꾸지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기록을 다른 기기로 옮길 수 있나요?</h2>
            <p className="text-gray-400">계정과 서버가 없어서 자동으로 옮겨지지 않습니다. 기기를 바꾸기 전에 PDF 정리본이나 원본 사진을 공유해 따로 보관해 주세요.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">법적 효력이 있나요?</h2>
            <p className="text-gray-400">입주체크는 세입자가 스스로 남기는 참고 기록 도구입니다. 법률 자문을 제공하지 않으며 보증금 반환이나 수리 결과를 보장하지 않습니다. 분쟁이 생기면 전문가나 공공 상담 기관의 도움을 받으세요.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">무료와 Pro의 차이</h2>
            <p className="text-gray-400">집 한 곳의 점검, 사진 40장, 수리 타임라인, PDF 정리본과 메시지는 무료입니다. 한 번 구매로 여러 집, 퇴거 비교(입주·퇴거 사진 나란히 보기), 사진 무제한을 열 수 있습니다. 구매 복원은 설정에 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">문제가 있거나 제안이 있으면 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 알려주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
