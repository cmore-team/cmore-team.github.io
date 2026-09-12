import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.plantpaw

export default function PlantpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          잎새봄은 물을 준 날과 살펴만 본 날을 구분해 남기는 식물 이력장입니다. 관수 정답이나 건강 진단을 알려주지
          않으며, 점검 간격과 다음 점검일은 언제나 사용자가 직접 정합니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          화분 3개까지 등록하고 계속 돌볼 수 있습니다. 물줌·살펴봄·점검 미룸을 관찰 메모와 함께 기록하고, 화분마다 점검
          간격을 1~365일 사이에서 지정합니다. 잘못 남긴 기록의 정정과 취소, 마지막 변경 되돌리기, 모든 화분의 전체 이력
          보존이 무료입니다.
        </p>
      </Section>
      <Section title="정원 확장 (일회 구매)">
        <p>
          네 번째 화분부터 개수 제한 없이 추가, 창가·베란다처럼 화분을 그룹으로 정리, 고른 기간의 관찰과 이력을 CSV로
          출력. 한 번 결제하면 계속 쓸 수 있고 구독이나 무료 체험이 아닙니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 무료로 등록한 화분 3개는 결제 없이 계속 쓸 수 있나요?</strong><br />네. 무료 한도는 새 화분 추가에만 적용되고, 이미 등록한 화분은 기록·정정·이력 모두 계속 쓸 수 있습니다.</p>
        <p><strong className="text-white">Q. 물 줄 시간을 알림으로 알려주나요?</strong><br />아닙니다. 잎새봄은 알림을 보내지 않는 기록 도구입니다. 다음 점검일은 앱 안에서 확인합니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="정원 확장" />
      <SupportContactSection />
    </PawPage>
  )
}
