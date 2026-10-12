import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

export default function PromptvaultSupport() {
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
        <h1 className="text-3xl md:text-4xl font-bold mb-2">고객 지원</h1>
        <p className="text-gray-500 text-sm mb-12">프롬프트 보관함</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">앱 소개</h2>
          <p className="text-gray-400">잘 나온 AI 사진의 프롬프트를 결과 사진과 함께 카드로 모아 두고, 사진으로 알아본 뒤 본문을 저장한 그대로 복사하는 앱입니다. 모든 카드는 이 기기에만 저장됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">자주 묻는 질문</h2>
          <p className="text-gray-400"><strong className="text-white">Q. 무료로 어디까지 되나요?</strong><br/>카드 30개, 컬렉션 3개, 검색·복사·가져오기, &ldquo;이 프롬프트로 만들기&rdquo;(최근 요청 3개 보관), 세로 스트립 네컷(저장 시 작은 표시), 팩별 무료 프롬프트를 쓸 수 있습니다. 기본 예제와 팩에서 담은 카드는 한도에 세지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 구독인가요?</strong><br/>아닙니다. Pro는 1회 결제 상품이며 자동 갱신되지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 무료 한도를 넘으면 기존 카드가 지워지나요?</strong><br/>아닙니다. 이미 보관한 카드와 컬렉션은 그대로 두고, 새로 더할 때만 확인합니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 앱이 이미지를 만들어 주나요?</strong><br/>아닙니다. &ldquo;이 프롬프트로 만들기&rdquo;는 내 사진과 요청사항을 프롬프트에 합쳐 복사한 뒤 ChatGPT 앱이나 공유 화면으로 보냅니다. 이미지는 사용자가 고른 앱에서 만들어집니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 카드가 옮겨지나요?</strong><br/>카드는 이 기기에만 저장되고 iCloud로 동기화되지 않습니다. Pro의 &ldquo;백업 파일 만들기&rdquo;로 사진까지 담은 zip을 만든 뒤 새 기기에서 &ldquo;백업 파일 가져오기&rdquo;를 하세요.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 가져오기는 어떤 파일을 읽나요?</strong><br/>프롬프트 마크다운 파일과 예시 이미지를 담은 폴더, 또는 그 폴더를 묶은 zip을 읽습니다. 이미 있는 항목은 건너뜁니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 예제 카드를 지우고 싶어요.</strong><br/>보관함의 설정(톱니바퀴)에서 &ldquo;예제 모두 지우기&rdquo;를 누르세요. 직접 고친 예제와 내가 만든 프롬프트는 지우지 않습니다.</p>
          <p className="text-gray-400"><strong className="text-white">Q. 기기를 바꾸면 구매가 유지되나요?</strong><br/>같은 Apple 계정이라면 설정의 &ldquo;구매 복원&rdquo;으로 복원됩니다.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">예시 이미지와 프롬프트</h2>
          <p className="text-gray-400">기본 예제와 팩의 예시 사진은 각 프롬프트로 생성한 가상 인물·가상 상호 이미지입니다. 외부 작가의 프롬프트는 허락을 받아 싣고 미리보기에 만든 사람을 표시합니다.</p>
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
