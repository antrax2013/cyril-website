import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Actualites.scss';
import MetaTag from '../tools/MetaTag';
import SharePopup from '../tools/SharePopup';

const Actualites = () => {
	const head = () => {
		return (
			<MetaTag
				title='Actualités'
				description='Les actualités de mon activités d’explorateur des mondes subtiles.'
				resume='Les actualités de mon activités d’explorateurdes mondes subtiles, sur cette page j’évoquerais les différents événements, salon et formation aquels je participerai.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='actualites'>
				<div className='article'>
					<h1>Les actualités</h1>
					<section className='icon-panel'>
						<SharePopup url={window.location.href} title='Les actualités' />
					</section>
					<section className='paragraphe-2'>
						<h2>
							Initiation à la <em>Géobiologie</em> - Explorateur de l’invisible
						</h2>
						<section className='paragraphe-content'>
							<p>
								Je vous accueillerai, dans ces espaces, en groupe restreint (4-6
								pers max.), pour pouvoir vous accompagner au mieux. Le tarif
								sera de 60€ par module{' '}
								<i>(ou 200€ si 4 pris si à la résevation)</i>.
							</p>
							<h4>Module 1 - La découverte </h4>
							<ul>
								<li>Dimanche 06 septembre de 09h00 à 12h30 - Plaisir (78)</li>
							</ul>
							<h4>Module 2 - Les premières recherches </h4>
							<ul>
								<li>Dimanche 06 septembre de 14h00 à 18h30 - Plaisir (78)</li>
							</ul>
							<h4>Module 3 - Les failles et les veines d’eau</h4>
							<ul>
								<li>Dimanche 04 octobre de 09h00 à 12h30 - Plaisir (78)</li>
							</ul>
							<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
							<ul>
								<li>Dimanche 04 octobre de 14h00 à 18h30 - Plaisir (78)</li>
							</ul>
							<p className='txt-center txt-warning'>
								⚠️ Attention réservation <b>obligatoire</b> ⚠️
							</p>{' '}
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
					</section>
					<ParagraphSeparator />
					<section>
						<h2 id='conférences'>Conférences</h2>
						<h3>
							Porte ouvertes des espaces bien-être du coffret d'Alumine,
							Vibration et Libellule
						</h3>
						<ul>
							<li>📅 Dimanche 14 juin 2026</li>
							<li>⏰ De 10h30 à 17h00</li>
							<li>📍 Lieu : 5 rue Edmond Rostant, Plaisir 78</li>
						</ul>
						<h4>Changer la monnaie pour changer notre rapport au monde</h4>
						<p>
							Une exploration accessible et vivante des monnaies alternatives,
							de la G1 et de la manière dont nos systèmes d’échange influencent
							nos relations, nos choix et notre vision du monde.
						</p>
						<ul>
							<li>⏰ De 14h30 à 15h30</li>
							<li>
								📍 Lieu : Espace Vibration, 1er étage uniquement par escalier
							</li>
						</ul>
						<h4>Introduction à la Géobiologie</h4>
						<p>
							Exploration à la découverte des phénomènes énergétiques subtils
							qui influencent un lieu, notre équilibre, notre ressenti, notre
							vie au quotidien.
						</p>
						<ul>
							<li>⏰ De 15h30 à 16h30</li>
							<li>
								📍 Lieu : Espace Vibration, 1er étage uniquement par escalier
							</li>
						</ul>
					</section>
					<ParagraphSeparator />
					<section>
						<h2 id='explorons-l-invisible-en-nature'>
							Explorons l’invisible - la Géobiologie en nature
						</h2>
						<p>
							Voici venu le temps d'approfondir notre pratique de la{' '}
							<em>Géobiologie</em> en allant ensemble sur le terrain, à la
							rencontre de lieux inspirants, vivants et porteurs d’histoire.
						</p>
						<p>
							Après avoir découvert les bases lors de
							<a
								href='/geobiologie#invisible'
								title='En savoir plus sur l’initiation à la Géobiologie - Explorateur de l’invisible'
							>
								modules d’initiation
							</a>
							, il est temps de mettre en pratique ces connaissances sur le
							terrain, dans des environnements riches où chaque élément, eau,
							végétation, sol, histoire, devient un support d’exploration.
						</p>
						<h3>Pourquoi ces sorties ?</h3>
						<p>Ces rencontres en nature ont plusieurs objectifs</p>
						<ul>
							<li>
								Approfondir des notions vues en initiation grâce à des cas
								concrets et variés.
							</li>
							<li>
								Explorer des environnements différents : forêt, maison, terrain,
								lieux anciens ou symboliques
							</li>
							<li>
								Apprendre à structurer une étude complète : observation,
								mesures, interprétation, restitution.
							</li>
							<li>Développer la confiance en ses ressentis subtils.</li>
							<li>
								Créer un groupe d’entraide, où chacun progresse à son rythme.
							</li>
							<li>
								Profiter d’un espace bienveillant pour poser toutes ses
								questions et lever ses doutes.
							</li>
						</ul>
						<p>
							Je crois profondément que l’énergie d’un petit groupe harmonieux
							ouvre des portes que l’on ne franchit pas seul. C’est pour cela
							que je privilégie des groupes de 4 à 8 personnes, afin que chacun
							puisse s’exprimer, expérimenter et avancer sereinement.
						</p>
					</section>

					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<h2>Sorties</h2>
						<section className='paragraphe-3'>
							<h3>Fontaine St Sauveur de Maurepas</h3>
							<h4>📍 Dimanche 24 mai de 09h à 12h30</h4>
							<p>
								Nichée dans un vallon verdoyant, la Fontaine Saint‑Sauveur est
								un lieu ancien et discret.
							</p>
							<h4>Un lieu ancien, lié aux traditions locales</h4>
							<p>
								Dédiée au Saint Sauveur, Jésus‑Christ, cette fontaine témoigne
								d’un passé spirituel profond. Même si peu de traces matérielles
								subsistent, la dédicace elle‑même laisse entrevoir une histoire
								plus vaste, faite de traditions, de passages et de pratiques
								oubliées.
							</p>
							<p>
								La combinaison eau + végétation + ancienneté du site crée un
								environnement propice à l’exploration géobiologique.
							</p>
							<p>
								🚨{' '}
								<b>
									Prochainement, retrouver l'étude complète de ce lieu dans la
									section{' '}
									<i>Etudes Géobiologiques / Fontaine St Sauveur de Maurepas</i>
									.
								</b>{' '}
								🚨
							</p>
							{/* <a
							href='/geobiologie#invisible'
							className='cta cta-secondary'
							title='En savoir plus sur l’initiation à la Géobiologie - Explorateur de l’invisible'
						>
							En savoir plus
						</a> */}
						</section>
						<section className='paragraphe-content'>
							<h3 id='forêt-de-rambouillet-à-gambaiseuil'>
								Forêt de Rambouillet à Gambaiseuil
							</h3>
							<h4>📍 Samedi 13 juin de 09h à 18h30</h4>
							<p>
								Sortie guidés par François Figuerau, passionné d’histoire, de
								nature et d’énergies subtiles. Avec lui, chaque pierre, chaque
								arbre, chaque source devient un témoin silencieux d’un passé
								oublié. Il nous emmènera sur des lieux étonnants, parfois
								méconnus, toujours vibrants
							</p>
							<p>Au programme :</p>
							<ul>
								<li>🌀 La fontaine des Bourbiers</li>
								<li>⛰️ L’atelier Montmorencien</li>
							</ul>

							<ul>
								<li>📅 Samedi 13 juin 2026</li>
								<li>⏰ De 09h à 18h30</li>
								<li>
									🚘 : Covoiturage au départ de Maurepas 09h - parking du
									gymnase du bois - Av. de Normandie
								</li>
								<li>📍 Forêt de Rambouillet - Gambaiseuil</li>
								<li>💶 Participation : 10 € par personne </li>
								<li>
									🥪 Prévoir un pique‑nique pour prolonger le moment ensemble
								</li>
								<li>🥢 intruments de radiesthésie</li>
							</ul>
							<p>
								Au fil du chemin, François partagera ses connaissances, ses
								ressentis, ses anecdotes… et cette manière unique qu’il a de
								faire dialoguer le visible et l’invisible. Une sortie pour
								celles et ceux qui aiment découvrir autrement, sentir, écouter,
								se laisser surprendre.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<h2>Autres</h2>
						<section className='paragraphe-content'>
							<h3>
								Avril 2026 - Intégration du test musculaire dans ma pratique
							</h3>
							<p>
								Cette année, je vais me former au test musculaire, à l'école des
								Arts du souffle de Nouzonville dans les Ardennes, une technique
								issue de la kinésiologie qui permet d'accéder à des informations
								subtiles grâce aux réponses du corps.
							</p>
							<p>
								Le principe est simple : le corps réagit instantanément à un
								stimulus, une intention ou une information, et cette réaction
								musculaire devient un indicateur fiable pour comprendre ce qui
								se joue en profondeur.
							</p>
							<p>Cette approche va enrichir ma pratique en me permettant :</p>
							<ul>
								<li>d’affiner mes ressentis</li>
								<li>de valider certaines perceptions énergétiques</li>
								<li>
									de mieux comprendre comment les énergies d’un lieu influencent
									ses habitants
								</li>
								<li>
									d’apporter une lecture plus précise et plus nuancée lors des
									études géobiologiques
								</li>
							</ul>
							<p>
								Le test musculaire devient alors un pont entre le subtil et le
								concret, entre l’intuition et la réponse physiologique. C’est un
								outil précieux pour confirmer, ajuster et approfondir ce que
								l’on perçoit sur le terrain.{' '}
							</p>
							<p>
								Je suis impatient d’intégrer cette dimension supplémentaire à
								mes accompagnements, afin d’offrir une compréhension encore plus
								fine des interactions entre les êtres vivants, leur corps et
								leur environnement.
							</p>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default Actualites;
