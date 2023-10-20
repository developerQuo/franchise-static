/* 오프라인 서비스 신청 */

import { useRouter } from "next/router";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import NotificationContext from "../../../store/notification-context";
import Button from "../Button";
import { ApiResponseType, ContactType } from "../types";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import MarketingPolicyModal from "./MarketingPolicyModal";

const TITLE = "문의하기";

export interface IForm {
	name: string;
	phone: string;
	region: string;
	date: string;
	privacyPolicy: boolean;
	marketingPolicy: boolean;
}

export default function Form() {
	const notificationCtx = useContext(NotificationContext);
	const {
		register,
		handleSubmit,
		formState: { isValid, errors },
	} = useForm<IForm>();
	const router = useRouter();

	const onSubmit = (data: IForm) => {
		notificationCtx.showNotification({
			title: "로딩중...",
			message: "",
			status: "pending",
		});

		fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}

				return res.json().then((data: ApiResponseType) => {
					throw new Error(`${TITLE}가 실패하였습니다.`);
				});
			})
			.then((data: ApiResponseType) => {
				notificationCtx.showNotification({
					title: "성공!",
					message: "문의가 완료 되었습니다. 24시간 이내로 연락 드리겠습니다.",
					status: "success",
				});
				router.push("/");
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: "실패!",
					message: error.message,
					status: "error",
				});
			});
	};

	return (
		<form
			className="flex gap-x-6 px-[24px] md:gap-y-[92px]"
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className="flex flex-col">
				<div className="flex items-center gap-x-4">
					<div>
						<input
							type="text"
							placeholder="이름"
							className="input-bordered input w-full"
							{...register("name", { required: true })}
						/>
						{errors.name?.type === "required" && (
							<p role="alert" className="text-error">
								이름을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							placeholder="연락처"
							className="input-bordered input w-full"
							{...register("phone", { required: true })}
						/>
						{errors.phone?.type === "required" && (
							<p role="alert" className="text-error">
								연락처를 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							placeholder="창업 희망 지역"
							className="input-bordered input w-full"
							{...register("region", { required: true })}
						/>
						{errors.region?.type === "required" && (
							<p role="alert" className="text-error">
								창업 희망 지역을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							placeholder="창업 예정일"
							className="input-bordered input w-full"
							{...register("date", { required: true })}
						/>
						{errors.date?.type === "required" && (
							<p role="alert" className="text-error">
								창업 예정일을 입력하세요.
							</p>
						)}
					</div>
				</div>
				<div className="flex items-center gap-x-4 ">
					<div className="form-control">
						<div className="flex items-center">
							<label className="label cursor-pointer gap-x-3">
								<input
									type="checkbox"
									className="checkbox-primary checkbox"
									{...register("privacyPolicy", { required: true })}
								/>
								<span className="label-text text-white">
									개인정보 취급방침 동의
								</span>
							</label>
							<PrivacyPolicyModal />
						</div>
						{errors.privacyPolicy?.type === "required" && (
							<p role="alert" className="text-error">
								개인정보 취급방침에 동의해주세요.
							</p>
						)}
					</div>
					<div className="form-control">
						<div className="flex items-center">
							<label className="label cursor-pointer gap-x-3">
								<input
									type="checkbox"
									className="checkbox-primary checkbox"
									{...register("marketingPolicy", { required: true })}
								/>
								<span className="label-text text-white">마케팅 활용 동의</span>
							</label>
							<MarketingPolicyModal />
						</div>
						{errors.marketingPolicy?.type === "required" && (
							<p role="alert" className="text-error">
								마케팅 활용 방침에 동의해주세요.
							</p>
						)}
					</div>
				</div>
			</div>
			<Button className="btn-primary w-24">문의하기</Button>
		</form>
	);
}
