import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.waterpaw

export default function WaterpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          물도리는 계정과 로그인이 없는 물 기록장입니다. 물 기록은 이 기기에만 저장되고, 이 버전은 사용 분석 데이터를
          전송하지 않습니다. 물도리는 기록 도구이며 의료 조언이나 건강 개선을 약속하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          컵 목록과 용량, 물 기록(양·시각), 하루 목표, 알림 시간표, 외형 선택, 구매 상태가 이 기기의 앱 저장 공간에
          로컬 파일로 저장됩니다. 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          기록은 앱 안에서 정정·취소할 수 있고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud
          또는 컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을
          따릅니다.
        </p>
      </Section>
      <Section title="알림">
        <p>
          기록 알림은 기기에서 반복 예약되는 로컬 알림이며 서버 푸시가 아닙니다. 알림 권한은 알림 시간표를 켤 때에만
          요청하고, 알림 내용이 기기 밖으로 전송되지 않습니다. iOS 설정에서 언제든 권한을 끌 수 있고, 앱 안에서 알림을
          끄는 것은 무료입니다.
        </p>
      </Section>
      <Section title="CSV 내보내기">
        <p>
          유료 확장의 CSV 저장은 사용자가 직접 실행할 때만 만들어지고, 사용자가 고른 곳으로만 전달됩니다. 내보낸 파일은
          암호화되지 않은 일반 파일이므로 보관과 공유는 사용자가 관리합니다. 개발자는 내보낸 파일을 받지 않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
