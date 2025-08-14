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
						<li>Dimanche 19 octobre de 09h00 à 12h30</li>
					</ul>
					<h4>Module 2 - Les premières recherches </h4>
					<ul>
						<li>Dimanche 19 octobre de 14h00 à 18h00</li>
					</ul>
					<h4>Module 3 - Les failles et les veines d’eau</h4>
					<ul>
						<li>Dimanche 16 novembre de 09h00 à 12h30</li>
					</ul>
					<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
					<ul>
						<li>Dimanche 16 novembre de 14h00 à 18h00</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>Conférences / Salons</h3>
					<h4>Portes ouvertes</h4>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/photo/?fbid=1356852189776823&set=a.402294491899269'
								title='Cliquez sur ce lien pour plus d’informations'
							>
								07/07/2025 au cabinet de Blowball Guyancourt (78) à 10h30 puis à
								12h00
							</a>
						</li>
					</ul>
					<h4>Salon</h4>
					<ul>
						<li>23/11/2025 L'être au naturel Maurepas (78)</li>
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
