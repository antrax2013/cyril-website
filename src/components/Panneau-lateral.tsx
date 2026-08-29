import { Button } from 'primereact/button';
import openInNewTab from './tools/OpenInNewTab';

const PanneauLateral = () => {
	return (
		<>
			<div className='events'>
				<h2>Prochains événements</h2>
				<div className='event' id='événements'>
					<h3>
						Initiation <em>Géobiologie</em> - Explorateur de l'invisible
					</h3>
					<h4>Module 1 - La découverte</h4>
					{/* <p>Prochaines sessions à l'automne 2026 </p> */}
					<ul>
						<li>
							⚠️ Dim. <b>11/10</b> de 09h à 12h30 - Plaisir
						</li>
					</ul>
					<h4>Module 2 - Les premières recherches </h4>
					<ul>
						<li>
							⚠️ Dim. <b>11/10</b> de 14h à 17h30 - Plaisir
						</li>
					</ul>
					<h4>Module 3 - Les failles et les veines d’eau</h4>
					<ul>
						<li>
							⚠️ <i>-- Reporté date à replanifier --</i>
						</li>
					</ul>
					<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
					<ul>
						<li>
							⚠️ <i>-- Reporté date à replanifier --</i>
						</li>
					</ul>
					<div className='ctas-container'>
						<a
							href='/contact?sujet=initiation-géobiologie'
							className='cta cta-primary'
							title='Lien pour réserver un ou plusieurs modules pour l’initiation à la Géobiologie - Explorateur de l’invisible'
						>
							Réserver
						</a>
						{'  '}
						<a
							href='/geobiologie#invisible'
							className='cta cta-secondary'
							title='En savoir plus sur l’initiation à la Géobiologie - Explorateur de l’invisible'
						>
							En savoir plus
						</a>
					</div>
				</div>
				{/* <div className='event' id='événements'>
					<h3>Conférences</h3>
					{/* <h4>Portes ouvertes</h4>
					<ul>
						<li>
							<i>Dim. 14/06</i> - Espace Vibration & Libellule à Plaisir - 78
						</li>
					</ul> * /}
					<h4>Changer la monnaie pour changer notre rapport au monde</h4>
					<ul>
						<li>
							<i>
								Dim. 14/06 à 14h30 - Espace Vibration & Libellule à Plaisir - 78
							</i>
						</li>
					</ul>
					<h4>Introduction à la Géobiologie</h4>
					<ul>
						<li>
							<i>
								Dim. 14/06 à 15h30 - Espace Vibration & Libellule à Plaisir - 78
							</i>
						</li>
					</ul>
					<div className='ctas-container'>
						<a
							href='/actualites#conférences'
							className='cta cta-secondary'
							title='En savoir plus sur les sorties en nature'
						>
							En savoir plus
						</a>
					</div> */}
				{/* <h4>Portes ouvertes</h4>
					<ul>
						<li>
							<a
								href='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid09V9H9QgejdRqpwbsrhiqetJiikoiXv3uAUcB1os9sq5mzoa7yQbWWec2cLMdzC8Gl%26id%3D61570202349589'
								target='_blank'
								title='Cliquez ici pour en savoir plus sur les portes ouvertes.'
							>
								Cabinet Blowball Dim. 25/01
								<ul>
									<li>
										portes ouvertes de <i>09h30 à 13h</i>
									</li>
									<li>
										conf. Géobio de <i>10h à 11h</i>
									</li>
								</ul>
							</a>
							<i>
								<a
									href='https://www.billetweb.fr/porte-ouverte-cabinet-blowball-25-janvier-2026'
									target='_blank'
								>
									Inscription gratuite mais obligatoire
								</a>
							</i>
						</li>
					</ul>*/}
				{/* <h4>Salon</h4>
					<ul>
						<li>
							<a
								href='https://lafabriquedesevenements.fr/les-sens-en-eveil-salon-bien-etre/'
								title='Cliquez sur ce lien pour plus d’informations sur le salon les Sens En Eveil à Guyancourt'
								target='_blank'
							>
								12/04 - les Sens En Eveil – 4ème édition Montigny (78)
							</a>
							{/* Pas de salon planifé à ce jour. * /}
						</li>
					</ul>
				</div> */}
				<div className='event' id='événements'>
					<h3>Conférences</h3>
					<h4>Conférence monnaie libre</h4>
					<ul>
						<li>Dim. 30/08 14h30-15h30 - Pontchartrain (78)</li>
					</ul>
					<div className='ctas-container'>
						<a
							href='https://is.gd/june78'
							className='cta cta-primary'
							title='Lien pour réserver un ou plusieurs modules pour l’initiation à la Géobiologie - Explorateur de l’invisible'
							target='_blank'
							rel='noopener noreferrer'
						>
							Réserver
						</a>{' '}
						<a
							href='https://forum.monnaie-libre.fr/t/78-jouars-pontchartrain-gmarche-dimanche-30-aout-2026/34008'
							className='cta cta-secondary'
							title='En savoir plus sur le Ğmarché de Jouars-Pontchartrain - Dimanche 30 août 2026'
							target='_blank'
							rel='noopener noreferrer'
						>
							En savoir plus
						</a>
					</div>
					<h3>Sorties en nature</h3>
					<h4>Sortie Géobio. Fontaine St-Martin</h4>
					<ul>
						<li>Dim. 18/10 09h-12h30 - Jouars (78)</li>
					</ul>
					<div className='ctas-container'>
						<a
							href='/contact?sujet=sortie-géobiologie'
							className='cta cta-primary'
							title='Lien pour réserver'
						>
							Réserver
						</a>
					</div>
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
