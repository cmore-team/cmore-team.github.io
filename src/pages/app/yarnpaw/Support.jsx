import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.yarnpaw

export default function YarnpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          단소미는 뜨개 작품의 전체 단수와 반복 위치를 함께 남기는 기록장입니다. 반복 블록(1~100단)을 적어 두면 지금
          몇 번째 반복의 몇 단인지, 다음에 뜰 단이 무엇인지 보여줍니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          작품 하나의 단수 기록은 첫 단부터 마지막 단까지 제한이 없습니다. 한 단 완료 버튼과 마지막 전진 취소, 이미 뜬
          단수를 입력하고 이어서 시작하기, 마친 작품을 0단부터 다시 사용하기(반복 블록은 그대로 유지)가 모두
          무료입니다. 전진과 취소는 바로 저장되어 앱을 다시 실행해도 그대로입니다.
        </p>
      </Section>
      <Section title="일회 구매 확장">
        <p>
          ① 여러 작품 동시 진행(작품마다 단수와 취소 기록을 따로 보관) ② 코 늘림·무늬를 따로 세는 독립 보조 카운터 ③
          반복 블록을 서식으로 보관하고 다른 작품에 적용 ④ 반복 서식과 진행 상황을 글로 출력해 공유. 자동 갱신도 무료
          체험도 없는 비갱신 일회 구매이며, 결제하지 않아도 한 작품의 기록은 계속 무료입니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 두 번째 작품을 시작하려면 꼭 결제해야 하나요?</strong><br />동시에 진행하는 두 번째 작품부터 확장 구매가 필요합니다. 마친 작품을 0단부터 다시 사용하는 것은 무료입니다.</p>
        <p><strong className="text-white">Q. 실수로 단수를 올렸어요.</strong><br />마지막 전진 취소를 누르면 직전 단수로 되돌아갑니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="확장 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
