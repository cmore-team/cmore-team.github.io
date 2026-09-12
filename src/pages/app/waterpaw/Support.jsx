import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.waterpaw

export default function WaterpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          물도리는 내 컵의 실제 용량으로 남기는 물 기록장입니다. 컵을 톡 누르면 그 양이 바로 기록되고, 컵을 고쳐도 지난
          기록은 바뀌지 않습니다. 하루 목표는 내 기준일 뿐, 필요한 음용량을 처방하지 않습니다. 의료 조언이나 건강
          개선을 약속하지 않는 기록 도구입니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          기본 컵 3개(유리컵 330mL, 큰 물병 1000mL, 작은 찻잔 150mL)가 준비되어 있고, 컵의 이름과 양은 자유롭게 고칠 수
          있습니다. 컵 없이 임의 양(mL) 직접 입력, 기록의 양·날짜 정정과 취소·취소 되돌리기, 하루 합계와 목표가 모두
          무료입니다. 날짜는 처음 사용한 시간대의 자정 기준으로 나눠 여행 중에도 지난 합계가 흔들리지 않습니다. 알림
          끄기는 언제나 무료입니다.
        </p>
      </Section>
      <Section title="한 번 구매로 열리는 확장">
        <p>
          ① 네 번째부터 컵 추가 보관 ② 매일 원하는 시각(최대 24개)의 기기 알림 시간표 ③ 물 기록 CSV 파일 저장 ④
          동글동글 거품 외형. 구독이 아니며 한 번 결제하면 계속 쓸 수 있습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 알림이 오지 않아요.</strong><br />iOS 설정에서 물도리의 알림 권한을 확인하세요. 알림은 기기에서 반복 예약되는 로컬 알림이며, 알림 시간표를 만들려면 확장 구매가 필요합니다(끄기는 무료).</p>
        <p><strong className="text-white">Q. 컵 용량을 바꾸면 지난 기록도 바뀌나요?</strong><br />아닙니다. 기록은 남긴 시점의 양을 그대로 보관하고, 잘못된 기록은 개별로 정정하거나 취소합니다.</p>
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />계정과 클라우드 동기화가 없어 앱이 스스로 기록을 옮기지 않습니다. iOS 기기 백업에서 복원하면 다른 앱 데이터와 함께 복원될 수 있습니다.</p>
      </Section>
      <RestoreRefundSection productName="확장 잠금 해제" />
      <SupportContactSection />
    </PawPage>
  )
}
