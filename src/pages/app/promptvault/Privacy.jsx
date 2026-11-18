import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function PromptvaultPrivacy() {
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
            프롬프트 보관함
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">개인정보 처리방침</h1>
        <p className="text-gray-500 text-sm mb-12">시행일: 2026년 11월 (동의형 익명 사용 통계 추가)</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">한 줄 요약</h2>
          <p className="text-gray-400">프롬프트와 사진은 이 기기에만 저장됩니다. 서버가 없고, 계정도 로그인도 없습니다. 사용자가 직접 켠 경우에만 이름·연락처가 없는 익명 사용 통계를 보냅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 안에만 저장되는 정보</h2>
          <p className="text-gray-400">저장한 프롬프트(제목·본문·메모), 붙인 사진, 컬렉션은 앱의 기기 내부 저장공간에만 보관됩니다. 개발자의 서버나 제3자 서버로 업로드되지 않으며, iCloud 동기화도 하지 않습니다.</p>
          <p className="text-gray-400">그 밖에 &ldquo;이 프롬프트로 만들기&rdquo;의 최근 요청 기록과 구매 여부가 기기에 저장됩니다. 앱을 삭제하면 이 정보도 함께 삭제됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">네트워크 요청</h2>
          <p className="text-gray-400">앱은 공개 프롬프트 팩 목록과 팩 파일을 <code>packs.cmore.dev</code>에서 받습니다. 이 요청에는 쿠키, 기기 식별자, 사용자의 프롬프트나 사진이 포함되지 않습니다. 요청이 실패하면 앱에 들어 있는 팩을 그대로 사용합니다.</p>
          <p className="text-gray-400">이 앱은 광고 SDK와 크래시 리포팅 SDK를 포함하지 않으며, 사용자를 추적하지 않습니다. 아래 익명 사용 통계에 동의하지 않으면 팩 받기 외의 네트워크 요청을 하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">익명 사용 통계 (PostHog, 동의 시에만)</h2>
          <p className="text-gray-400">보관함 위 안내에서 &ldquo;보내기&rdquo;를 누르거나 설정의 &ldquo;익명 사용 통계 보내기&rdquo;를 켠 경우에만 통계 서비스 <a className="text-white underline" href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">PostHog</a>(미국 지역 서버)로 전송하며, 동의하지 않으면 아무것도 보내지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">보내는 것</strong> — 앱 실행, 프롬프트 복사(상세 화면·이 프롬프트로 만들기), 팩 담기(팩 이름과 개수), 구매 화면 열기, 팩·Pro 구매와 복원의 시작과 결과 같은 이벤트 종류와, 기기에서 무작위로 만든 통계용 ID(Apple 기기 식별자나 광고 식별자가 아님). PostHog 도구는 여기에 앱 버전, iOS 버전, 기기 모델, 화면 크기, 언어·시간대, 네트워크 종류(Wi-Fi·셀룰러)를 덧붙이고 기기에 자체 무작위 ID를 저장합니다. PostHog의 자동 수집, 화면 녹화, IP 기반 위치 확인은 꺼 두었습니다.</p>
          <p className="text-gray-400"><strong className="text-white">보내지 않는 것</strong> — 프롬프트 제목·본문·메모, 사진, 컬렉션 이름, &ldquo;이 프롬프트로 만들기&rdquo;의 요청 문장, 이름·이메일 같은 개인 정보, 결제 수단 정보.</p>
          <p className="text-gray-400">이 통계는 사용자 신원과 연결하지 않고(비연결), 다른 회사 데이터와 결합하거나 광고 추적에 쓰지 않습니다(비추적). 판매하지 않습니다.</p>
          <p className="text-gray-400">설정에서 &ldquo;익명 사용 통계 보내기&rdquo;를 끄면 즉시 전송을 멈추고 기기의 통계용 ID(PostHog가 저장한 ID 포함)를 지웁니다. 다시 켜면 이전과 이어지지 않는 새 ID가 만들어집니다. 이미 보낸 통계의 보관은 PostHog의 처리 방식을 따릅니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">다른 앱으로 보내기</h2>
          <p className="text-gray-400">&ldquo;복사&rdquo;는 본문을 기기 클립보드에만 넣습니다(다른 기기로 넘어가는 유니버설 클립보드는 끕니다). &ldquo;이 프롬프트로 만들기&rdquo;와 공유는 사용자가 직접 고른 앱(예: ChatGPT)으로 iOS가 내용을 넘기는 기능이며, 그 이후의 처리는 해당 앱의 개인정보 처리방침을 따릅니다. 개발자는 그 내용을 받지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">기기 권한</h2>
          <p className="text-gray-400"><strong className="text-white">카메라</strong> — 네컷 만들기에서 사진을 바로 찍을 때만 사용합니다.</p>
          <p className="text-gray-400"><strong className="text-white">사진 추가</strong> — 완성한 네컷을 사진 앱에 저장할 때만 사용합니다. 저장 전용 권한이라 기존 사진을 읽지 않습니다.</p>
          <p className="text-gray-400">사진을 고를 때는 iOS 사진 선택기를 사용하며, 사진 라이브러리 접근 권한을 요구하지 않습니다. 사용자가 고른 사진만 앱에 전달됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">백업</h2>
          <p className="text-gray-400">Pro의 백업은 프롬프트와 사진을 zip 파일 하나로 기기에서 만들고, 저장 위치는 사용자가 고릅니다. 앱이 백업 파일을 어디에도 올리지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">결제</h2>
          <p className="text-gray-400">구매는 Apple의 App Store 결제를 통해 처리됩니다. 개발자는 결제 수단 정보를 수집하거나 보관하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">아동의 개인정보</h2>
          <p className="text-gray-400">이 앱은 이름·연락처 같은 개인정보를 수집하지 않으며, 아동의 개인정보를 별도로 수집하지 않습니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">문의</h2>
          <p className="text-gray-400">개인정보 처리에 대한 문의는 <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a> 으로 보내주세요.</p>
          </section>
        </div>
      </main>
    </div>
  )
}
