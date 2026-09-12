import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.splitpaw

export default function SplitpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          몫모아는 모임에서 함께 쓴 돈을 원 단위로 나누는 정산 도구입니다. 원화(KRW) 정수 금액만 다루고 환율 변환은
          없습니다. 지출을 균등하게 나누고 나머지 1원은 저장된 참여자 순서대로 배분하며, 송금 제안은 고정된 참여자
          순서를 따르고 최소 송금 횟수를 보장하지 않습니다. 실제 송금 기능은 없으니 보내기 전에 서로 확인하세요.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          그룹 1개(이름 있는 참여자 최대 8명), 횟수 제한 없는 지출 기록, 각자의 전체 잔액과 송금 제안 확인, 정산 결과의
          평문 복사 공유, 현재 그룹을 비우고 새 모임에 재사용, 마지막 변경 되돌리기가 무료입니다.
        </p>
      </Section>
      <Section title="한 번 구매로 열리는 프로 기능">
        <p>
          여행·친구·동료 모임을 여러 그룹으로 나란히 보관, 지출과 송금 제안의 CSV 파일 공유, 서식 정산 카드의 이미지
          공유. 구독이 아닌 일회 결제이며 무료 체험은 없습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 결제 없이 여러 모임을 쓸 수 있나요?</strong><br />동시에 보관할 수 있는 그룹은 무료로 1개입니다. 다만 현재 그룹을 비우고 새 모임에 재사용하는 것은 무료입니다. 여러 그룹을 나란히 보관하려면 확장 구매가 필요합니다.</p>
        <p><strong className="text-white">Q. 계좌를 연결하거나 송금이 되나요?</strong><br />아닙니다. 계좌 연결과 실제 송금 기능이 없는 계산·기록 도구입니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="프로 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
