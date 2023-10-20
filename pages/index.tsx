import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Contact from "../components/ui/contact_us/Contact";
import Hero from "../components/ui/main/Hero";
import How from "../components/ui/main/How";
import Partners from "../components/ui/main/Partners";
import Portfolio from "../components/ui/main/Portfolio";
import Service from "../components/ui/main/Service";
import Target from "../components/ui/main/Target";
import System from "../components/ui/main/System";
import Benefit from "../components/ui/main/Benefit";

// TODO: add favicon
export default function HomePage(props: any) {
	const [showChild, setShowChild] = useState(false);

	// Wait until after client-side hydration to show
	useEffect(() => {
		setShowChild(true);
	}, []);

	if (!showChild) {
		// You can show some kind of placeholder UI here
		return null;
	}
	return (
		<Fragment>
			<Head>
				<title>형님짬뽕</title>
				<meta
					name="description"
					content="신선한 원료와 알려지지 않은 레시피, 소자본으로도 창업할 수 있는 프렌차이즈의 새 시대를 열다."
				/>
			</Head>
			<Hero />
			<Portfolio />
			<System />
			<Benefit />
			<Contact />
		</Fragment>
	);
}
