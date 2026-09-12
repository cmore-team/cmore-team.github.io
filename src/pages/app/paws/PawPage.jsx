import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import logoWhite from '../../../assets/CMORE_logo_white.svg'

/**
 * Shared shell for the ten cat apps' support/privacy pages.
 * Visual language follows the existing app pages (loanplan, wattcalc, ...):
 * black background, max-w-3xl column, pill badge, space-y-8 sections.
 */
export default function PawPage({ app, kind, children }) {
  const isPrivacy = kind === 'privacy'
  const crossTo = `/app/${app.slug}/${isPrivacy ? 'support' : 'privacy'}`
  const crossLabel = isPrivacy ? '고객 지원' : '개인정보 처리방침'
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/70 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logoWhite} alt="CMORE" className="h-6" />
          </Link>
          <Link to="/" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            CMORE
          </Link>
        </div>
      </nav>
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-gray-400 border border-white/20 rounded-full">{app.name} · {app.latin}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{isPrivacy ? '개인정보 처리방침' : '고객 지원'}</h1>
        <p className="text-gray-500 text-sm mb-12">{isPrivacy ? '시행일: 2026년 9월 12일' : app.tagline}</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">{children}</div>
        <div className="mt-14 pt-8 border-t border-white/10">
          <Link to={crossTo} className="text-sm text-gray-400 hover:text-white underline transition-colors">
            {app.name} {crossLabel} 보기 →
          </Link>
        </div>
      </main>
    </div>
  )
}

export function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      <div className="text-gray-400 space-y-3">{children}</div>
    </section>
  )
}

export function MailLink() {
  return <a className="text-white underline" href="mailto:hunny3790@gmail.com">hunny3790@gmail.com</a>
}

/* ---- shared privacy sections (facts common to this release of all ten apps:
   analyticsAppID is empty so the optional analytics runtime is inert,
   domain data is local JSON, there are no accounts and no cloud sync,
   and Apple handles StoreKit purchases). ---- */

export function NetworkAnalyticsSection({ appName }) {
  return (
    <Section title="네트워크와 사용 분석">
      <p>
        이 버전은 사용 분석 서비스가 설정되어 있지 않아 사용 분석 데이터를 전송하지 않습니다. 설정에 분석 동의
        항목이 있더라도 현재 배포본에서는 아무것도 보내지 않으며, 동의 여부는 이 기기에만 저장됩니다.
      </p>
      <p>광고를 표시하지 않으며, 다른 앱이나 웹사이트를 넘나드는 사용자 추적을 하지 않습니다.</p>
      <p>
        다만 네트워크를 전혀 사용하지 않는 것은 아닙니다. App Store 결제·구매 복원 시 Apple과 통신하고, 지원·개인정보
        링크를 열면 웹 페이지에 연결됩니다. 이 과정에서 {appName}에 기록한 내용이 개발자에게 전송되지는 않습니다.
      </p>
    </Section>
  )
}

export function PurchaseSection({ subscription = false }) {
  return (
    <Section title="결제">
      <p>
        {subscription ? '구독 결제와 갱신, 해지, 환불은' : '구매와 환불은'} Apple의 App Store가 처리합니다. 개발자는
        결제 수단 정보를 수집하거나 보관하지 않으며, 앱은 잠금 해제 여부를 확인하는 데 필요한 구매 상태만 Apple에서
        확인합니다.
      </p>
      {subscription && (
        <p>
          구독 관리와 해지는 iOS 설정 또는{' '}
          <a className="text-white underline" href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer">Apple 구독 관리 페이지</a>
          에서 할 수 있습니다.
        </p>
      )}
    </Section>
  )
}

export function ChildrenSection() {
  return (
    <Section title="아동의 개인정보">
      <p>CMORE는 이 앱을 통해 아동의 개인정보를 별도로 전송받거나 수집하지 않습니다.</p>
    </Section>
  )
}

export function PrivacyContactSection() {
  return (
    <Section title="문의">
      <p>개인정보 처리에 대한 문의는 <MailLink /> 으로 보내주세요.</p>
    </Section>
  )
}

/* ---- shared support sections ---- */

export function RestoreRefundSection({ productName }) {
  return (
    <Section title="구매 복원과 환불">
      <p>
        {productName}은 한 번 결제하는 비소모성 구매이며 자동 갱신되지 않고 무료 체험도 없습니다. 기기를 바꾸거나
        재설치했다면 같은 Apple 계정으로 로그인한 뒤 설정 화면의 '구매 복원'을 사용하세요.
      </p>
      <p>
        환불은 개발자가 아닌 Apple이 처리합니다.{' '}
        <a className="text-white underline" href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>
        에서 구매 내역을 선택해 요청할 수 있습니다.
      </p>
    </Section>
  )
}

export function SupportContactSection() {
  return (
    <Section title="문의">
      <p>버그 제보나 기능 요청은 <MailLink /> 으로 보내주세요. 앱 이름과 사용 중인 iOS 버전, 문제가 발생한 상황을 함께 적어주시면 확인에 도움이 됩니다.</p>
    </Section>
  )
}
