import Image from "next/image";

function Footer() {
	return (
		<footer className="mt-auto flex h-[200px] w-full flex-col gap-y-6 bg-black pt-10 pl-8 text-xs text-text-secondary lg:mb-36 lg:pb-56">
			<div className="flex flex-col gap-y-2.5">
				<div className="relative flex max-w-max">
					<Image
						src="/images/logo/logo_text_white.png"
						alt="Logo"
						width={150}
						height={59}
						priority
					/>
					<Image
						src="/images/logo/logo_white.png"
						alt="Logo"
						width={64}
						height={64}
						priority
						className="absolute top-1/3 right-[-1rem] -translate-y-1/3"
					/>
				</div>
				<div className="flex flex-col gap-y-2.5">
					<p>
						<span>
							주식회사 형님짬뽕 | 대표 송인규 | {"joyoung0228@naver.com"}
						</span>
					</p>
					<p>
						<span>
							주소: 경기도 용인시 처인구 양지면 남평로 32, 가동 1층 일부호
						</span>
					</p>
					<p>
						<span>사업자등록번호: 386-81-01426</span>
					</p>
				</div>
			</div>
			<div className="">
				<span>Copyright © 2023 형님짬뽕 All Rights Reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
