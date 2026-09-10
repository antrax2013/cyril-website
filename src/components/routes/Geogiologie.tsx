import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Geobiologie.scss';
import GeobioEnvironement from '../../assets/géobiologie/environement-ondes.jpg';
import Plan from '../../assets/géobiologie/plan-geobiologie.png';
import SharePopup from '../tools/SharePopup';

//https://home-vibes-harmony.be/geobiologie/

const Geobiologie = () => {
	return (
		<>
			<div className='geobiologie'>
				<div className='article'>
					<h1>La Géobiologie</h1>
					<section className='icon-panel'>
						<SharePopup url={window.location.href} title='La Géobiologie' />
					</section>
					<h2>Observer autrement les lieux et le vivant</h2>
					<p>
						La géobiologie invite à porter un regard différent sur notre
						environnement. Entre observation, expérimentation et exploration de
						terrain, elle nous aide à mieux comprendre la relation entre les
						lieux, le vivant et les nombreuses interactions, visibles ou
						invisibles, subtiles ou physiques, qui les relient.
					</p>
					<p>
						<strong>
							Mon cœur de métier repose sur la transmission et la pratique de
							terrain.
						</strong>{' '}
						Plutôt que de chercher à intervenir artificiellement sur un lieu, ma
						démarche privilégie le développement du sens de l'observation,
						l'écoute des dynamiques naturelles et la transmission d'outils pour
						vous accompagner vers une véritable autonomie.
					</p>
					<div className='cta-block'>
						<h2>
							Vous souhaitez apprendre à ressentir et décoder un lieu par
							vous-même ?
						</h2>

						<div className='cta-container'>
							<a
								href='/initiations/geobiologie/explorateur-de-l-invisible'
								className='cta cta-primary'
							>
								Découvrir le cycle
							</a>{' '}
							<a href='/actualites' className='cta cta-secondary'>
								Voir les prochaines dates
							</a>
						</div>
					</div>
					<h2>Qu'est-ce que la Géobiologie ?</h2>
					<section className='paragraphe-1'>
						<section className='paragraphe-content'>
							<p>
								La géobiologie est une discipline, un art, qui s’intéresse aux
								interactions entre le vivant et son environnement que ce soit
								d’un point de vue physique ou subtil.
							</p>
							<p>
								Elle invite à observer les caractéristiques naturelles d’un
								lieu, à être attentif au paysage, aux animaux, aux végétaux, à
								la géologie, à l’eau, au vivant ainsi qu’aux différents
								phénomènes ondulatoires pouvant être perçus ou mesurés.
							</p>
							<p>
								Au-delà des techniques, la géobiologie est avant tout une
								démarche d’observation et de questionnement.
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
								Avec la découverte au 19ème siècle des ultrasons, des infras
								rouges, des ultraviolets... la science reconnaît l'existence de
								phénomènes naturels, non perceptibles par nos récepteurs
								sensoriels. Non seulement ils existent, mais, ils ont également
								un impact physique sur nous, sur tous les êtres peuplant notre
								planète (cf. les coups de soleil dus aux ultraviolets)
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
								phénomènes <em>géobiologiques</em>, sur ces grands sites, met en
								évidence une maîtrise de ceux-ci par les anciens bâtisseurs.
								Suivant leurs cultures et leurs croyances, ils les utilisaient
								et les modifiaient pour accroître l’énergie du lieu ainsi que
								son potentiel thérapeutique.
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
							<div>
								<h2>Pourquoi s’intéresser aux lieux ?</h2>
								<p>
									Nous passons notre vie dans des lieux différents :
									appartements, maisons, jardins, espaces de travail,
									environnements naturels ou sites historiques. Chaque lieu
									possède ses particularités, son histoire et sa dynamique
									propre, qui influencent l’épanouissement du vivant.
								</p>
								<p>
									Comprendre ces interactions, c’est reconnaître que les lieux
									ne sont jamais neutres : ils agissent, résonnent, soutiennent
									ou parfois perturbent.
								</p>
								<p>
									Observer ces dynamiques permet d’aborder notre environnement
									avec plus de conscience, de mieux percevoir ce qui s’y joue
									au‑delà du visible et ainsi mieux comprendre les interactions
									subtiles, les influences des lieux et la manière dont le
									vivant y réagit.
								</p>
								<p>
									Nous vivons dans un univers où tout interagit en permanence,
									où tout est ondulatoire. Reconnaître cela, c’est voir notre
									environnement comme un ensemble vivant et dynamique, qui
									appelle une approche holistique pour comprendre les synergies
									subtiles entre les lieux et le vivant.
								</p>
							</div>
							<div className='cta-block'>
								<h2>Passer de la découverte à l’expérience</h2>

								<p>
									Vous souhaitez apprendre à observer ces interactions
									directement sur le terrain ? Le cycle{' '}
									<strong>« Explorateur de l’invisible »</strong> vous
									accompagne progressivement dans la découverte et la pratique
									de la géobiologie.
								</p>

								<div className='cta-container'>
									<div className='cta-container'>
										<a
											href='/initiations/geobiologie/explorateur-de-l-invisible'
											className='cta cta-primary'
										>
											Découvrir le cycle
										</a>{' '}
										<a href='/actualites' className='cta cta-secondary'>
											Voir les prochaines dates
										</a>
									</div>
								</div>
							</div>
							<ParagraphSeparator />
							<div>
								<h2>Une démarche fondée sur l’observation</h2>
								<p>
									Ma pratique de la géobiologie repose avant tout sur
									l’expérience de terrain. J’accorde une place importante à :
								</p>
								<ul>
									<li>
										<b>L’observation</b> : Prendre le temps de regarder un lieu
										avant de chercher à l’interpréter. Le subtil s’exprime aussi
										visuellement, à travers des indices discrets, des détails
										qui se révèlent ici ou là. Observer sans précipiter
										l’analyse permet d’entrer en relation avec le lieu, de
										percevoir ses dynamiques et d’accueillir ce qu’il donne à
										voir avant d’aller plus loin.
									</li>
									<li>
										<b>L’expérimentation</b> : Tester, mesurer et comparer, ses
										perceptions, mais aussi, et surtout, apprendre à croire en
										ses intuitions et en ses ressentis. C’est se faire
										confiance.
										<br />
										L’expérience invite à confronter ce que l’on perçoit, à
										affiner son regard, tout en laissant une place essentielle à
										cette part intérieure qui sait avant de comprendre. C’est
										dans cet équilibre entre intuition et mesure que se
										construit une perception juste et personnelle du subtil.
									</li>
									<li>
										<b>La curiosité</b> : Questionner sans cesse ce qui semble
										acquis. C’est une démarche essentielle : revenir à
										l’expérience avant la théorie, confronter ce que l’on croit
										savoir, remettre en mouvement ce qui paraît établi. C’est
										ainsi que l’on avance, que la compréhension s’affine et que
										la théorie évolue au rythme de la pratique.
									</li>
									<li>
										<b>Développer sa capacité d’analyse et d’observation</b>,
										apprendre à faire confiance à ses perceptions : c’est, pour
										moi, l’essentiel de la transmission. Accompagner quelqu’un,
										ce n’est pas lui donner des certitudes, mais l’aider à
										affiner son regard, à renforcer son autonomie et à
										construire, avec lui, sa propre manière d’explorer les lieux
										et le subtil.
									</li>
								</ul>
								<p>
									La géobiologie est, pour moi, un outil au service de l’Humain.
									Elle révèle les interactions subtiles qui se jouent au‑delà du
									visible et met en lumière les dynamiques qui relient les lieux
									et le vivant. En observant ces phénomènes, elle offre une
									manière plus consciente d’aborder notre environnement et d’en
									comprendre les influences, les équilibres et les résonances.
								</p>
								<h3>Ma posture en géobiologie</h3>
								<p>
									Je ne cherche pas à corriger ou modifier un lieu. Mon travail
									repose sur l’observation, la compréhension et la lecture des
									dynamiques subtiles. L’harmonisation, pour moi, commence par
									la relation au lieu et la conscience de ses synergies.
								</p>
							</div>
							<div>
								<h2>Ce que j’explore</h2>
								<p>
									Au fil de mes recherches et de mes sorties, différents sujets
									retiennent particulièrement mon attention.
								</p>
								<ul>
									<li>
										<b>Les lieux naturels</b> : Forêts, sources, cours d'eau et
										paysages.
									</li>
									<li>
										<b>Les sites anciens</b> : Mégalithes, lieux historiques et
										patrimoine.
									</li>
									<li>
										<b>Les édifices remarquables</b> : Églises, chapelles et
										constructions anciennes.
									</li>
									<p>
										Ce qui m’anime c’est de découvrir les interactions entre le
										vivant et son environnement. Observer le comportement des
										végétaux et des animaux, comment ils résonnent avec le lieu.
									</p>
								</ul>
							</div>
							<div>
								<h2>La géobiologie sur le terrain</h2>
								<p>
									Pour moi, la géobiologie ne s’apprend pas dans les livres. Le
									terrain reste le meilleur laboratoire. Chaque sortie est
									l’occasion :
								</p>
								<ul>
									<li>d’observer</li>
									<li>d’expérimenter</li>
									<li>de développer son ressenti</li>
									<li>
										de confronter ses observations avec celles des autres
										participants
									</li>
									<li>d’apprendre directement au contact du lieu</li>
								</ul>
								<p>
									C’est cette approche que je privilégie lors de mes initiations
									et explorations. L’expérimentation en groupe permet d’évoluer
									dans un cadre de bienveillant d’enrichissement mutuel, de se
									rassurer, de prendre confiance en ses ressentis et ses
									inutuitions.
								</p>
								<h3>Apprendre et devenir autonome</h3>
								<p>
									Mon objectif n’est pas de transmettre des certitudes mais une
									démarche éthique et des outils d’observation et de réflexion.
									À travers les initiations, chacun est invité à développer
									progressivement :
								</p>
								<ul>
									<li>son sens de l’observation</li>
									<li>sa capacité d’analyse</li>
									<li>son ressenti</li>
									<li>sa compréhension des lieux</li>
									<li>son autonomie dans l’exploration</li>
								</ul>
							</div>
							<div>
								<h2>Envie d’explorer par vous-même ?</h2>
								<p>
									Le cycle <strong>« Explorateur de l’invisible »</strong> vous
									accompagne progressivement dans la découverte des phénomènes
									géobiologiques, la pratique sur le terrain et le développement
									de votre autonomie.
								</p>
								<div className='cta-container'>
									<div className='cta-container'>
										<a
											href='/initiations/geobiologie/explorateur-de-l-invisible'
											className='cta cta-primary'
										>
											Découvrir le cycle
										</a>{' '}
										<a href='/actualites' className='cta cta-secondary'>
											Voir les prochaines dates
										</a>
									</div>
								</div>
							</div>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default Geobiologie;
