import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.cardpaw

export default function CardpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          되새미는 계정과 로그인이 없는 복습 도구입니다. 카드와 복습 기록은 이 기기에만 저장되고, 이 버전은 사용 분석
          데이터를 전송하지 않습니다. 암기나 성적 향상을 약속하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          직접 적은 카드(질문·답), 복습 이력과 예정일, 계획 버전과 주간 비교 결과, 구독 상태 확인 정보가 이 기기의 앱
          저장 공간에 로컬 JSON 파일로 저장됩니다. 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          카드는 앱 안에서 고치거나 지울 수 있고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud
          또는 컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을
          따릅니다.
        </p>
      </Section>
      <Section title="백업 파일">
        <p>
          카드·복습 이력·계획 버전의 JSON 백업 저장과 복원은 무료이며, 사용자가 직접 실행할 때만 만들어지고 사용자가
          고른 곳에만 저장됩니다. 백업 파일은 암호화되지 않은 일반 파일이므로 보관과 공유는 사용자가 관리합니다. 복원은
          내용을 확인한 뒤 현재 덱을 바꾸며 구독과 분석 설정은 바꾸지 않습니다. 개발자는 백업 파일을 받지 않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection subscription />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
