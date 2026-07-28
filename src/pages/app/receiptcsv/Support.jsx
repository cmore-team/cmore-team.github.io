import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function ReceiptcsvSupport() {
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
            영수증 경비 정리
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">영수증 경비 정리</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">영수증을 촬영하면 결제 금액, 날짜, 상호, 사업자등록번호를 읽어 표로 만듭니다. 계정과목별 월 합계를 보고, 엑셀에서 깨지지 않는 CSV로 내보냅니다. 계정도 서버도 없이 기기 안에서 전부 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 금액을 읽지 못했다고 나옵니다.</strong><br/>영수증마다 인쇄 방식이 달라 인식이 실패할 수 있습니다. 이 앱은 그럴 때 그럴듯한 값을 채워 넣지 않고 빈 칸으로 두고 알려줍니다. 잘못 채워진 금액은 확인 없이 넘어가 장부에 옮겨진 다음에야 발견되기 때문입니다. 직접 입력하시면 됩니다. 다시 찍을 때는 영수증을 펴고 그림자가 지지 않게 위에서 촬영하면 인식률이 올라갑니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 금액이 실제보다 적게 들어갔습니다.</strong><br/>영수증에는 공급가액, 부가세, 합계가 함께 찍힙니다. 이 앱은 결제한 금액(합계·결제금액·승인금액)을 우선해서 읽고 공급가액과 부가세 줄은 제외합니다. 그래도 다르면 금액 칸을 직접 고쳐주세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 계정과목이 '미분류'로 들어갑니다.</strong><br/>상호에서 확실하게 판단되는 경우에만 자동으로 분류하고, 애매하면 미분류로 둡니다. 잘못 분류된 경비를 나중에 찾아내는 것보다 지금 한 번 고르는 편이 빠르기 때문입니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 엑셀에서 한글이 깨집니다.</strong><br/>내보내는 CSV에는 UTF-8 BOM이 들어가 있어 엑셀이 인코딩을 올바르게 인식합니다. 그래도 깨진다면 엑셀의 '데이터 &gt; 텍스트/CSV 가져오기'에서 원본 파일 인코딩을 UTF-8로 지정해 열어보세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>월 10건까지 등록할 수 있고, 문자 인식·계정과목 분류·월별 합계·내보내기 미리보기는 제한 없이 사용할 수 있습니다. 총량 제한이 아니라 매달 다시 채워집니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독은 어떻게 해지하나요?</strong><br/>iPhone 설정 &gt; 사용자 이름 &gt; 구독에서 언제든 해지할 수 있습니다. 해지해도 이미 등록한 영수증과 사진은 기기에 그대로 남습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 데이터가 옮겨지나요?</strong><br/>영수증 기록은 기기에만 저장되므로 자동으로 옮겨지지 않습니다. 기기를 바꾸기 전에 CSV로 내보내 보관하시기 바랍니다. 구매 내역은 같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">계정과목</h2>
          <p className="text-gray-400">복리후생비, 접대비, 여비교통비, 소모품비, 통신비, 수도광열비, 임차료, 광고선전비, 교육훈련비, 도서인쇄비, 차량유지비, 지급수수료, 미분류.</p>
          <p className="text-gray-400">세무서가 쓰는 이름을 그대로 사용합니다. 장부에 옮길 때 바꿔 적을 필요가 없습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">세무 관련 안내</h2>
          <p className="text-gray-400">이 앱은 경비 기록을 돕는 도구이며 세무 자문을 제공하지 않습니다. 경비 인정 여부와 계정과목의 최종 판단은 세무사 등 전문가와 상의하시기 바랍니다.</p>
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
