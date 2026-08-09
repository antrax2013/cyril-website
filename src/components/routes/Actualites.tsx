import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Actualites.scss';
import SharePopup from '../tools/SharePopup';
import { JsonLdEvents } from '../fragments/ActuJsonLd';

const Actualites = () => {
	return (
		<>
			<JsonLdEvents />
			<div className='actualites'>
				<div className='article'>
					<h1>
						Actualités & Agenda : Géobiologie et Monnaie Libre (Ğ1) dans les
						Yvelines (78)
					</h1>
					<section className='icon-panel'>
						<SharePopup url={window.location.href} title='Les actualités' />
					</section>
					<p>
						Découvrez mes prochaines initiations, ateliers, conférences et
						sorties terrain en géobiologie, ainsi que nos rencontres et Ğmarchés
						autour de la monnaie libre (Ğ1 / June) dans les Yvelines.
					</p>
					<p>
						Ces événements sont destinés aux débutants, comme aux initiés,
						souhaitant explorer l'autonomie et les énergies sous toutes leurs
						formes. Que ce soit pour comprendre la géobiologie (
						<b>réseaux géomagnétiques</b>, <b>failles</b>, <b>veines d'eau</b>,{' '}
						<b>cheminées cosmo-telluriques</b>) ou pour pratiquer la monnaie
						libre Ğ1 (échanges locaux, conférences citoyennes et ateliers),
						chaque rencontre favorise le partage et la reconnexion au vivant.
					</p>
					<p>
						Mes activités se déroulent principalement sur
						Saint-Quentin-en-Yvelines : Plaisir, Guyancourt, Maurepas... ou en
						forêt de Rambouillet.
					</p>
					<ParagraphSeparator />
					<h2>Agenda & Actualités de la Géobiologie dans les Yvelines (78)</h2>
					<section className='paragraphe-1'>
						<h3>
							Initiation à la Géobiologie "Explorateur de l'Invisible" à Plaisir
							(78)
						</h3>
						<p>
							<i>
								Cycle complet de 4 modules pour <b>débutants</b> — Sans
								prérequis
							</i>
						</p>
						<p>
							Apprenez à <b>décoder</b>, par vous-même, les énergies des lieux,
							comprendre les failles, détecter les veines d'eau souterraines et
							mesurer l'impact des réseaux géomagnétiques et des présences
							subtiles sur les êtres vivants.
						</p>
						<h4>📅 Partie 1 : Dimanche 06 Septembre 2026 (Plaisir 78)</h4>
						<ul>
							<li>
								<b>09h00 - 12h30 | Module 1 : </b> La découverte, théorie de la
								géobiologie, ses outils et premiers ressentis.
							</li>
							<li>
								<b>14h00 - 18h30 | Module 2 : </b> Théorie et premières
								recherches pratiques autours des{' '}
								<b>cheminées cosmo-telluriques</b>.
							</li>
							<li>
								<b>Pause déjeuner : </b>Repas partagé convivial sur place entre
								participants.
							</li>
						</ul>
						<h4>📅 Partie 2 : Dimanche 11 Octobre 2026 (Plaisir 78)</h4>
						<ul>
							<li>
								<b>09h00 - 12h30 | Module 3 : </b> Étude théorique et pratiques
								des <b>failles</b>et des <b>veines d'eau</b>.
							</li>
							<li>
								<b>14h00 - 18h30 | Module 4 : </b> Les réseaux géomagnétiques de
								base (<b>Hartmann</b>, <b>Curry</b>, Grand diagonal...) d'un
								point de vue théorique et pratique.
							</li>
							<li>
								<b>Pause déjeuner : </b>Repas partagé convivial sur place entre
								participants.
							</li>
						</ul>
						<p>
							💶 <b>Tarif des modules :</b> 60€ par module indépendant |{' '}
							<b>Pack promotionnel :</b> 200€ les 4 modules pour toutes
							inscriptions pour l'intégralité du cycle.
							<br />
							<i>
								Possibilité de régler une partie du cursus en Ğ1 (monnaie libre)
								sur demande.
							</i>
						</p>
						<p className='txt-center txt-warning'>
							⚠️ Attention réservation <b>obligatoire</b> ⚠️
						</p>
						<a
							href='/contact?sujet=initiation-géobiologie'
							className='cta cta-primary'
							title='Lien pour réserver un ou plusieurs modules pour l’initiation à la Géobiologie - Explorateur de l’invisible'
						>
							Réserver
						</a>{' '}
						<a
							href='/geobiologie#invisible'
							className='cta cta-secondary'
							title='En savoir plus sur l’initiation à la Géobiologie - Explorateur de l’invisible'
						>
							En savoir plus
						</a>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<h3>Sortie Nature et Pratique</h3>
						<h4>Exploration Énergétique de la Fontaine Saint-Martin</h4>
						<h5>Dimanche 18 Octobre 2026 à Jouars-Pontchartrain — Dès 09h00</h5>
						<p>
							<i>
								Journée d’application concrète en extérieur — Prérequis : avoir
								suivi le cycle "Explorateur de l'invisible" ou équivalent.
							</i>
						</p>
						<p>
							Cette sortie géobiologie sur le terrain, sous réserve de météo
							clémente, est idéale pour mettre en pratique les savoirs acquis
							lors du cycle "Explorateur de l'invisible". Ensemble, nous
							analyserons les vibrations, les mémoires et la structure
							énergétique de ce lieu chargé d'Histoire.
						</p>
						<p>
							💶 <b>Tarif des sorties :</b> 60€ par sortie{' '}
							<i>
								Possibilité de régler une partie de la sortie en Ğ1 (monnaie
								libre) sur demande.
							</i>
						</p>
						<p className='txt-center txt-warning'>
							⚠️ Attention réservation <b>obligatoire</b> ⚠️
						</p>
						<a
							href='/contact?sujet=sortie-géobiologie'
							className='cta cta-primary'
							title='Lien pour réserver une place pour la sortie pratique de Géobiologie'
						>
							Réserver
						</a>
					</section>
					<ParagraphSeparator />

					<section className='paragraphe-3'>
						<h2>Événement Monnaie Libre - Ğ1 (June)</h2>
						<h3>
							Ğmarché et Conférence Citoyenne à Jouars-Pontchartrain - Dimanche
							30 août 2026 de 10h00 à 18h00 — Entrée libre
						</h3>
						<p>
							Participez au marché local de la{' '}
							<b>monnaie libre (la June - Ğ1)</b> à Jouars-Pontchartrain (78).
							Venez à la rencontre de nombreux exposants : artisanat local,
							articles d'occasion, plants de jardin et livres thématiques.
						</p>
						<h4>📅 Programme du Ğmarché du 30 août de 10h00 à 18h00 :</h4>
						<ul>
							<li>
								10h00 : Début du Ğmarché — Ouverture des stands, rencontres,
								échanges en June.
							</li>
							<br />
							<li>
								12h00 : Repas partagé — Chacun apporte quelque chose ; moment
								convivial et communautaire.
							</li>
							<br />
							<li>
								14h00 à 18h00 : Atelier Bien-Être - animé par Marie <br />{' '}
								<a
									href='https://massage-reiki.fr/massage-assis-methode-eas'
									target='_blank'
									rel='noopener noreferrer'
								>
									Massages du dos assis professionnel
								</a>{' '}
								— Séances de 15 minutes, sur mesure, pour soulager les tensions
								et favoriser la détente.
							</li>
							<br />
							<li>
								14h30 à 15h30 : Conférence monnaie libre - animée par Cyril{' '}
								<i>(moi)</i>
								<br /> Changer la monnaie pour changer notre r-apport au monde :
								Comprendre l'impact de la monnaie sur notre vie quotidienne et
								notre relation aux autres.
							</li>
							<br />
						</ul>
						<p className='txt-center txt-warning'>
							⚠️ Attention réservation <b>obligatoire</b> ⚠️
						</p>
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
					</section>
				</div>
			</div>
		</>
	);
};

export default Actualites;
