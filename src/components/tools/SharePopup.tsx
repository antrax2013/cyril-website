import { Button } from 'primereact/button';
import { useState } from 'react';
import CustomDialog from './CustomDialog';
import { InputText } from 'primereact/inputtext';
import '../../scss/tools/SharePopup.scss';

type SharePopupProps = {
	url: string;
	title: string;
};

const SharePopup = ({ url, title }: SharePopupProps) => {
	const encodedUrl = encodeURIComponent(url);
	const encodedTitle = encodeURIComponent(title);
	const [open, setOpen] = useState(false);

	const links = {
		whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
		telegram: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
	};

	const copyToClipboard = async (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		await navigator.clipboard.writeText(url);
		alert('Lien copié !');
		setOpen(false);
	};

	const closeDialog = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				outlined
				icon='pi pi-share-alt'
				severity='secondary'
				aria-label='Partager l’article'
				onClick={() => setOpen(true)}
			/>
			<CustomDialog visible={open} onHide={closeDialog}>
				<div className='shared-popup'>
					<p>
						<i>Partager le lien de cet article sur les réseaux sociaux</i>
					</p>
					<ul className='share-list'>
						<li>
							<a
								href={links.whatsapp}
								target='_blank'
								rel='noopener noreferrer'
							>
								<i
									className='pi pi-whatsapp'
									style={{ color: 'var(--secondary-color)' }}
								></i>{' '}
								WhatsApp
							</a>
						</li>
						<li>
							<a
								href={links.facebook}
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeDialog}
							>
								<i
									className='pi pi-facebook'
									style={{ color: 'var(--secondary-color)' }}
								></i>{' '}
								Facebook
							</a>
						</li>
						<li>
							<a
								href={links.twitter}
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeDialog}
							>
								<i
									className='pi pi-twitter'
									style={{ color: 'var(--secondary-color)' }}
								></i>{' '}
								Twitter
							</a>
						</li>
						<li>
							<a
								href={links.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeDialog}
							>
								<i
									className='pi pi-linkedin'
									style={{ color: 'var(--secondary-color)' }}
								></i>{' '}
								LinkedIn
							</a>
						</li>
						<li>
							<a
								href={links.telegram}
								target='_blank'
								rel='noopener noreferrer'
								onClick={closeDialog}
							>
								<i
									className='pi pi-telegram'
									style={{ color: 'var(--secondary-color)' }}
								></i>{' '}
								Telegram
							</a>
						</li>
					</ul>
					<div className='shared-link'>
						<label htmlFor='shared-link'>Lien à partager</label>

						<div className='p-inputgroup flex-1'>
							<Button
								icon='pi pi-copy'
								title='Copier le lien'
								outlined
								severity='secondary'
								onClick={() => copyToClipboard}
							/>
							<InputText
								value={url}
								id='shared-link'
								aria-labelledby='Lien à partager'
							/>
						</div>
					</div>
				</div>
			</CustomDialog>
		</>
	);
};

export default SharePopup;
