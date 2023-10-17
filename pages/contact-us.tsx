import Head from "next/head";
import { Fragment } from "react";
import Contact from "../components/ui/contact_us/Contact";
import Hero from "../components/ui/contact_us/Hero";

export default function ContactUsPage() {
	return (
		<Fragment>
			<Head>
				<title>형님짬뽕 | Contact us</title>
				<meta name="description" content="형님짬뽕 문의하기" />
			</Head>
			<Hero />
			<Contact />
		</Fragment>
	);
}
