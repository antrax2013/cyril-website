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
						<li>Dimanche 18 janvier de 09h00 à 12h30</li>
						<li>Dimanche 15 mars de 09h00 à 12h30</li>
					</ul>
					<h4>Module 2 - Les premières recherches </h4>
					<ul>
						<li>Dimanche 18 janvier de 14h00 à 18h30</li>
						<li>Dimanche 15 mars de 14h00 à 18h30</li>
					</ul>
					<h4>Module 3 - Les failles et les veines d’eau</h4>
					<ul>
						<li>Dimanche 22 février de 09h00 à 12h30</li>
						<li>Dimanche 19 avril de 09h00 à 12h30</li>
					</ul>
					<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
					<ul>
						<li>Dimanche 22 février de 14h00 à 18h30</li>
						<li>Dimanche 19 avril de 14h00 à 18h30</li>
					</ul>
				</div>
				<div className='event' id='événements'>
					<h3>Conférences / Salons</h3>
					<h4>Portes ouvertes</h4>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/permalink.php?story_fbid=pfbid02aT94GYPdw9ZWN5AziFGhzcs71G1KVqbAP1hUUyCnowr6Dzg6mw3HP6WZbe2ghXTFl&id=61573954084460'
								target='_blank'
								title='Cliquez ici pour en savoir plus sur les portes ouvertes.'
							>
								Coffret d'Alumine espaces bien-être
								<ul>
									<li>Samedi 13/12 à 14h00</li>
									<li>Dimanche 14/12 à 15h00</li>
									<li>Samedi 20/12 à 14h00</li>
									<li>Dimanche 21/12 à 14h00</li>
								</ul>
							</a>
						</li>
					</ul>
					<h4>Salon</h4>
					<ul>
						<li>
							{/* <a
								href='https://fb.me/e/1PYGeWXkGl'
								title='Cliquez sur ce lien pour plus d’informations sur le salon L’être au naturel à Maurepas'
								target='_blank'
							>
								23/11/2025 L'être au naturel Maurepas (78)
							</a> */}
							Pas de salon planifé à ce jour.
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
