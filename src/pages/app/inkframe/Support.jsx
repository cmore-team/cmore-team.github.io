import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function InkframeSupport() {
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
            글자 뒤 사진
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">글자 뒤 사진</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">사진에서 사람을 자동으로 떼어내고 그 뒤에 글자를 깝니다. 글꼴, 색상, 크기, 위치, 기울기, 자간, 그림자를 조절할 수 있고 원본 해상도 그대로 저장됩니다. 인물 분리부터 합성까지 전부 기기 안에서 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. "인물을 찾지 못했습니다"라고 나옵니다.</strong><br/>사진에 사람이 없거나, 사람이 배경과 잘 구분되지 않을 때 나옵니다. 이때는 글자가 인물 뒤로 가지 않고 사진 위에 그냥 얹힙니다. 앱이 고장 난 것이 아니라 분리에 실패한 것이므로 그 사실을 그대로 알립니다. 인물이 또렷하고 배경과 밝기·색이 구분되는 사진일수록 깔끔하게 분리됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 머리카락 가장자리가 거칠게 잘립니다.</strong><br/>인물 분리는 기기에서 실시간으로 계산합니다. 배경이 복잡하거나 머리카락이 배경과 비슷한 색이면 경계가 거칠어질 수 있습니다. 단순한 배경에서 찍은 사진이 가장 잘 나옵니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 저장한 이미지가 화면에서 보던 것과 다릅니다.</strong><br/>다르지 않아야 정상입니다. 편집 화면은 빠르게 반응하도록 작은 크기로 그리고, 저장할 때 원본 해상도로 다시 그립니다. 위치와 크기를 픽셀이 아니라 비율로 저장하기 때문에 두 결과가 같은 자리에 옵니다. 만약 다르다면 버그이므로 제보해주세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 글자가 인물 앞으로 나옵니다.</strong><br/>인물 분리에 실패한 경우입니다. 위의 첫 번째 항목을 참고해주세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 원하는 글꼴이 없습니다.</strong><br/>시스템에 실제로 있는 글꼴만 제공합니다. 없는 글꼴을 목록에 넣으면 골라도 적용되지 않고, 사용자는 이유를 알 수 없기 때문입니다. 필요한 글꼴이 있으면 알려주세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. 전체 해제는 1회 결제 상품이며 자동 갱신되지 않습니다. 저장할 때마다 돈을 받지도 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>글꼴 6종, 색상 10종, 모든 조절 항목, 레이어 여러 개, 저장까지 전부 사용할 수 있습니다. 무료로 저장하면 오른쪽 아래에 워터마크가 들어갑니다. 결제가 해제하는 것은 워터마크 제거와 원본 해상도 저장입니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">잘 나오는 사진</h2>
          <p className="text-gray-400">인물이 화면 안에 온전히 들어오고, 배경과 밝기나 색이 뚜렷하게 구분되며, 초점이 인물에 맞은 사진입니다. 역광이거나 배경이 인물과 비슷한 색이면 경계가 흐려집니다.</p>
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
