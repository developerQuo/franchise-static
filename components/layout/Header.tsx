import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="navbar fixed z-10 h-[100px] justify-between overflow-hidden border-b-2 border-primary bg-white lg:container lg:p-0">
			<div className="navbar-start h-full">
				<div className="relative hidden h-full w-full lg:block">
					<Link href="/" className="absolute -bottom-8">
						<Image
							src="/images/logo/logo_text_black.png"
							alt="LogoText"
							width={240}
							height={30}
						/>
						<Image
							src="/images/logo/logo_black.png"
							alt="Logo"
							width={111}
							height={30}
							className="absolute top-1/3 right-[-2rem] -translate-y-1/3"
						/>
					</Link>
				</div>
				<div className="relative block h-full w-full lg:hidden">
					<Link href="/" className="absolute -bottom-8">
						<Image
							src="/images/logo/logo_text_black.png"
							alt="LogoText"
							width={240}
							height={30}
						/>
						<Image
							src="/images/logo/logo_black.png"
							alt="Logo"
							width={111}
							height={30}
							className="absolute top-1/3 right-[-2rem] -translate-y-1/3"
						/>
					</Link>
				</div>
			</div>
			<div className="navbar-end">
				{/* <div className="hidden lg:block">
					<Navigation />
				</div>
				<div className="dropdown-end dropdown lg:hidden">
					<label tabIndex={0} className="btn-ghost btn-circle btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h7"
							/>
						</svg>
					</label>
					<Navigation />
				</div> */}
			</div>
			<div className="flex h-full w-80 items-center justify-center gap-x-2 bg-primary">
				<Image
					width={45}
					height={45}
					src="https://img.icons8.com/ios-filled/100/phone-disconnected.png"
					alt="phone-disconnected"
				/>
				<span className="text-2xl font-bold text-white">031-332-0888</span>
			</div>
		</header>
	);
}

export default Header;
