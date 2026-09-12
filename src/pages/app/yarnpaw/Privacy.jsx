import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.yarnpaw

export default function YarnpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          단소미는 계정과 로그인이 없는 뜨개 기록장입니다. 작품 기록은 이 기기에만 저장되고, 이 버전은 사용 분석
          데이터를 전송하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          작품 이름, 단수와 전진·취소 기록, 반복 블록과 서식, 보조 카운터, 구매 상태가 이 기기의 앱 저장 공간에 로컬
          JSON 파일로 저장됩니다. 전진과 취소는 바로 저장됩니다. 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          작품은 앱 안에서 직접 삭제할 수 있고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud
          또는 컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을
          따릅니다.
        </p>
      </Section>
      <Section title="공유">
        <p>
          유료 확장의 진행 상황 글 출력은 사용자가 직접 실행할 때만 만들어지고, 사용자가 고른 곳으로만 공유됩니다.
          개발자는 공유한 내용을 받지 않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
