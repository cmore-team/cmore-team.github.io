import PawPage, { Section, RestoreRefundSection, SupportContactSection } from '../paws/PawPage'
import { pawApps } from '../paws/pawApps'

const app = pawApps.bookpaw

export default function BookpawSupport() {
  return (
    <PawPage app={app} kind="support">
      <Section title="앱 소개">
        <p>
          갈피잠은 읽던 위치와 날짜별 독서 세션을 손으로 잇는 독서 장부입니다. 전자책 뷰어나 책 콘텐츠 서비스가
          아니며, 책을 공급하거나 다른 앱과 자동 연동하지 않습니다. 현재 위치는 입력 순서가 아니라 독서 날짜가 가장
          늦은 세션의 끝 쪽으로 계산하고, 노력은 세션의 끝에서 시작을 뺀 쪽수의 합계입니다.
        </p>
      </Section>
      <Section title="무료 기능">
        <p>
          동시에 읽는 책 3권까지의 모든 기록이 무료이고, 완독·보관 이력은 권수 제한이 없습니다. 세션마다
          날짜(YYYY-MM-DD)와 시작·끝 쪽수, 메모를 남기고, 잘못 적은 세션은 고치거나 지우고 마지막 변경을 되돌릴 수
          있습니다. 책과 세션 전체를 원본 JSON 파일로 내보내고 미리보기 후 복원하는 백업도 무료입니다.
        </p>
      </Section>
      <Section title="책장 확장 (1회 구매)">
        <p>
          ① 네 번째 동시 진행 책부터 권수 제한 해제 ② 선택한 기간의 책 사이 노력·세션 요약 ③ 날짜·쪽수·메모를 모은
          서식 묶음의 텍스트 파일 내보내기. 자동 갱신 없는 1회 구매이며 무료 체험은 없습니다.
        </p>
      </Section>
      <Section title="자주 묻는 질문">
        <p><strong className="text-white">Q. 기기를 바꾸면 기록이 옮겨지나요?</strong><br />클라우드 동기화는 없습니다. 설정에서 원본 JSON 백업 파일을 내보낸 뒤 새 기기에서 미리보기 후 복원하세요. 이 백업 기능은 무료입니다.</p>
        <p><strong className="text-white">Q. 완독한 책이 많아지면 무료 한도에 걸리나요?</strong><br />아닙니다. 무료 한도는 '읽는 중' 상태의 동시 진행 3권에만 적용되고, 완독·보관 책은 제한이 없습니다. 보관한 책을 다시 '읽는 중'으로 돌릴 때도 같은 한도를 확인합니다.</p>
        <p><strong className="text-white">Q. 다시 읽은 책의 노력은 어떻게 계산되나요?</strong><br />재독도 별도 세션으로 남기면 쪽수가 다시 더해집니다.</p>
      </Section>
      <RestoreRefundSection productName="책장 확장" />
      <SupportContactSection />
    </PawPage>
  )
}
