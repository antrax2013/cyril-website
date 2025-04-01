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
							Initiation Géobiologie - Explorateur de l'invisible :
						</a>
					</h3>
					<h4>Module 1 - La découverte </h4>
					<ul>
						<li>25/05/2025 09h-13h à Plaisir (78)</li>
						<li>25/05/2025 14h-18h à Plaisir (78)</li>
					</ul>
					<h4>Module 2 - Les failles et les veines d’eau</h4>
					<ul>
						<li>13/04/2025 14h-18h à Plaisir (78)</li>
					</ul>
					<h4>Module 4 : Les réseaux géomagnétiques</h4>
					<ul>
						<li>06/04/2025 14h-18h à Plaisir (78)</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>
						<a
							href='/geobiologie#invisible'
							title='Cliquez sur ce lien pour découvrir plus d’informations sur l’initiation Explorateur de l’invisible'
						>
							Conférences :
						</a>
					</h3>
					<h4>Introduction à la Géobiologie</h4>
					<ul>
						<li>
							<a
								href='https://fb.me/e/2koa1WwrD'
								title='Cliquez sur ce lien pour plus d’informations sur ma conférence lors des portes ouvertes de Coffret dAlumine le 29/03 à 18h00 et 30/03 à 15h00'
								target='_blank'
							>
								29-30/03/2025 Portes ouvertes Coffret d'Alumine à Plaisir (78)
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
