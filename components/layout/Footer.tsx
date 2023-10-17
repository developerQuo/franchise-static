import Image from "next/image";

function Footer() {
	return (
		<footer className="mt-auto flex h-[200px] w-full flex-col gap-y-6 bg-black py-10 pl-8 md:mb-0e">
			<div className="flex flex-col gap-y-2.5">
				{/* <Image
					src="/images/logo/.png"
					alt="Logo"
					width={59}
					height={59}
					priority
				/> */}
				<div className="flex flex-col gap-y-2.5 text-2xs text-text-secondary">
					<p>
						<span>대표 송인규 | ingyu225@naver.com</span>
					</p>
					<p>
						<span>
							주소: 경기도 용인시 처인구 양지면 남평로 32, 가동 1층 일부호
						</span>
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 text-2xs font-semibold text-text-light-primary"></div>
			<div className="text-3xs text-text-secondary">
				<span>Copyright © 2023 정식미가 All Rights Reserved.</span>
			</div>
		</footer>
	);
}

export default Footer;
