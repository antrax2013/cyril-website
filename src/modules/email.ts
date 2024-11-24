import emailjs, { init } from '@emailjs/browser';

export interface IMail {
	from_email: string;
	to_name: string;
	message: string;
	subject: string;
	tel: string;
}

export class Email {
	public static sendEmail = async (email: IMail) => {
		const userId: string = import.meta.env.VITE_USER_MAIL_ID;
		init(userId);
		return emailjs.send(
			import.meta.env.VITE_SERVICE_MAIL_ID,
			import.meta.env.VITE_TEMPLATE_MAIL_ID,
			{
				from_name: email.to_name,
				to_name: email.to_name,
				message: email.message,
				reply_to: email.from_email,
				subject: email.subject,
				telephone: email.tel,
			},
			userId
		);
	};
}
