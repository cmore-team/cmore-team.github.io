import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Brain,
  CheckCircle2,
  Mail,
  Percent,
  ShieldCheck,
  Shapes,
  Timer,
  Zap,
} from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'
import anzanIcon from '../../../assets/anzan-icon.png'
import shotDaily from '../../../assets/anzan-shot-daily.svg'
import shotFlash from '../../../assets/anzan-shot-flash.svg'
import shotGeometry from '../../../assets/anzan-shot-geometry.svg'
import shotPercent from '../../../assets/anzan-shot-percent.svg'
import shotResults from '../../../assets/anzan-shot-results.svg'

const HERO_SHOTS = [
  { src: shotDaily, alt: 'Anzan daily 90 second routine screenshot' },
  { src: shotFlash, alt: 'Anzan flash mental addition screenshot' },
  { src: shotGeometry, alt: 'Anzan geometry basics screenshot' },
]

const SCREENSHOTS = [
  { src: shotDaily, alt: 'Daily routine screenshot', label: 'Daily' },
  { src: shotFlash, alt: 'Flash Anzan screenshot', label: 'Flash' },
  { src: shotGeometry, alt: 'Geometry basics screenshot', label: 'Geometry' },
  { src: shotPercent, alt: 'Percent training screenshot', label: 'Percent' },
  { src: shotResults, alt: 'Progress screenshot', label: 'Records' },
]

const TRAINING = [
  {
    icon: Timer,
    title: '90초 루틴',
    copy: '매일 시작하기 쉬운 짧은 세션으로 계산 감각을 깨웁니다.',
  },
  {
    icon: Zap,
    title: '플래시 암산',
    copy: '0.5초마다 숫자를 보고 마지막에 합계를 입력합니다.',
  },
  {
    icon: Percent,
    title: '퍼센트와 분수',
    copy: '숫자에 집중하도록 조사와 기호는 작게, 핵심 숫자는 크게 보여줍니다.',
  },
  {
    icon: Shapes,
    title: '도형 감각',
    copy: '문제, 조건, 구할 값을 분리해서 넓이와 둘레를 명확히 풉니다.',
  },
]

export default function AnzanPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050706] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050706]/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center" aria-label="CMORE home">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </nav>

      <main>
        <section className="relative min-h-[88svh] overflow-hidden px-6 pb-14 pt-28">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_78%_28%,rgba(75,201,209,0.24),transparent_30%),linear-gradient(90deg,#050706_0%,rgba(5,7,6,0.96)_38%,rgba(5,7,6,0.66)_100%)]" />
            <div className="absolute -right-24 top-24 hidden w-[760px] grid-cols-3 gap-5 opacity-95 lg:grid">
              {HERO_SHOTS.map((shot, index) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  className={`w-full rounded-[32px] shadow-2xl shadow-black/40 ${
                    index === 0 ? 'mt-24 rotate-[-8deg]' : index === 1 ? 'rotate-[3deg]' : 'mt-44 rotate-[9deg]'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
            <div className="max-w-[620px] pt-6 md:pt-16">
              <div className="mb-8 flex items-center gap-4">
                <img
                  src={anzanIcon}
                  alt="Anzan app icon"
                  className="h-16 w-16 rounded-[24%] shadow-xl shadow-cyan-950/40"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
                    Mental math training
                  </p>
                  <p className="mt-1 text-sm text-white/50">iPhone, iPad, Mac</p>
                </div>
              </div>
              <h1 className="text-7xl font-black leading-none tracking-normal text-white sm:text-8xl md:text-[9rem]">
                Anzan
              </h1>
              <p className="mt-7 max-w-xl text-2xl font-semibold leading-tight text-white/90 md:text-3xl">
                매일 90초, 빠른 계산과 순간 기억을 같이 훈련하는 암산 앱.
              </p>
              <p className="mt-5 max-w-lg text-base leading-7 text-white/60 md:text-lg">
                덧셈, 스프린트, 플래시 암산, 퍼센트, 분수, 도형 기초까지 한 화면에서 바로 시작합니다.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/app/anzan/support"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-cyan-100"
                >
                  <Mail className="h-4 w-4" />
                  Support
                </Link>
                <Link
                  to="/app/anzan/privacy"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Privacy
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 lg:hidden">
              {HERO_SHOTS.map((shot, index) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  className={`rounded-[18px] shadow-xl shadow-black/30 ${index === 1 ? '-mt-5' : 'mt-4'}`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F7FAF8] px-6 py-20 text-[#08100D] md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#168A91]">Screens</p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                앱스토어에서 바로 이해되는 사용 장면.
              </h2>
              <p className="mt-5 text-base leading-7 text-black/60">
                한눈에 기능을 이해할 수 있도록 핵심 화면을 기능별로 분리했습니다.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:gap-5">
              {SCREENSHOTS.map((shot, index) => (
                <figure
                  key={shot.src}
                  className={`group ${index % 2 === 0 ? 'md:mt-10' : ''}`}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    className="w-full rounded-[22px] shadow-xl shadow-slate-900/20 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-slate-900/20"
                  />
                  <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-[0.16em] text-black/40">
                    {shot.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-200">Training mix</p>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  단순 계산에서 도형 감각까지.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/60 lg:ml-auto">
                연습 모드는 길게 설명하지 않아도 고를 수 있게 짧고 명확하게 나눴습니다. 사용자는 오늘 필요한 감각만 골라 바로 시작합니다.
              </p>
            </div>

            <div className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {TRAINING.map((item) => (
                <div key={item.title} className="border-t border-white/10 pt-7">
                  <item.icon className="mb-6 h-7 w-7 text-cyan-200" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/60">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <img
                src={shotFlash}
                alt="Flash Anzan retry round screenshot"
                className="mx-auto w-[300px] rounded-[32px] shadow-2xl shadow-cyan-950/30 sm:w-[360px]"
              />
              <img
                src={shotResults}
                alt="Anzan local progress screenshot"
                className="absolute bottom-[-38px] right-0 hidden w-[220px] rounded-[28px] shadow-2xl shadow-black/30 md:block"
              />
            </div>
            <div>
              <Brain className="mb-7 h-9 w-9 text-[#77D77B]" />
              <h2 className="text-4xl font-black leading-tight md:text-5xl">
                실패하면 같은 라운드를 다시.
              </h2>
              <p className="mt-5 text-base leading-7 text-white/60">
                플래시 암산은 틀린 순간 합계를 공개하지 않고, 같은 숫자 흐름으로 다시 도전하게 했습니다. 같은 숫자가 반복돼도 몇 번째 숫자인지 표시해 혼동을 줄였습니다.
              </p>
              <div className="mt-8 space-y-4">
                {['0.5초 간격', '라운드마다 숫자 1개씩 증가', '오답 시 같은 라운드 재도전'].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                    <CheckCircle2 className="h-5 w-5 text-[#77D77B]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} CMORE. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/app/anzan/support" className="transition-colors hover:text-white">
              Support
            </Link>
            <Link to="/app/anzan/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
