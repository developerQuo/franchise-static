import Modal from "../modal/Modal";
import ModalTriggerButton from "../modal/ModalTriggerButton";

export default function MarketingPolicyModal() {
	return (
		<>
			<Modal title="마케팅 활용 방침" modalId="marketingPolicyModal">
				<p>
					각종 창업정보, 할인혜택 등의 내용을 입력하신 휴대전화 번호로
					전달드립니다.
				</p>
				<p>미동의 시 다양한 창업정보를 받으실 수 없습니다.</p>
			</Modal>
			<ModalTriggerButton
				className="btn-link btn-xs h-6 w-16 p-0"
				modalId="marketingPolicyModal"
			>
				[전문보기]
			</ModalTriggerButton>
		</>
	);
}
