import Modal from "../modal/Modal";
import ModalTriggerButton from "../modal/ModalTriggerButton";

export default function PrivacyPolicyModal() {
	return (
		<>
			<Modal title="개인정보 취급방침" modalId="privacyPolicyModal">
				<p>
					작성하신 실명과 전화번호는 개인정보 보호법 제 15조 및 22조에 의거,
					상담접수 및 서비스제공 용도로만 사용되며 랜딩접수가 진행되는기간
					동안만 보관하게 됩니다.
				</p>
				<p>
					수집 개인정보는 이름 및 휴대전화 번호이며 랜딩접수 및 서비스제공의
					목적으로만 사용됩니다.
				</p>
				<br />
				<p>- 개인정보 수집, 이용 목적 : 랜딩접수 및 서비스제공</p>
				<p>- 수집하려는 개인정보 항목 : 이름, 휴대폰 번호</p>
				<p>
					- 개인정보의 보유 및 이용기간 : 랜딩페이지 사용 종료 후 , 서비스 안내
					일주일 후 파기
				</p>
			</Modal>
			<ModalTriggerButton
				className="btn-link btn-xs h-6 w-16 p-0"
				modalId="privacyPolicyModal"
			>
				[전문보기]
			</ModalTriggerButton>
		</>
	);
}
