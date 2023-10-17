import Navigation from "./Navigation";
import Link from "next/link";
import Image from "next/image";

function Header() {
	return (
		<header className="navbar fixed z-10 h-[100px] justify-between border-b-2 border-primary bg-white lg:container lg:p-0">
			<div className="navbar-start">
				<div className="hidden lg:block">
					<Link
						href="/"
						className="relative flex items-baseline gap-x-3 text-2xl font-bold"
					>
						<Image
							src="/images/logo/logo_text_black.png"
							alt="LogoText"
							width={111}
							height={30}
						/>
						<Image
							src="/images/logo/logo_black.png"
							alt="Logo"
							width={111}
							height={30}
							className="absolute left-16"
						/>
					</Link>
				</div>
				<div className="block lg:hidden">
					<Link
						href="/"
						className="relative flex items-baseline gap-x-3 text-base font-bold"
					>
						<Image
							src="/images/logo/logo_text_black.png"
							alt="LogoText"
							width={60.5}
							height={15}
						/>
						<Image
							src="/images/logo/logo_black.png"
							alt="Logo"
							width={60.5}
							height={15}
							className="absolute left-8"
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
			<div className="flex h-full w-56 items-center justify-center bg-primary">
				<Image
					src="/images/call.png"
					alt="Call"
					width={45}
					height={30}
					style={{ color: "#000000", borderColor: "#000000" }}
				/>
				<span className="text-2xl font-bold text-white">1588-8282</span>
			</div>
		</header>
	);
}

export default Header;
