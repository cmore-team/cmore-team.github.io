import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  Calculator,
  FileText,
  Gamepad2,
  Github,
  Image,
  Layers,
  Mail,
  Menu,
  QrCode,
  RectangleHorizontal,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wrench,
  X,
  Zap,
} from 'lucide-react'
import anzanIcon from './assets/anzan-icon.png'
import anzanDaily from './assets/anzan-shot-daily.svg'
import anzanFlash from './assets/anzan-shot-flash.svg'
import anzanResults from './assets/anzan-shot-results.svg'
import cmoreMark from './assets/cmore-mark.svg'

const NAV_LINKS = [
  { href: '#studio', label: 'Studio' },
  { href: '#work', label: 'Work' },
  { href: '#tools', label: 'Tools' },
  { href: '#contact', label: 'Contact' },
]

const MARQUEE = [
  'Mobile apps',
  'Indie games',
  'Creator tools',
  'Local-first',
  'No account walls',
  'Made in Korea',
  'Privacy by default',
  'Ships small, fast',
]

const STATS = [
  { value: '3', label: 'Apps shipping' },
  { value: '4', label: 'Free web tools' },
  { value: '100%', label: 'On-device' },
]

const STUDIO_LANES = [
  {
    icon: Smartphone,
    label: 'Mobile apps',
    title: 'Everyday utilities with short paths.',
    desc: 'We keep the interface one tap from the task — capture, practice, resize, or share with zero setup.',
    accent: '#2DD4CF',
  },
  {
    icon: Gamepad2,
    label: 'Indie games',
    title: 'Small sessions, tactile feedback.',
    desc: 'Ideas shaped around fast loops, readable rules, and moments that just feel good in the hand.',
    accent: '#7C6FF0',
  },
  {
    icon: Wrench,
    label: 'Creator tools',
    title: 'Browser-first helpers for shipping.',
    desc: 'Web tools that run entirely on your machine, turning store and production chores into one pass.',
    accent: '#FF7A59',
  },
]

const PROJECTS = [
  {
    name: 'Anzan',
    role: 'Mental math trainer',
    desc: 'Daily arithmetic sprints, flash sums, percentages, fractions, and geometry basics — built for short, focused practice that sticks.',
    icon: Calculator,
    iconImage: anzanIcon,
    accent: '#2DD4CF',
    status: 'Live on iOS',
    media: [anzanDaily, anzanResults],
    links: [
      { to: '/app/anzan', label: 'Overview' },
      { to: '/app/anzan/support', label: 'Support' },
      { to: '/app/anzan/privacy', label: 'Privacy' },
    ],
    tags: ['Practice', 'iOS', 'Local-first'],
  },
  {
    name: 'Catch Note',
    role: 'Quick capture notes',
    desc: 'A lightweight note surface for catching ideas before they disappear — fast in, fast out, with simple privacy expectations.',
    icon: FileText,
    accent: '#FF7A59',
    status: 'In progress',
    links: [{ to: '/app/catchnote/privacy', label: 'Privacy' }],
    tags: ['Notes', 'Utility'],
  },
  {
    name: 'Crossline',
    role: 'ADHD-friendly habits',
    desc: 'Habit tracking shaped around gentle nudges, focus tools, and local progress instead of noisy, guilt-trip dashboards.',
    icon: Activity,
    accent: '#7C6FF0',
    status: 'In progress',
    links: [{ to: '/app/crossline/privacy', label: 'Privacy' }],
    tags: ['Habits', 'Focus'],
  },
]

const TOOLS = [
  {
    to: '/tools/app-icon-generator',
    icon: Layers,
    title: 'App Icon Generator',
    desc: 'Turn one source image into full iOS and Android icon sets as a ready-to-ship ZIP.',
    accent: '#2DD4CF',
  },
  {
    to: '/tools/qr-code-generator',
    icon: QrCode,
    title: 'QR Code Generator',
    desc: 'Generate QR codes with custom size, color, and error correction. PNG or clipboard.',
    accent: '#7C6FF0',
  },
  {
    to: '/tools/icon-resizer',
    icon: Image,
    title: 'Icon Resizer',
    desc: 'Drop any image and get a clean 512 × 512 PNG, processed right in your browser.',
    accent: '#FF7A59',
  },
  {
    to: '/tools/feature-graphic-resizer',
    icon: RectangleHorizontal,
    title: 'Feature Graphic Resizer',
    desc: 'Prepare a pixel-perfect 1024 × 500 Google Play feature graphic in one pass.',
    accent: '#F5C451',
  },
]

function BrandLogo({ large = false }) {
  return (
    <span className="group inline-flex items-center gap-2.5">
      <img
        src={cmoreMark}
        alt=""
        className={`${large ? 'h-10 w-10' : 'h-8 w-8'} rounded-lg bg-white/5 p-0.5 ring-1 ring-white/10 transition-transform duration-300 group-hover:rotate-6`}
      />
      <span className={`font-display font-bold leading-none tracking-tight text-white ${large ? 'text-2xl' : 'text-lg'}`}>
        CMORE
      </span>
    </span>
  )
}

function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  return (
    <Tag className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

function SectionHead({ kicker, title, children, center = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      <Reveal className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
        <Sparkles className="h-3.5 w-3.5" />
        {kicker}
      </Reveal>
      <Reveal as="h2" delay={80} className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
        {title}
      </Reveal>
      {children && (
        <Reveal as="p" delay={140} className="mt-5 text-lg leading-8 text-zinc-400">
          {children}
        </Reveal>
      )}
    </div>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-md items-center justify-center lg:min-h-[600px] lg:max-w-none">
      <div className="glow left-1/4 top-1/4 h-72 w-72 bg-brand/40" />
      <div className="glow bottom-1/4 right-1/4 h-72 w-72 bg-iris/40" />
      <img
        src={anzanFlash}
        alt="Anzan flash practice screen"
        className="float-b absolute right-2 top-6 w-[150px] max-w-none rounded-[28px] shadow-2xl ring-1 ring-white/10 sm:right-8 sm:w-[185px] lg:right-[14%] lg:top-[8%] lg:w-[240px]"
        draggable="false"
      />
      <img
        src={anzanDaily}
        alt="Anzan daily practice screen"
        className="float-a relative z-10 w-[180px] max-w-none rounded-[28px] shadow-2xl ring-1 ring-white/10 sm:w-[220px] lg:w-[290px]"
        draggable="false"
      />
    </div>
  )
}

function StudioCard({ lane, index }) {
  const Icon = lane.icon
  return (
    <Reveal
      delay={index * 90}
      className="card-glow group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7"
      style={{ '--accent': lane.accent, transitionDelay: `${index * 90}ms` }}
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-white/10"
        style={{ backgroundColor: `${lane.accent}1f`, color: lane.accent }}
      >
        <Icon className="h-6 w-6" />
      </div>
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: lane.accent }}>
        {lane.label}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-white">{lane.title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-zinc-400">{lane.desc}</p>
    </Reveal>
  )
}

function ProjectRow({ project, index }) {
  const Icon = project.icon
  const flip = index % 2 === 1
  return (
    <Reveal
      as="article"
      delay={index * 60}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-center gap-4">
          {project.iconImage ? (
            <img src={project.iconImage} alt="" className="h-14 w-14 rounded-2xl ring-1 ring-white/10" />
          ) : (
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/10"
              style={{ backgroundColor: `${project.accent}24`, color: project.accent }}
            >
              <Icon className="h-7 w-7" />
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-zinc-400">{project.role}</p>
            <h3 className="font-display text-3xl font-bold text-white">{project.name}</h3>
          </div>
        </div>

        <span
          className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold"
          style={{ borderColor: `${project.accent}40`, color: project.accent, backgroundColor: `${project.accent}12` }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
          {project.status}
        </span>

        <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">{project.desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.map((link, i) => (
            <Link
              key={`${project.name}-${link.to}`}
              to={link.to}
              className={`group inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                i === 0
                  ? 'text-ink'
                  : 'border border-white/15 text-white hover:bg-white/5'
              }`}
              style={i === 0 ? { backgroundColor: project.accent } : undefined}
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          ))}
        </div>
      </div>

      <div
        className={`card-glow relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 ${flip ? 'lg:order-1' : ''}`}
        style={{ '--accent': project.accent }}
      >
        <div className="grid-overlay pointer-events-none absolute inset-0 opacity-60" />
        <div
          className="glow left-1/2 top-0 h-56 w-56 -translate-x-1/2"
          style={{ backgroundColor: `${project.accent}55` }}
        />
        {project.media ? (
          <div className="relative flex min-h-[340px] items-center justify-center gap-4 md:min-h-[420px]">
            <img
              src={project.media[1]}
              alt={`${project.name} secondary screen`}
              className="float-b w-[42%] max-w-none rounded-[22px] shadow-2xl ring-1 ring-white/10"
              loading="lazy"
            />
            <img
              src={project.media[0]}
              alt={`${project.name} primary screen`}
              className="float-a relative z-10 w-[48%] max-w-none rounded-[22px] shadow-2xl ring-1 ring-white/10"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="relative flex min-h-[300px] flex-col items-start justify-between md:min-h-[360px]">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl ring-1 ring-inset ring-white/10"
              style={{ backgroundColor: `${project.accent}24`, color: project.accent }}
            >
              <Icon className="h-8 w-8" />
            </div>
            <p className="mt-8 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
              Built around one quick action, then refined until that action feels obvious.
            </p>
          </div>
        )}
      </div>
    </Reveal>
  )
}

function ToolCard({ tool, index }) {
  const Icon = tool.icon
  return (
    <Reveal delay={index * 70} style={{ transitionDelay: `${index * 70}ms` }}>
      <Link
        to={tool.to}
        className="card-glow group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        style={{ '--accent': tool.accent }}
      >
        <div className="flex items-start justify-between">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ring-white/10"
            style={{ backgroundColor: `${tool.accent}1f`, color: tool.accent }}
          >
            <Icon className="h-6 w-6" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-zinc-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        </div>
        <h3 className="mt-6 font-display text-lg font-semibold text-white">{tool.title}</h3>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{tool.desc}</p>
      </Link>
    </Reveal>
  )
}

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal'))
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    )
    els.forEach((el) => observer.observe(el))
    // Safety net: never leave content invisible.
    const fallback = setTimeout(() => els.forEach((el) => el.classList.add('is-visible')), 2500)
    return () => {
      observer.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600)
      setScrolled(window.scrollY > 12)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setIsMobileMenuOpen(false)
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div ref={rootRef} className="min-h-screen bg-ink text-white antialiased">
      {/* ---------------- Nav ---------------- */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl' : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center" aria-label="CMORE home">
            <BrandLogo />
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:hunny3790@gmail.com"
              className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-zinc-200 sm:inline-flex"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/5 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-white/10 bg-ink/95 backdrop-blur-xl md:hidden">
            <div className="px-5 py-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block border-b border-white/5 py-3.5 text-sm font-medium text-zinc-300 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="mailto:hunny3790@gmail.com"
                onClick={handleNavClick}
                className="mt-3 mb-3 flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-ink"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </div>
        )}
      </nav>

      <main id="top">
        {/* ---------------- Hero ---------------- */}
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="grid-overlay pointer-events-none absolute inset-0" />
          <div className="glow left-[8%] top-10 h-80 w-80 bg-brand/25" />
          <div className="glow right-[6%] top-40 h-96 w-96 bg-iris/25" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="hero-enter inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300" style={{ animationDelay: '60ms' }}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                </span>
                Indie studio · Ansan, Korea
              </div>

              <h1
                className="hero-enter mt-7 font-display text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]"
                style={{ animationDelay: '140ms' }}
              >
                Small things
                <br />
                people <span className="text-gradient animated-gradient">actually use</span>.
              </h1>

              <p
                className="hero-enter mt-7 max-w-xl text-lg leading-8 text-zinc-400 md:text-xl"
                style={{ animationDelay: '220ms' }}
              >
                CMORE is a compact studio building mobile apps, indie games, and practical browser tools — quick to open, useful on the first tap, and no account walls.
              </p>

              <div className="hero-enter mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '300ms' }}>
                <a
                  href="#work"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-zinc-200"
                >
                  See our work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#tools"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  <Wrench className="h-4 w-4" />
                  Try the free tools
                </a>
              </div>

              <div className="hero-enter mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-7" style={{ animationDelay: '380ms' }}>
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-3xl font-bold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-enter" style={{ animationDelay: '260ms' }}>
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ---------------- Marquee ---------------- */}
        <section className="border-y border-white/10 bg-white/[0.02] py-5">
          <div className="marquee-track overflow-hidden">
            <div className="marquee gap-10 pr-10">
              {[...MARQUEE, ...MARQUEE].map((item, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap text-sm font-medium text-zinc-500">
                  <span>{item}</span>
                  <span className="text-brand/70">✦</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Studio ---------------- */}
        <section id="studio" className="relative px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHead kicker="What we make" title="Focused products that do one job clearly.">
              We move between apps, games, and creator utilities, but the standard never changes: quick entry, useful output, and respect for your data.
            </SectionHead>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {STUDIO_LANES.map((lane, index) => (
                <StudioCard key={lane.label} lane={lane} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Work ---------------- */}
        <section id="work" className="relative px-5 py-24 md:px-8 md:py-32">
          <div className="glow left-1/2 top-0 h-96 w-[40rem] -translate-x-1/2 bg-iris/10" />
          <div className="relative mx-auto max-w-7xl">
            <SectionHead kicker="Selected work" title="Released and in-progress.">
              We ship small surfaces with real utility first, then keep refining the touch points people use every day.
            </SectionHead>

            <div className="mt-16 space-y-24 md:space-y-32">
              {PROJECTS.map((project, index) => (
                <ProjectRow key={project.name} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Tools ---------------- */}
        <section id="tools" className="relative border-t border-white/10 bg-white/[0.02] px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHead kicker="Free tools" title="Client-side helpers for shipping assets." center>
              No upload server, no sign-up. Pick an image or some text, process it locally, and download the result.
            </SectionHead>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TOOLS.map((tool, index) => (
                <ToolCard key={tool.to} tool={tool} index={index} />
              ))}
            </div>

            <Reveal delay={120} className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Runs in your browser</span>
              <span className="inline-flex items-center gap-2"><Zap className="h-4 w-4 text-iris" /> No uploads, instant results</span>
              <span className="inline-flex items-center gap-2"><Sparkles className="h-4 w-4 text-ember" /> Completely free</span>
            </Reveal>
          </div>
        </section>

        {/* ---------------- CTA ---------------- */}
        <section id="contact" className="relative overflow-hidden px-5 py-24 md:px-8 md:py-32">
          <div className="glow left-1/2 top-1/2 h-80 w-[44rem] -translate-x-1/2 -translate-y-1/2 bg-brand/20" />
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] px-6 py-16 text-center md:px-16 md:py-20">
            <div className="grid-overlay pointer-events-none absolute inset-0 opacity-50" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Let's talk</p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Build the next useful small thing.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-zinc-400">
                Product questions, support, or a collaboration idea — reach out and we'll get back to you.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:hunny3790@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-zinc-200"
                >
                  <Mail className="h-4 w-4" />
                  hunny3790@gmail.com
                </a>
                <a
                  href="https://github.com/cmore-team"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ---------------- Footer ---------------- */}
      <footer className="border-t border-white/10 px-5 py-12 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <BrandLogo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-500">
              Mobile app &amp; game development studio. Ansan-si, Gyeonggi-do, Republic of Korea.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm text-zinc-500 md:items-end">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
              <button onClick={() => setIsPrivacyOpen(true)} className="transition-colors hover:text-white">
                Privacy Policy
              </button>
            </div>
            <p>&copy; {new Date().getFullYear()} CMORE. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* ---------------- Back to top ---------------- */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/80 text-white shadow-lg backdrop-blur transition-all hover:bg-white/10 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* ---------------- Privacy modal ---------------- */}
      {isPrivacyOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <div
            className="max-h-[82vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-panel text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-panel/95 p-6 backdrop-blur">
              <h2 className="font-display text-xl font-bold">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:bg-white/5"
                aria-label="Close privacy policy"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 p-6 text-sm leading-7 text-zinc-400">
              <p>
                <strong className="text-white">Effective Date:</strong> December 2025
              </p>
              <p>
                CMORE (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile applications.
              </p>
              <h3 className="pt-4 font-semibold text-white">Information We Collect</h3>
              <p>
                We may collect information you provide directly, such as when you contact us for support. We do not collect personal data unless explicitly provided by you.
              </p>
              <h3 className="pt-4 font-semibold text-white">How We Use Information</h3>
              <p>
                Any information collected is used solely to improve our services and respond to your inquiries. We do not sell or share your information with third parties.
              </p>
              <h3 className="pt-4 font-semibold text-white">Contact Us</h3>
              <p>If you have questions about this Privacy Policy, please contact us at hunny3790@gmail.com.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
