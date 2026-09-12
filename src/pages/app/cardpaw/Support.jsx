import PawPage, { Section, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.cardpaw

export default function CardpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          되새미는 직접 적은 카드와 복습 예정일을 기기 안에서 관리하는 복습 도구입니다. 단순 간격 규칙(1·3·7·14·30일)을
          쓰며 학습 효과를 보장하는 알고리즘이 아닙니다. 암기나 성적 향상을 약속하지 않습니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          한 덱에 카드 수 제한 없이 담고, 오늘 예정 카드를 한 장씩 복습합니다. 답을 먼저 펼쳐야 평가할 수 있고,
          '기억남'이면 1·3·7·14·30일 간격으로 다음 날짜가 잡히며, 하루 두 번 어려웠던 카드는 다음 날 다시 만납니다.
          마지막 변경 되돌리기, 저장된 계획·결과 열람, 카드·복습 이력·계획 버전의 JSON 백업 저장과 복원까지 모두
          무료입니다.
        </p>
      </Section>
      <Section title="월간 구독으로 열리는 계획">
        <p>
          목표일과 하루 상한을 정해 현재 예정 카드를 날짜별로 배분하는 계획 만들기, 답변과 놓친 날을 반영한
          재계획(이전 버전 보존), 주간 완료/계획·미처리·평가 건수 비교 생성에 구독이 필요합니다. 계획은 오늘부터 365일
          안, 양의 정수 상한으로 만듭니다.
        </p>
        <p>
          월간 단일 자동 갱신 구독이며 무료 체험은 없습니다. 구독이 만료되거나 환불되어도 카드, 기본 복습, 기존
          계획·결과 열람, 백업은 그대로 유지됩니다. 새 계획·재계획·주간 비교 생성만 다시 잠깁니다.
        </p>
      </Section>
      <Section title="구독 관리 · 복원 · 환불">
        <p>
          구독의 확인·해지·갱신 관리는 Apple이 처리합니다. iOS 설정 &gt; Apple 계정 &gt; 구독 또는{' '}
          <a className="text-white underline" href="https://apps.apple.com/account/subscriptions" target="_blank" rel="noopener noreferrer">Apple 구독 관리 페이지</a>
          에서 관리하세요. 해지해도 이미 결제한 기간이 끝날 때까지 구독 기능을 쓸 수 있습니다.
        </p>
        <p>
          기기를 바꿨다면 같은 Apple 계정으로 로그인한 뒤 설정 화면의 '구매 복원'을 사용하세요. 환불은{' '}
          <a className="text-white underline" href="https://reportaproblem.apple.com/" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>
          에서 Apple에 요청할 수 있습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 기기를 바꾸면 카드가 옮겨지나요?</strong><br />클라우드 동기화는 없습니다. 설정의 무료 JSON 백업을 내보낸 뒤 새 기기에서 내용을 확인하고 복원하세요. 복원은 현재 덱을 바꾸지만 구독·분석 설정은 바꾸지 않습니다.</p>
        <p><strong className="text-white">Q. 구독이 끝나면 카드가 사라지나요?</strong><br />아닙니다. 카드·기본 복습·기존 결과·백업은 그대로이고, 새 계획 생성만 잠깁니다.</p>
      </Section>
      <SupportContactSection />
    </PawPage>
  )
}
