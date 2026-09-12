import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.packpaw

export default function PackpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          챙그리는 여행마다 필요한 수량, 준비한 수량, 남은 짐을 세는 짐 목록 앱입니다. 숫자를 올리면 가방에 담은 만큼
          기록되고, 남은 수량이 0이 되면 떠날 준비가 끝납니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          여행과 짐 항목은 개수 제한 없이 만들 수 있습니다. 필요 수량은 1~999개, 준비 수량은 필요 수량 안에서
          기록합니다. 한국어 기본 팩 두 가지(가벼운 2박, 국경 너머)로 바로 시작할 수 있고, 내 여행을 사용자 템플릿
          1개로 보관하며 기본 팩이나 저장한 템플릿으로 새 여행 만들기도 무료입니다. 여행을 복제하면 준비 수량은 0부터
          다시 세고 원본과 템플릿은 그대로 남습니다. 마지막 변경 취소로 직전 저장 상태를 한 번 되돌릴 수 있습니다.
        </p>
      </Section>
      <Section title="한 번 결제, 전체 해제">
        <p>
          ① 두 번째부터의 사용자 템플릿 보관 ② 내 방식의 맞춤 분류 추가 ③ 여러 팩을 한 여행에 조합 ④ 준비한 수량과
          남은 짐을 담은 가방 요약 텍스트 확인·복사. 자동 갱신되지 않는 일회성 구매이며 무료 체험은 없습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 무료 템플릿 하나를 지우면 새로 저장할 수 있나요?</strong><br />무료 한도는 보관 중인 사용자 템플릿 1개 기준입니다. 템플릿이 이미 있을 때 추가 보관하려면 확장 구매가 필요합니다.</p>
        <p><strong className="text-white">Q. 여행을 복제하면 원본이 바뀌나요?</strong><br />아닙니다. 복제본은 준비 수량 0부터 새로 세는 별도 여행이고, 원본 여행과 템플릿은 바뀌지 않습니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 목록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 목록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="전체 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
