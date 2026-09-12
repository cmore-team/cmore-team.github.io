import PawPage, { Section, NetworkAnalyticsSection, PurchaseSection, ChildrenSection, PrivacyContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.giftpaw

export default function GiftpawPrivacy() {
  return (
    <PawPage app={app} kind="privacy">
      <Section title="한 줄 요약">
        <p>
          소복담은 계정 없이 쓰는 선물 예산 장부입니다. 장부는 이 기기에만 저장되고, 이 버전은 사용 분석 데이터를
          전송하지 않습니다. 연락처 권한을 요청하지 않습니다.
        </p>
      </Section>
      <Section title="기기에 저장되는 정보">
        <p>
          직접 입력한 사람 이름, 행사와 날짜·예산, 선물 후보와 예상액, 구매·전달 기록, 서식, 구매 상태가 이 기기의 앱
          저장 공간에 로컬 JSON 파일로 저장됩니다. 사람 수첩은 연락처 접근 없이 이름을 직접 적는 방식입니다. 개발자
          서버나 클라우드 동기화는 없습니다.
        </p>
        <p>
          기록은 앱 안에서 고치거나 지울 수 있고, 앱을 삭제하면 기기에서 함께 삭제됩니다. 사용자가 iOS 기기 백업(iCloud
          또는 컴퓨터 백업)을 켜 두었다면 다른 앱 데이터와 마찬가지로 백업에 포함될 수 있으며, 이는 Apple의 백업 설정을
          따릅니다.
        </p>
      </Section>
      <Section title="백업과 내보내기">
        <p>
          장부 전체의 원본 JSON 백업(무료)과 유료 확장의 연도별 서식 CSV는 사용자가 직접 실행할 때만 만들어지고,
          사용자가 고른 곳에만 저장됩니다. 내보낸 파일은 암호화되지 않은 일반 파일이므로 보관과 공유는 사용자가
          관리합니다. 복원은 내용을 확인한 뒤 전체 대체 방식으로 진행되며, 개발자는 백업 파일을 받지 않습니다.
        </p>
      </Section>
      <NetworkAnalyticsSection appName={app.name} />
      <PurchaseSection />
      <ChildrenSection />
      <PrivacyContactSection />
    </PawPage>
  )
}
