import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.focuspaw

export default function FocuspawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          이음숨은 멈춘 일을 이어가는 집중 타이머입니다. 중단을 실패로 만들지 않고 돌아올 자리를 남겨 둡니다. 다른 앱을
          차단하거나 앱 전환을 실패로 판정하지 않으며, 직접 저장한 중단만 셉니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          1~180분 사이에서 세션을 시작하고, 시작할 때 '다음 행동 한 줄'을 적습니다. 멈출 때는 이유(다른 일, 휴식, 막힘,
          그 밖)를 고르고 메모를 남기며, 이어가기·남은 시간 줄이기·여기서 종료를 자유롭게 선택합니다. 종료하면 실제
          실행한 시간만 기록됩니다. 오늘 완료한 세션과 중단 기록을 한 화면에서 확인합니다.
        </p>
        <p>
          앱이 강제로 닫혔다가 다시 열리면 닫혀 있던 시간을 집중량으로 단정하지 않고, 직접 확인한 뒤에만 반영합니다.
        </p>
      </Section>
      <Section title="한 번 구매로 열리는 확장">
        <p>
          ① 자주 쓰는 길이와 다음 행동의 프리셋 저장 ② 고른 기간의 중단 횟수와 이유를 함께 돌아보는 기간별 분석 ③ 실행
          시간과 중단 기록의 CSV 내보내기(저장 위치 직접 선택). 일회 구매 하나로 모두 열리고, 무료 체험이나 반복 결제는
          없습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 잠깐 다른 앱을 보면 세션이 실패하나요?</strong><br />아닙니다. 앱 전환과 화면 잠금은 중단으로 세지 않습니다. 직접 저장한 중단만 기록에 남습니다.</p>
        <p><strong className="text-white">Q. 앱이 강제 종료됐어요. 기록은요?</strong><br />다시 열면 복구 확인 화면이 나옵니다. 닫혀 있던 시간을 자동으로 더하지 않고, 확인한 내용만 반영합니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="확장 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
