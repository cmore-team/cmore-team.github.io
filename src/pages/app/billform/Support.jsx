import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function BillformSupport() {
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
            견적서 거래명세서
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">견적서 거래명세서</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">현장에서 폰으로 견적서와 거래명세서를 만들어 PDF로 바로 보냅니다. 부가세 별도·포함·면세를 서류에 명시하고, 한글 금액까지 자동으로 적습니다. 계정도 서버도 없이 기기 안에서 처리됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 부가세 별도와 포함은 무엇이 다른가요?</strong><br/>'별도'는 입력한 단가가 공급가액이고 여기에 10%를 더해 청구합니다. '포함'은 입력한 금액이 이미 합계이고, 그 안에서 공급가액을 역산합니다. 100만원을 별도로 적으면 청구액은 110만원, 포함으로 적으면 청구액은 100만원입니다. 어느 쪽으로 계산했는지가 서류에 인쇄되므로 거래처와 어긋날 일이 없습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 면세 사업자입니다.</strong><br/>부가세 선택에서 '면세'를 고르면 부가세 줄이 사라지고 합계만 표시됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 같은 거래처에 계속 납품합니다.</strong><br/>목록에서 지난 서류를 길게 누르면 '복제해서 새로 쓰기'가 나옵니다. 품목과 단가가 그대로 들어오고 발행일과 문서번호만 새로 매겨집니다. 견적서를 보낸 뒤 같은 내용으로 거래명세서를 발행할 때는 서류 종류만 바꾸면 됩니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 공급자 정보를 매번 적어야 하나요?</strong><br/>아닙니다. 한 번 입력하면 다음 서류부터 자동으로 채워집니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 로고와 도장을 넣고 싶습니다.</strong><br/>전체 해제 후 설정에서 이미지를 등록하면 PDF에 인쇄됩니다. 비율은 유지되므로 찌그러지지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>월 3건까지 발행할 수 있고 작성·계산·미리보기·PDF 전송을 제한 없이 사용할 수 있습니다. 총량 제한이 아니라 매달 다시 채워집니다. 무료로 보내는 PDF에는 워터마크가 들어갑니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독은 어떻게 해지하나요?</strong><br/>iPhone 설정 &gt; 사용자 이름 &gt; 구독에서 언제든 해지할 수 있습니다. 해지해도 이미 발행한 서류는 기기에 그대로 남습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 세금계산서도 발행되나요?</strong><br/>아닙니다. 이 앱은 견적서와 거래명세서를 만듭니다. 세금계산서는 국세청 홈택스 등 별도 절차를 따릅니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 서류가 옮겨지나요?</strong><br/>서류는 기기에만 저장되므로 자동으로 옮겨지지 않습니다. 필요한 서류는 PDF로 내보내 보관하시기 바랍니다. 구매 내역은 같은 Apple 계정이라면 설정 화면의 '구매 복원'으로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">서류에 들어가는 항목</h2>
          <p className="text-gray-400">공급자와 공급받는자(상호·사업자등록번호·대표자·주소·연락처), 품목표(품목·규격·수량·단가·금액), 공급가액과 부가세와 합계, 한글 금액 표기, 문서번호와 발행일, 견적 유효기간.</p>
          <p className="text-gray-400">한글 금액은 숫자 위변조를 막기 위해 실제 양식이 요구하는 항목입니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">세무 관련 안내</h2>
          <p className="text-gray-400">이 앱은 서류 작성을 돕는 도구이며 세무 자문을 제공하지 않습니다. 부가세 처리와 경비 인정의 최종 판단은 세무사 등 전문가와 상의하시기 바랍니다.</p>
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
