import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowLeft, Trophy } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'
import minesweeperIcon from '../../../assets/minesweeper-icon.png'

// 출시 후 이 한 줄만 바꾼다: 'https://apps.apple.com/kr/app/id6811382482'
const APP_STORE_URL = ''

// 앱 공유 링크 계약: ?d=<easy|normal|hard|custom>&t=<초>&v=1 (개인정보 없음)
const DIFFICULTY = {
  easy: { ko: '초급', en: 'Beginner' },
  normal: { ko: '중급', en: 'Intermediate' },
  hard: { ko: '고급', en: 'Expert' },
  custom: { ko: '사용자 지정', en: 'Custom' },
}
const MAX_SECONDS = 359999

export function parseRecord(params) {
  const difficulty = DIFFICULTY[params.get('d')]
  const t = params.get('t') ?? ''
  if (!difficulty || params.get('v') !== '1' || !/^\d{1,6}$/.test(t)) return null
  const seconds = Number(t)
  if (seconds > MAX_SECONDS) return null
  const clock = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`
  return { difficulty, clock }
}

export default function MinesweeperShare() {
  const [params] = useSearchParams()
  const record = parseRecord(params)

  useEffect(() => {
    document.title = record
      ? `지뢰찾기 ${record.difficulty.ko} ${record.clock} 클리어! | 지뢰찾기 클래식`
      : '지뢰찾기 클래식 | 기록 공유'
  }, [record?.difficulty.ko, record?.clock])

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

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20 flex flex-col items-center text-center">
        <img
          src={minesweeperIcon}
          alt="지뢰찾기 클래식 앱 아이콘"
          className="w-24 h-24 rounded-[22px] mb-6"
        />
        <div className="mb-8">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">지뢰찾기 클래식</span>
        </div>

        {record ? (
          <>
            <Trophy className="w-10 h-10 text-emerald-400 mb-4" aria-hidden="true" />
            <h1 className="text-4xl md:text-5xl font-bold mb-3 break-keep" data-testid="share-headline">
              {record.difficulty.ko} <span className="tabular-nums">{record.clock}</span> 클리어!
            </h1>
            <p className="text-2xl text-gray-300 mb-2">너도 해볼래?</p>
            <p className="text-gray-500 text-sm mb-12">
              {record.difficulty.en} cleared in <span className="tabular-nums">{record.clock}</span>. Your turn?
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 break-keep" data-testid="share-headline">
              기록을 불러오지 못했어요
            </h1>
            <p className="text-2xl text-gray-300 mb-2">대신 한 판 해볼래?</p>
            <p className="text-gray-500 text-sm mb-12">We couldn't read this record. Try a round yourself?</p>
          </>
        )}

        {APP_STORE_URL ? (
          <a
            href={APP_STORE_URL}
            className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
          >
            App Store에서 받기
          </a>
        ) : (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex items-center justify-center min-h-[48px] px-8 rounded-full border border-white/20 text-gray-400 font-semibold cursor-not-allowed"
          >
            곧 App Store 출시 · Coming soon
          </button>
        )}

        <p className="text-gray-500 text-sm mt-12 max-w-md leading-relaxed break-keep">
          고전 규칙 그대로의 지뢰찾기. 초급·중급·고급, 첫 탭 안전, 광고·계정 없이 완전 오프라인.
          이 링크에는 난이도와 기록 시간만 담겨 있습니다.
        </p>
        <div className="mt-6 flex gap-6 text-sm">
          <Link to="/app/minesweeper/support" className="text-gray-400 underline hover:text-white">고객 지원</Link>
          <Link to="/app/minesweeper/privacy" className="text-gray-400 underline hover:text-white">개인정보 처리방침</Link>
        </div>
      </main>
    </div>
  )
}
