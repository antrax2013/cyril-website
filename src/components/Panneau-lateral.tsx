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
								href='https://coffret-alumine.art/fr/'
								title='Cliquez sur ce lien pour découvrir la boutique en ligne'
								target='_blank'
							>
								En décembre porte ouvertes coffret d'Alumine
							</a>
						</li>
					</ul>
					<h4>Salon</h4>
					<ul>
						<li>
							<a
								href='https://fb.me/e/1PYGeWXkGl'
								title='Cliquez sur ce lien pour plus d’informations sur le salon L’être au naturel à Maurepas'
								target='_blank'
							>
								23/11/2025 L'être au naturel Maurepas (78)
							</a>
						</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>Sorties</h3>
					<ul>
						<li>La prochaine sortie sera au printemps 2026</li>
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
