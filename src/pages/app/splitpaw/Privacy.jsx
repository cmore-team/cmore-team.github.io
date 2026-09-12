import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.splitpaw

export default function SplitpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          몫모아는 회원 가입도 계좌 연결도 없는 정산 도구입니다. 정산 기록은 이 기기에만 저장되고, 이 버전은 사용 분석
          데이터를 전송하지 않습니다. 실제 송금 기능은 없습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          그룹과 참여자 이름(직접 입력한 이름), 지출 기록, 정산 결과, 구매 상태가 이 기기의 앱 저장 공간에 로컬 파일로
          저장됩니다. 연락처 접근 권한을 요청하지 않으며, 개발자 서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          그룹을 비우면 그 기록이 삭제되고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud 또는
          컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을
          따릅니다.
        </p>
      </Section>
      <Section title="공유와 내보내기">
        <p>
          정산 평문 복사(무료), 유료 확장의 CSV 파일 공유와 정산 카드 이미지 공유는 모두 사용자가 직접 실행할 때만
          만들어지고, 사용자가 고른 곳으로만 전달됩니다. 공유한 내용에는 참여자 이름과 금액이 담기므로 받는 사람을 직접
          확인하세요. 내보낸 파일은 암호화되지 않은 일반 파일이며, 개발자는 이를 받지 않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
