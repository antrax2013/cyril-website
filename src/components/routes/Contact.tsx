import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputMask } from 'primereact/inputmask';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useFormik } from 'formik';
import { useRef, useState } from 'react';
import '../../scss/routes/Contact.scss';
import { Email, IMail } from '../../modules/email';
import { Dropdown } from 'primereact/dropdown';
import { Toast } from 'primereact/toast';
import MetaTag from '../tools/MetaTag';

interface iError {
	nom?: string;
	email?: string;
	prenom?: string;
	telephone?: string;
	message?: string;
	sujet?: string;
}

const Contact = () => {
	const [enableSendButton, setEnableSendButton] = useState(true);
	const toast = useRef<Toast>(null);

	const sujets = [
		// { label: 'Prise de rendez-vous', value: 'Prise de rendez-vous' },
		// { label: 'Informations de suivi', value: 'Informations de suivi' },
		{ label: 'Demande de renseignements', value: 'Demande de renseignements' },
		{
			label: 'Inscription Initiaition Géobio.',
			value: 'Inscription Initiaition Géobio.',
		},
	];

	const formik = useFormik({
		initialValues: {
			nom: '',
			email: '',
			prenom: '',
			telephone: '',
			message: '',
			sujet: sujets[0].value,
		},
		validate: (data) => {
			const errors: iError = {};

			if (data.nom.length === 0) {
				errors.nom = 'Votre nom est obligatoire.';
			}

			if (data.prenom.length === 0) {
				errors.prenom = 'Votre prénom est obligatoire.';
			}

			if (data.message.length === 0) {
				errors.message = 'Votre message est vide.';
			}

			if (data.email.length === 0) {
				errors.email = 'Votre email est obligatoire.';
			} else if (
				!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
			) {
				errors.email = "Votre adresse email n'est pas valide.";
			}

			return errors;
		},
		onSubmit: () => {
			const message: IMail = {
				from_email: formik.values.email,
				to_name: formik.values.nom + ' ' + formik.values.prenom,
				message: formik.values.message,
				subject: formik.values.sujet ?? '',
				tel: formik.values.telephone,
			};

			Email.sendEmail(message)
				.then(() => {
					formik.resetForm();
					if (toast.current) {
						toast.current.show({
							severity: 'success',
							summary: "Envoi d'email",
							detail: 'Votre email a été envoyé avec succès',
							life: 3000,
						});
					}
					//anti flood
					setEnableSendButton(false);
					setTimeout(() => setEnableSendButton(true), 10000);
				})
				.catch((error: Error) => {
					if (toast.current) {
						toast.current.show({
							severity: 'error',
							summary: "Envoi d'email",
							detail: "Une erreur est survenue lors de l'envoi de votre email",
							life: 13000,
						});
					}
					console.error(error);
				});
		},
	});

	const isFormFieldValid = (name: string) =>
		!!(Reflect.get(formik.touched, name) && Reflect.get(formik.errors, name));

	const getFormErrorMessage = (name: string) => {
		return (
			isFormFieldValid(name) && (
				<small className='p-error'>{Reflect.get(formik.errors, name)}</small>
			)
		);
	};

	const head = () => {
		return (
			<MetaTag
				title='Contact'
				description='A travers mes différents accompagnements, soins et initiations, je suis à vos côtés pour vous guider sur votre chemin de vie.'
				resume='Restons en contact.'
			/>
		);
	};

	return (
		<>
			{head()}
			<article className='contact'>
				<h1>Contact</h1>
				<Toast ref={toast} />
				<section className='paragraphe-1'>
					<section className='paragraphe-content'>
						<p>
							Vous avez des questions sur mes différents accompagnements et
							initiations, vous voulez partager avec moi vos retours, vous
							pouvez me contacter par email en utilisant le formulaire
							ci-dessous.
						</p>
					</section>
				</section>
				<form onSubmit={formik.handleSubmit}>
					<div className='field'>
						<label htmlFor='nom'>
							Nom <span className='asterix'>*</span>
						</label>
						<InputText
							id='nom'
							name='nom'
							value={formik.values.nom}
							onChange={formik.handleChange}
							className={classNames({ 'p-invalid': isFormFieldValid('nom') })}
						/>
						{getFormErrorMessage('nom')}
					</div>
					<div className='field'>
						<label htmlFor='prenom'>
							Prénom <span className='asterix'>*</span>
						</label>
						<InputText
							id='prenom'
							name='prenom'
							value={formik.values.prenom}
							onChange={formik.handleChange}
							className={classNames({
								'p-invalid': isFormFieldValid('prenom'),
							})}
						/>
						{getFormErrorMessage('prenom')}
					</div>
					<div className='field'>
						<label htmlFor='telephone'>Téléphone</label>
						<InputMask
							id='telephone'
							name='telephone'
							value={formik.values.telephone}
							onChange={formik.handleChange}
							mask='99.99.99.99.99'
						></InputMask>
						{getFormErrorMessage('telephone')}
					</div>
					<div className='field'>
						<label htmlFor='email'>
							Email <span className='asterix'>*</span>
						</label>
						<InputText
							id='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							className={classNames({ 'p-invalid': isFormFieldValid('email') })}
						/>
						{getFormErrorMessage('email')}
					</div>
					<div className='field'>
						<label htmlFor='sujet'>
							Sujet <span className='asterix'>*</span>
						</label>
						<Dropdown
							id='sujet'
							name='sujet'
							value={formik.values.sujet}
							onChange={formik.handleChange}
							options={sujets}
						/>
						<br />
						<label htmlFor='message'>
							Message <span className='asterix'>*</span>
						</label>
						<InputTextarea
							id='message'
							rows={5}
							cols={30}
							value={formik.values.message}
							onChange={formik.handleChange}
							className={classNames({
								'p-invalid': isFormFieldValid('message'),
							})}
						/>
						{getFormErrorMessage('message')}
					</div>
					<div className='form-footer'>
						<Button
							type='submit'
							label='Envoyer'
							disabled={!enableSendButton}
						/>
					</div>
				</form>
			</article>
		</>
	);
};

export default Contact;
