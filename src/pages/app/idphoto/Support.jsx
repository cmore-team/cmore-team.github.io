import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function IdphotoSupport() {
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
            규격사진
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">규격사진 — 여권·증명사진 만들기</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">여권·신분증·이력서·시험 원서·미국/영국/EU/일본/중국 비자 및 맞춤 규격에 맞춰 증명사진을 만듭니다. 크기만 맞추는 것이 아니라 발급기관이 요구하는 정수리~턱 길이와 상단 여백(미국식 눈높이)까지 계산하고, 온라인 제출용 JPEG와 편의점·사진관·가정용 프린터에서 바로 뽑을 수 있는 4×6·L판·A4 인화 시트를 만듭니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">지원 규격</h2>
          <p className="text-gray-400"><strong className="text-white">대한민국 여권·영유아 여권·주민등록증·운전면허증</strong> 35×45mm · 머리 길이 32~36mm · 상단 여백 3~5mm (외교부 여권사진 규격, 정부24 온라인 JPEG 413×531px 지원).</p>
          <p className="text-gray-400"><strong className="text-white">수능 원서·큐넷·토익·이력서(반명함)</strong> 35×45mm 및 30×40mm · 온라인 제출용 JPEG 픽셀·용량 자동 맞춤 지원.</p>
          <p className="text-gray-400"><strong className="text-white">미국 비자·여권</strong> 2×2 inch · 눈높이를 사진 하단에서 28~35mm에 맞추는 미국식 기준 (U.S. Department of State).</p>
          <p className="text-gray-400"><strong className="text-white">영국·EU 여권</strong> 35×45mm · 머리 길이 29~34mm · 온라인 JPEG 600×750px 지원 (GOV.UK ICAO 기준).</p>
          <p className="text-gray-400"><strong className="text-white">일본 여권·비자·마이넘버카드</strong> 35×45mm · 얼굴 34mm ± 2mm · 상단 여백 2~6mm · 마이넘버 온라인 JPEG 지원.</p>
          <p className="text-gray-400"><strong className="text-white">중국 비자 &amp; 직접 규격 만들기</strong> 33×48mm 및 사원증·학교 원서용 가로·세로(mm)·픽셀·용량(KB) 직접 입력.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>모든 공식 규격과 맞춤 규격, 실시간 카메라 가이드, 얼굴 측정, 배경 교체, 노출·색온도 미세 조정, 온라인 JPEG 저장, 인화 시트 미리보기까지 무료입니다. 무료 저장에는 워터마크가 붙으며, 재촬영·재생성 횟수에는 제한이 없습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다. 저장할 때마다 돈을 받지도 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. &ldquo;머리 위 공간이 모자랍니다&rdquo;라고 나옵니다.</strong><br/>규격이 요구하는 상단 여백을 만들 수 없다는 뜻입니다. 억지로 잘라 내보내면 접수처에서 반려되므로 앱이 막습니다. 정수리 위쪽이 더 나오도록, 조금 더 멀리서 다시 찍어주세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. &ldquo;인화 해상도가 낮습니다&rdquo;라고 나옵니다.</strong><br/>얼굴이 사진에서 너무 작게 잡혔다는 뜻입니다. 인화하면 뭉개지므로 더 가까이서 다시 찍어주세요. 200dpi 아래면 저장이 막힙니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 배경이 흰색으로 안 바뀝니다.</strong><br/>인물과 배경을 분리하지 못한 경우입니다. 앱이 경고를 띄우며, 이때는 원래 배경이 그대로 나갑니다. 밝고 균일한 벽 앞에서, 벽과 조금 떨어져 서서 다시 찍으면 잘 분리됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. AI로 얼굴을 만드나요?</strong><br/>아닙니다. 찍은 사진을 그대로 쓰고 배경과 전체 밝기·색온도만 조절합니다. 얼굴을 생성하거나 보정하지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 인화는 어떻게 하나요?</strong><br/>인화용 시트에서 4×6·L판·A4 중 원하는 용지를 골라 저장한 뒤 편의점·사진관 키오스크나 가정용 프린터에서 원본 크기(100%)로 인화하고 회색 선을 따라 자르면 됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">반려에 대하여</h2>
          <p className="text-gray-400">이 앱은 공개된 규격 기준에 맞춰 사진을 계산하지만, 최종 심사는 발급기관이 합니다. 표정, 조명, 안경 반사, 배경 그림자, 머리카락이 얼굴을 가리는 등 규격 외 사유로 반려될 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">버그 제보나 기능 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
