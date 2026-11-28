import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function CutplanSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">CutPlan · 합판·목재 재단 도면 계산기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원 / Support</h1>
        <p className="text-gray-500 text-sm mb-12">CutPlan — Sheet &amp; Plywood Cut List Optimizer</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">CutPlan은 합판, MDF, 집성목 원판에 필요한 부품을 2D 길로틴 방식으로 자동 배치해 자재 로스를 줄여 주는 오프라인 목공 재단 계산기입니다. 톱날 두께(커프), 원판 테두리 트리밍 여백, 나뭇결 방향 고정을 반영하며 미터법(mm)과 인치(inch)를 모두 지원합니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 톱날 두께(커프)는 어떻게 반영되나요?</strong><br/>원판 탭에서 2.2mm, 3.0mm, 3.2mm(1/8") 등 사용 중인 톱날 두께를 선택하면 모든 수평·수직 절단선마다 커프만큼 자동 차감하여 치수 오차를 방지합니다.</p>
            <p className="text-gray-400 mt-4"><strong className="text-white">Q. 무늬결(나뭇결) 방향을 맞추고 싶어요.</strong><br/>부품 편집 화면에서 ‘나뭇결 방향 고정’을 켜면 해당 부품은 90° 자동 회전에서 제외됩니다.</p>
            <p className="text-gray-400 mt-4"><strong className="text-white">Q. 무료 버전과 Pro의 차이는 무엇인가요?</strong><br/>원판 1장 배치, 프로젝트당 부품 6종, 톱날 커프·나뭇결 고정·단위 전환은 광고 없이 계속 무료입니다. CutPlan Pro 1회 평생 결제(구독 없음 · 가족 공유 지원)로 무제한 부품·다중 시트 배치, 무제한 프로젝트 저장, 워터마크 없는 A4 공방 인쇄용 PDF 도면 및 자재표(BOM) 내보내기를 열 수 있습니다. 기기를 바꾼 경우 설정에서 ‘구매 복원’을 눌러 주세요.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의 / Contact</h2>
            <p className="text-gray-400">기능 제안이나 오류 제보는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
