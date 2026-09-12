import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.focuspaw

export default function FocuspawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          이음숨은 계정과 로그인이 없는 집중 타이머입니다. 집중 기록은 이 기기의 로컬 파일에만 저장되고, 이 버전은 사용
          분석 데이터를 전송하지 않습니다. 다른 앱을 감시하거나 차단하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          세션 길이와 실제 실행 시간, 직접 적은 다음 행동 한 줄, 중단 이유와 메모, 프리셋, 구매 상태가 이 기기의 앱
          저장 공간에 로컬 JSON 파일로 저장됩니다. 직접 저장한 중단만 기록하며, 앱 전환이나 화면 잠금을 추적하지
          않습니다. 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          앱을 삭제하면 기록도 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud 또는 컴퓨터 백업)을 켜 두었다면
          다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을 따릅니다.
        </p>
      </Section>
      <Section title="CSV 내보내기">
        <p>
          유료 확장의 CSV 내보내기는 사용자가 직접 실행할 때만 만들어지고, 저장 위치도 사용자가 직접 선택합니다. 내보낸
          파일은 암호화되지 않은 일반 파일이므로 보관과 공유는 사용자가 관리합니다. 개발자는 내보낸 파일을 받지
          않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
