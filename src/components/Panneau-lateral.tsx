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
							Initiation <em>Géobiologie</em> - Explorateur de l'invisible
						</a>
					</h3>
					<h4>Module 1 - La découverte </h4>
					<ul>
						<li>En septembre...</li>
					</ul>
					<h4>Module 2 - Les premières recherches </h4>
					<ul>
						<li>07/06/2025 14h-18h à Plaisir (78)</li>
					</ul>
					<h4>Module 3 - Les failles et les veines d’eau</h4>
					<ul>
						<li>01/06/2025 9h30-13h à Plaisir (78)</li>
					</ul>
					<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
					<ul>
						<li>(29?)/06/2025 14h-18h à Plaisir (78)</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>Conférences / Salons</h3>
					<h4>Salon Les Sens en Éveil</h4>
					<ul>
						<li>
							25/05/2025 14h-18h à Plaisir (78)
							<a
								href='https://fb.me/e/3aKRIyi8x'
								title='Cliquez sur ce lien pour plus d’informations sur le salon Les Sens en Éveil.'
							>
								18/05/2025 à la Ferme du Manet à Montigny-le-Bretonneux (78)
							</a>
						</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>Sorties</h3>
					<ul>
						<li>
							<a
								href='/geologie/les-cupules'
								title='Cliquez sur ce lien pour plus d’informations sur le cupules.'
								target='_blank'
							>
								22/06/2025 à Poigny-la-Forêt(78) - Sortie Cupules
								<br />
								<i>départ à 9h00 de Maurepas - réservation me contacter</i>
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
