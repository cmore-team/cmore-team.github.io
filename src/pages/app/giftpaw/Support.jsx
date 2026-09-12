import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.giftpaw

export default function GiftpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          소복담은 행사별 선물 자리를 정리하는 원화 예산 장부입니다. 쇼핑 결제·상품 추천·배송 조회 앱이 아니고, 내가 산
          선물을 직접 적는 기록입니다. 금액은 원화 정수만, 날짜는 양력 하루짜리 행사만 다루며 알림·자동 반복·음력
          변환은 없습니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          사람 수첩(연락처 권한 없이 이름만 직접 입력), 행사와 선물 자리(행사마다 예산, 자리마다 후보 여러 개와
          예상액), 후보 선택(한 자리에 하나), 구매 기록(실제 금액이 선택 예상액을 대체), 전달 표시, 합계와 예산
          비교(현재 부담·남은 예산·초과 금액, 금액 미정 자리는 개수로 표시), 마지막 변경 되돌리기, 장부 전체의 원본
          JSON 백업과 확인 후 전체 대체 복원이 모두 무료입니다.
        </p>
      </Section>
      <Section title="일회 구매로 열리는 확장 (Pro)">
        <p>
          ① 반복 행사 서식: 후보 구성을 보관해 두고 날짜를 골라 새 행사로 만들기(새 행사의 선택·구매·전달 기록은 비워짐)
          ② 연간 예산 요약: 행사 날짜의 연도로 예산 합계·현재 부담·금액 미정 자리 모아 보기 ③ 서식 CSV: 선택한 연도의
          선물 장부를 표 파일로 저장. 한 번 결제하면 계속 쓸 수 있고, 자동 갱신 구독이나 무료 체험은 없습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 산 뒤에 후보를 바꾸고 싶어요.</strong><br />구매나 전달 기록이 있는 자리는 후보 선택이 잠깁니다. 구매를 취소하면 다시 고를 수 있습니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 장부가 옮겨지나요?</strong><br />클라우드 동기화는 없습니다. 무료 원본 JSON 백업을 내보낸 뒤 새 기기에서 내용을 확인하고 전체 대체 방식으로 복원하세요.</p>
        <p><strong className="text-white">Q. 반복 행사가 자동으로 만들어지나요?</strong><br />아닙니다. 서식은 후보 구성만 보관하고, 새 행사는 날짜를 골라 직접 만듭니다.</p>
      </Section>
      <RestoreRefundSection productName="Pro 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
