export default function Portfolio() {
	return (
		<div className="relative flex flex-col items-center justify-center bg-[url('/images/main/success_story.png')] bg-contain bg-bottom bg-no-repeat text-center lg:h-[720px] lg:justify-start lg:pt-[120px]"></div>
	);
}

// 스크롤에 따라 움직이는 포트폴리오
// export default function Portfolio() {
// 	const gsap = useGsap();
// 	useEffect(() => {
// 		const portfolioContainer = document.querySelector(".portfolio-container");
// 		const container = document.querySelector(".portfolio");
// 		if (container) {
// 			const tl = gsap.timeline({
// 				scrollTrigger: {
// 					pin: true,
// 					scrub: 1,
// 					trigger: portfolioContainer,
// 					end: () =>
// 						container.scrollWidth - document.documentElement.clientWidth,
// 				},
// 				defaults: { ease: "none", duration: 1 },
// 			});

// 			tl.to(".parallax", { x: 300 }).to(
// 				".panel",
// 				{
// 					x: () =>
// 						-(container.scrollWidth - document.documentElement.clientWidth),
// 				},
// 				0,
// 			);
// 		}
// 	});
// 	return (
// 		<div className="portfolio-container flex h-[720px] flex-col items-center pb-[120px]">
// 			<div className="my-20 text-[60px] font-bold leading-[72.61px]">
// 				<h1>Portfolio</h1>
// 			</div>
// 			<div className="w-full flex-auto">
// 				<section
// 					role="list"
// 					className="portfolio relative flex h-2/3 w-full flex-nowrap overflow-x-hidden"
// 				>
// 					<div className="parallax" />
// 					{portfolios.map((portfolio, index) => (
// 						<PortfolioItem key={index} {...portfolio} />
// 					))}
// 				</section>
// 			</div>
// 		</div>
// 	);
// }
