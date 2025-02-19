import { Button } from 'primereact/button';
import openInNewTab from './tools/OpenInNewTab';

const PanneauLateral = () => {
	return (
		<>
			<div className='events'>
				<h2>Prochains événements</h2>
				<div className='event' id='événements'>
					<h3>
						<a
							href='/geobiologie#invisible'
							title='Cliquez sur ce lien pour découvrir plus d’informations sur l’initiation Explorateur de l’invisible'
						>
							Initiation Géobiologie - Explorateur de l'invisible - Module 1
						</a>
					</h3>
					<ul>
						<li>
							<a
								href='https://fb.me/e/2PrxuDo1O'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur la session du 09/03/2025 du Module 1 : La découverte.'
								target='_blank'
							>
								09/03/2025 09h-13h
							</a>
						</li>
						<li>18/05/2025 09h-13h</li>
						<li>18/05/2025 14h-18h</li>
					</ul>
					<h3>
						<a
							href='/geobiologie#invisible'
							title='Cliquez sur ce lien pour découvrir plus d’informations sur l’initiation Explorateur de l’invisible'
						>
							Conférence - Introduction à la Géobiologie
						</a>
					</h3>
					<ul>
						<li>
							<a
								href='https://salon-art-bien-etre.fr/2019/12/05/samedi-8-fevrier/'
								title='Cliquez sur ce lien pour vous inscrire ou découvrir plus d’informations sur ma conférence le 08/02/2025 à 12h00 lors du salon Art & Bien-être 2025'
								target='_blank'
							>
								08/02/2025 12h - Salon Art & Bien-être 2025
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id='events'>
				<p className='social-networks'>
					<Button
						className='facebook p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLFB || '');
						}}
					>
						<i className='pi pi-facebook px-2'></i>
						<span className='facebook'>Facebook&nbsp;</span>
					</Button>
					<Button
						className='whatsapp p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLWhatsApp || '');
						}}
					>
						<i className='pi pi-whatsapp px-2'></i>
						<span className='WhatsApp'>WhatsApp</span>
					</Button>{' '}
					<Button
						className='instagram p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLInsta || '');
						}}
					>
						<i className='pi pi-instagram px-2'></i>
						<span className='Instagram'>Instagram</span>
					</Button>{' '}
				</p>
			</div>
			<div
				className='lateral-section-siret'
				itemScope
				itemType='https://schema.org/Organization'
			>
				<meta itemProp='iso6523Code' content='0009:93380473400012' />
				<i className='siret'>N°Siret : 933 804 734 00012</i>
			</div>
		</>
	);
};

export default PanneauLateral;
