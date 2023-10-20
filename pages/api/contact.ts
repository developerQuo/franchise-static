import { NextApiRequest, NextApiResponse } from "next";
import { IForm } from "../../components/ui/contact_us/Form";
import { render } from "@react-email/render";
import Template, { SUBJECT } from "../../emails/Template";
import { sendEmail } from "../../lib/email";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	try {
		if (req.method === "POST") {
			const data = req.body;

			const { privacyPolicy, marketingPolicy, ...emailProps } =
				data as unknown as IForm;

			const result = await sendEmail({
				to: process.env.CONTACT_ENV || "joyoung0228@naver.com",
				subject: SUBJECT,
				html: render(Template(emailProps)),
			});

			if (!result) {
				throw new Error("Fail");
			}

			res.status(201).json({ ok: true, message: "Success" });
		}
	} catch (error) {
		res.status(400).json({ ok: false, message: "Fail" });
	}
}
