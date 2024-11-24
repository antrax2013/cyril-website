import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/geobiologie.scss';
import MetaTag from '../tools/MetaTag';
import GeobioEnvironement from '../../assets/géobiologie/environement-ondes.jpg';
import Plan from '../../assets/géobiologie/plan-geobiologie.png';

//https://home-vibes-harmony.be/geobiologie/

const Geobiologie = () => {
	const head = () => {
		return (
			<MetaTag
				title='La Géobiologie'
				description='La Géobiologie, l’étude des phénomènes ondulatoires et de leur impact sur le vivant.'
				resume='La Géobiologie, connue des anciens bâtisseurs est l’étude de l’impact d’un ensemble de phénomènes ondulatoires et vibrants, ayant une incidence sur les êtres vivants et les énergies d’un lieu.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='geobiologie'>
				<article>
					<h1>La Géobiologie</h1>
					<h2>Qu'est-ce que la Géobiologie ?</h2>
					<section className='paragraphe-1'>
						<section className='paragraphe-content'>
							<p>
								La <em>Géobiologie</em>, est la recherche et l’étude de
								phénomènes ondulatoires dans un lieu pour en comprendre
								l’agencement et ainsi évaluer leurs impacts potentiels sur le
								vivant.
							</p>
						</section>
					</section>
					<section className='paragraphe-2'>
						<aside>
							<div>
								<img
									src={GeobioEnvironement}
									className='img-geobiologie-environement'
									alt='Dessin montrant les ondes dans notre environement de tous les jours.'
									title='Géobiologie - Les ondes dans notre environement de tous les jours.'
									loading='lazy'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Dans le monde qui nous entoure, "tout" est ondulatoire, "tout"
								est énergie : le son, la lumière, les odeurs... Un émetteur
								envoie une onde dans l’espace et nos récepteurs réagissent à son
								contact, nous permettant, ainsi de la percevoir.
							</p>
							<p>
								Avec la découverte au 19ème siècle des ultras sons, des infras
								rouges, des ultras violets... la science reconnait l'existence
								de phénomènes naturels, non perceptibles par nos récepteurs
								sensoriels. Non seulement ils existent, mais, ils ont également
								un impact physique sur nous, sur tous les êtres peuplant notre
								planète (cf. les coups de soleil dues aux ultras violets)
							</p>
							<p>
								Aujourd’hui, il existe une grande variété d’ondes artificielles
								électromagnétiques tout autour de nous, 4G, 5G, Wifi... et dont
								nous ne connaissons pas encore les impacts à long terme. Mais y
								aurait-il d'autres ondes ?
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<h2>L’origine de la Géobiologie moderne</h2>
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<p>
								Au début des années 50, à Eberbach am Neckar près d’Heidelberg
								en Allemagne, le Dr Ernst Hartmann a mis en évidence l’existence
								d’un réseau géomagnétique : un gigantesque maillage de
								rayonnements telluriques. Celui-ci arrive à la surface du sol où
								nous vivons, pour continuer à monter verticalement, traversant
								tout sur son passage (humains, maisons…).
							</p>
							<p>
								Après des milliers d'expériences en laboratoire, le Dr Hartmann
								a constaté que ce rayonnement pouvait, dans certains cas, avoir
								une incidence sur l’épanouissement de toute forme de vie se
								situant à son aplomb. Depuis la mise en évidence du réseau
								"Hartmann", d'autres phénomènes ont été découverts, et,
								aujourd'hui, les géobiologues en découvrent encore.
							</p>
							<p>
								Depuis, les grands sites sacrés, à travers le monde, ont été
								étudiés. L’organisation singulière, constante et régulière, des
								phénomènes géobiologiques, sur ces grands sites, met en évidence
								une maîtrise de ceux-ci par les anciens bâtisseurs. Suivant
								leurs cultures et leurs croyances, ils les utilisaient et les
								modifiaient pour accroître l’énergie du lieu ainsi que son
								potentiel thérapeutique.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={Plan}
									className='img-geobiologie-cathedrale'
									alt='Plan des phénomènes géobiologiques présents sur un site sacré'
									title='Géobiologie - Plan d’un site sacré'
									loading='lazy'
								/>
							</div>
						</aside>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h2 id='geobiologie-initiations'>Initiations en Géobiologie</h2>
							<h3 id='invisible'>Explorateur de l’invisible</h3>
							<p>
								Je propose de vous faire découvrir la <em>géobiologie</em> au
								travers de l’initiation <em>"Explorateur de l’invisible"</em>.
								Elle s’articule autour de 4 modules progressifs et indépendants.
								Ils se veulent théoriques mais surtout pratiques. Aucun
								prérequis n’est nécessaire. Bien que nous ne sommes pas tous
								égaux, en termes de sensibilité, face aux phénomènes subtils,
								nous sommes tous, à des degrés divers, en mesure de les
								percevoir. Cela prend plus ou moins de temps.
							</p>
							<p>
								L’objectif de cette initiation est d’être en mesure
								d’appréhender, de manière autonome, les différents phénomènes
								énergétiques et géobiologiques de base, présents dans un lieu
								pour en comprendre leur agencement et ainsi évaluer leurs
								impacts potentiels sur le vivant.
							</p>
							<p>
								D’une durée approximative d’une demi-journée, les différents
								modules se dérouleront en deux phases : une phase théorique
								suivie d’une phase pratique de mise en application.
							</p>
							<p>Les modules sont les suivants :</p>
							<dl>
								<b className='titre-module'>Module 1 : La découverte.</b>
								<dt className='objectif'>
									<b>
										<u>Objectif :</u> Module de présentation de ce qu’est la{' '}
										<em>Géobiologie</em>
									</b>
								</dt>
								<dt>
									Découvrir les outils utilisés par les géobiologues et leur
									mode de fonctionnement
								</dt>
								<dt>
									Le gardien d’un lieu, premier contact avec une énergie subtile
								</dt>
							</dl>
							<dl>
								<b className='titre-module'>
									Module 2 : Les premières recherches.
								</b>
								<dt className='objectif'>
									<u>Objectif :</u> Etre en mesure de trouver des cheminées
									cosmo-telluriques dans un lieu
								</dt>
								<dt>Présentation d’un protocole de recherche</dt>{' '}
								<dt>
									Description de ce que sont les cheminées cosmo-telluriques et
									quels sont leurs impacts sur les êtres vivants en fonction de
									leur nature
								</dt>
								<dt>
									Recherche des cheminées cosmo-telluriques présentes sur le
									lieu de l’initiation et perception sensorielle de leurs effets
								</dt>
							</dl>
							<dl>
								<b className='titre-module'>
									Module 3 : Les failles et les veines d’eau.
								</b>
								<dt className='objectif'>
									<u>Objectif :</u> Etre en mesure de trouver les failles et les
									veines d’eau présentes dans un lieu
								</dt>
								<dt>
									Description de ce que sont les failles et les veines d’eau et
									quels sont leurs impacts sur les êtres vivants
								</dt>
								<dt>
									Recherche des failles et des veines d’eau présentes sur le
									lieu de l’initiation et perception sensorielle de leurs effets
								</dt>
							</dl>
							<dl>
								<b className='titre-module'>
									Module 4 : Les réseaux géomagnétiques de base
								</b>
								<dt className='objectif'>
									<u>Objectif :</u> Etre en mesure de trouver les réseaux
									géomagnétiques dans un lieu
								</dt>
								<dt>Présentation d’un protocole de recherche</dt>{' '}
								<dt>
									Description des différents réseaux géomagnétiques de base
									présents se manifestant dans un lieu ainsi que leurs impacts
									sur les êtres vivants
								</dt>
								<dt>
									Recherche des différents réseaux géomagnétiques présents sur
									le lieu de l’initiation et perception sensorielle de leurs
									effets
								</dt>
							</dl>
							<p>
								Le tarif est de 50€ par module. Le tarif comprend la location de
								la salle et un lobe de Hartmann, artisanal, fait par mes soins
								qui vous sera remis lors de votre participation à votre premier
								module. Il vous sera utile durant les phases pratiques.
								Naturellement, vous serez libre d'utiliser d'autres outils à
								votre convenance.
							</p>
							<p>
								Les modules sont conçus pour être indépendants les uns des
								autres. Bien que nous soyons tous en mesure de pouvoir percevoir
								les phénomènes subtils, il arrive parfois que nos croyances, nos
								certitudes et nos peurs soient des facteurs limitants entraînant
								des difficultés. Je serai à vos côtés pour vous accompagner dans
								cette découverte.
							</p>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default Geobiologie;
