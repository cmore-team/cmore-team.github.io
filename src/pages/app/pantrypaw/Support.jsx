import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.pantrypaw

export default function PantrypawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          날담이는 식재료의 라벨 날짜와 '내가 확인할 날'을 나누어 적는 로컬 장부입니다. 포장에 적힌 소비기한·유통기한은
          그대로 두고 실제로 열어 볼 날짜를 따로 잡습니다. 날담이는 식품의 안전이나 섭취 가능 여부를 판단하지 않으며,
          그 판단은 언제나 사용자의 몫입니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          현재 재고 기록은 품목 수 제한이 없습니다. 냉장·냉동·실온 세 구역, 라벨 종류(소비기한/유통기한/직접 정한 확인
          날짜), 확인 미루기, 사용 완료·버림 기록, 마지막 기록 취소, 기본 이력이 모두 무료입니다. 라벨 날짜를 못
          찾았다면 비워 두고 담아도 됩니다.
        </p>
        <p>
          확인일 오전 9시 알림도 무료로 켜고 끌 수 있습니다. 알림은 가까운 확인일 순으로 최대 60개까지 기기에서
          예약됩니다.
        </p>
      </Section>
      <Section title="일회 구매 확장">
        <p>한 번 결제하면 네 가지가 계속 열립니다. 구독이 아니고 무료 체험도 없습니다.</p>
        <p>
          ① 기간을 골라 사용·버림 기록 요약 ② 냉장·냉동·실온 구역 필터(전체 재고 보기는 언제나 무료) ③ 새 품목의 맞춤
          확인 알림 리드타임(라벨 0~14일 전, 기존 품목의 날짜는 바꾸지 않음) ④ 라벨과 확인일을 나란히 담은 UTF-8 서식
          CSV 내보내기.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 알림이 오지 않아요.</strong><br />iOS 설정에서 날담이의 알림 권한이 켜져 있는지 확인하세요. 알림은 확인일 오전 9시에 기기에서 울리는 로컬 알림이며, 가까운 확인일 순으로 최대 60개까지만 예약됩니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
        <p><strong className="text-white">Q. 라벨 날짜가 지나면 앱이 알아서 처리하나요?</strong><br />아닙니다. 확인을 미뤄도 라벨 날짜는 바뀌지 않고, 사용·버림 처리는 항상 사용자가 직접 기록합니다.</p>
      </Section>
      <RestoreRefundSection productName="확장 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
