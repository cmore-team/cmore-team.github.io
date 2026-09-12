import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.packpaw

export default function PackpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          챙그리는 계정과 가입이 없는 짐 목록 앱입니다. 짐 목록은 이 기기에만 저장되고, 이 버전은 사용 분석 데이터를
          전송하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          여행 이름, 짐 항목과 필요·준비 수량, 분류, 사용자 템플릿, 구매 상태가 이 기기의 앱 저장 공간에 로컬 파일로
          저장됩니다. 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          여행과 항목은 앱 안에서 직접 삭제할 수 있고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기
          백업(iCloud 또는 컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의
          백업 설정을 따릅니다.
        </p>
      </Section>
      <Section title="공유">
        <p>
          유료 확장의 가방 요약은 앱 화면에서 확인하고 복사하는 텍스트입니다. 사용자가 직접 복사해 붙여넣는 곳으로만
          전달되며, 개발자는 그 내용을 받지 않습니다. 파일 내보내기 기능은 없습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
