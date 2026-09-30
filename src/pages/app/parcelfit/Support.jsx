import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function ParcelfitSupport() {
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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">택배크기</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">택배크기 · ParcelFit</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
            <p className="text-gray-400">택배크기는 상자의 가로·세로·높이와 무게로 우체국 택배, GS25·CU 편의점택배와 반값택배의 크기 등급, 예상 요금, 접수 불가 여부를 보여 줍니다. 라이다가 있는 iPhone은 카메라로 모서리 네 곳을 찍어 재고, 줄자로 잰 값을 직접 넣어도 됩니다. 계정과 서버가 없고 모든 계산은 기기 안에서 이루어집니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">사용 방법</h2>
            <p className="text-gray-400"><strong className="text-white">카메라로 재기</strong>를 누르고 바닥 쪽 모서리 하나, 가로 끝, 세로 끝, 기준 모서리 바로 위 윗면 순서로 가운데 점을 맞춰 ‘점 찍기’를 누르세요. <strong className="text-white">줄자로 잰 값 입력</strong>에서는 cm·mm·inch와 kg·g 단위를 고를 수 있습니다. 값을 넣으면 업체별 결과가 바로 나오고, 이름과 사진을 붙여 보관하거나 공유할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
            <p className="text-gray-400"><strong className="text-white">Q. 측정값이 줄자와 조금 달라요.</strong><br/>라이다 측정은 한 변에 1cm 안팎, 라이다가 없는 기기는 3cm 안팎의 오차가 날 수 있어 화면에 함께 표시합니다. 경계값 근처라면 줄자로 다시 재 값을 고쳐 주세요. 오차 때문에 등급이 바뀔 수 있으면 앱이 미리 알려 줍니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 요금이 접수처와 달라요.</strong><br/>요금표는 각 업체 공식 페이지를 확인한 날짜 기준이며 앱의 ‘요금표와 출처’ 화면에서 확인일과 링크를 볼 수 있습니다. 제주·도서 추가 운임, 착불 수수료, 물품가액 할증, 업체의 요금 변경은 실제 요금에 영향을 줄 수 있으니 접수 전에 확인해 주세요.</p>
            <p className="text-gray-400"><strong className="text-white">Q. CJ대한통운은 왜 없나요?</strong><br/>공식 요금표를 확인할 수 있을 때 추가하려고 합니다. 확인되지 않은 요금은 넣지 않습니다.</p>
            <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 쓸 수 있나요?</strong><br/>측정, 업체별 판정, 공유, 상자 5개 보관은 무료입니다. 한 번 구매하면 보관이 무제한이 되고, 여러 상자를 업체별로 합산하는 묶음 합산을 쓸 수 있습니다. 구매 복원은 설정에서 할 수 있습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
            <p className="text-gray-400">버그 제보나 요금표 수정 요청은 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요. 영업일 기준 2일 이내에 답변드립니다.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
