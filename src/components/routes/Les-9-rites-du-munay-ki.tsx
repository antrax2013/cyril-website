import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Les9RitesMunayKi.scss';
import MetaTag from '../tools/MetaTag';
import Andes from '../../assets/munay-ki/andes-matchu-pichu.png';
import RoueMedecine from '../../assets/munay-ki/roue-de-la-medecine.png';
import Laika from '../../assets/munay-ki/Q_eros_Paqo_calling_Apu.jpg';
import AndesSoleil from '../../assets/munay-ki/chaman-peru.jpeg';

const Les9RitesMunayKi = () => {
	const head = () => {
		return (
			<MetaTag
				title='Les 9 rites Munay-Ki'
				description="Les 9 rites Munay-Ki, ou la transmission prophétisée d'un savoir ancestral venu des Andes et détenus par les Q'eros."
				resume="Les rites 9 Munay-Ki, la transmission d'un savoir ancestral des Andes"
			/>
		);
	};
	//https://www.tamera.fr/blog/ameriques/perou-les-qeros-freres-des-andes-chroniques-de-franck-charton
	//https://jadechabot.com/ateliers/munay-ki
	//https://www-pampamesayok-com.translate.goog/ancient-medicine?_x_tr_sl=auto&_x_tr_tl=fr&_x_tr_hl=fr&_x_tr_pto=wapp
	//www.espace-de-ressourcement.be/cours/initiation-aux-rites-sacres-de-munay-ki/apprendre-initiation-aux-rites-sacres-de-munay-ki.html
	//https://www.therapeute-clairvoyante.com/les-9-rites-du-munay-ki-2/
	//https://www.chakana.ca/21-pratiques-chamaniques-ebook?email=numeriquerelais%40gmail.com&name=dio
	https: return (
		<>
			{head()}
			<div className='Les9RitesMunayKi'>
				<article>
					<h1>Les 9 rites Munay-Ki</h1>
					<section className='paragraphe-1-1'>
						<section className='paragraphe-content'>
							<p>
								Les rites <em>Munay-Ki</em> nous ont été transmis par un peuple
								descendant des Incas, les Q’eros. Issus de la communauté
								Quechua, ils vivent isolés, à plus de 4 200m, dans la Cordillère
								des Andes au Pérou. En Quechua, <em>Munay-Ki</em> signifie
								littéralement, <i>"Je t’aime"</i> ou{' '}
								<i>"Sois ce que tu es, Amour et Lumière"</i>.
							</p>
						</section>
					</section>
					<section className='paragraphe-1-2'>
						<section className='paragraphe-content'>
							<p>
								Articulés autour de 9 cérémonies, les rites du <em>Munay-Ki</em>{' '}
								sont une transmission, sous forme de semences, d’Homme à Homme,
								de champ énergétique à champ énergétique. Plus que des
								enseignements, ils véhiculent une sagesse ancestrale, qui, si
								nous la laissons infuser dans notre conscience, nous permettra
								de nous sentir plus libres, plus créatifs, plus réceptifs aux
								mondes subtils. Ainsi, à notre tour, nous serons en mesure de
								les transmettre nous aussi.
							</p>
						</section>
					</section>
					<section className='paragraphe-1-3'>
						<aside>
							<div>
								<img
									src={RoueMedecine}
									className='img-roue-de-la-médecine'
									alt='Les 9 rites Munay-Ki - Sachamama, Otorongo, Sirakinti et Appuchin, les gardiens des 4 directions.'
									title='Les 9 rites Munay-Ki - Sachamama, Otorongo, Sirakinti et Appuchin, les gardiens des 4 directions.'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Les rites nous relient aux gardiens de la Sagesse, de la Terre,
								du Passé et de l’Avenir. Ils activent en nous les 3 forces
								Ynakai, Murray et Yanchi, ou Puissance, Amour et Esprit, pour
								restaurer et vivre dans l’Ayni, l’harmonie, et ainsi, contribuer
								à la descente du Ciel sur la Terre.
							</p>
							<ul>
								<b className='titre-module'>
									Les 9 rites <em>Munay-Ki</em> sont les suivants :
								</b>
								<li>Le rite du Guérisseur</li>
								<li>Le rite des bandes de protection</li>
								<li>Le rite de l’Harmonie : Ayni Karpay</li>
								<li>Le rite du voyant : Kawak rite</li>
								<li>Le rite du gardien du Jour : Pampa Mesayoc</li>
								<li>Le rite du gardien de la Sagesse : Alto Mesayoc</li>
								<li>Le rite du gardien de la Terre : Kurak Akullak</li>
								<li>Le rite du gardien du Temps : Morshaï Karpay</li>
								<li>Le rite du Créateur : Taitanchis</li>
							</ul>
						</section>
					</section>
					<ParagraphSeparator />
					<h2>L'origine des 9 rites du Munay-Ki</h2>
					<section className='paragraphe-2-1'>
						<section className='paragraphe-content'>
							<p>
								La légende raconte que lors de l’arrivée des conquistadors,
								certains, parmi les peuples Incas, sont descendus dans les
								vallées au contact des Espagnols. Les Q’eros, au contraire, sont
								montés dans les montagnes pour protéger leurs savoirs, et selon
								la prophétie sacrée du grand changement, "El Pachakuti", le
								transmettre à l’humanité au moment venu.
							</p>
						</section>
					</section>
					<section className='section-banniere'>
						<center>
							<img
								src={Andes}
								className='img-andes'
								alt='Les 9 rites Munay-Ki - Le Machu Picchu, l’ancienne cité Inca.'
								title='Les 9 rites Munay-Ki - Le Machu Picchu, l’ancienne cité Inca.'
								loading='lazy'
							/>
						</center>
					</section>
					<section className='paragraphe-2-2'>
						<section className='paragraphe-content'>
							<p>
								Grâce à cet isolement, à plus de 4 200m d’altitude, protégés par
								les montagnes sacrées et leurs esprits protecteurs, les Apus,
								ils ont pu conserver intacts leur mode de vie, leurs traditions
								millénaires. Le monde occidental ne les a découverts qu’en 1959.
								Les chamanes Incas, les Laïkas, sachant la "fin des temps"
								venue, sont descendus pour partager avec nous leur sagesse.
							</p>
						</section>
					</section>
					<section className='paragraphe-2-3'>
						<section className='paragraphe-content'>
							<p>
								Lors de la célébration du festival annuel du "Retour des
								Pléiades" en juin 1959, les participants, réunis, là, ont été
								surpris de voir apparaître les Q’eros, vêtus de l’emblème Inca
								du Soleil, annonçant que le temps des prophéties était arrivé.
								Le temps où ce monde prendrait un tournant, ramenant l’Ayni,
								l’harmonie, et mettant fin à l’ère du chaos et du désordre.
							</p>
							<p>
								L’ancienne prophétie mentionne que, c’est le moment de la grande
								réunion, appelée Mastay, et qu’il est temps pour l’intégration
								des peuples des quatre points cardinaux. En prévision du jour où
								l’Aigle du Nord et le Condor du Sud voleront de nouveau
								ensemble. Ils nous transmettent que l’Amour et la Compassion
								seront les forces qui guideront l’union des peuples.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={Laika}
									className='img-laika'
									alt='Les 9 rites Munay-Ki - Paqo un Laïka Q’ero appelant les Apus.'
									title='Les 9 rites Munay-Ki - Paqo un Laïka Q’ero appelant les Apus.'
								/>
							</div>
						</aside>
					</section>
					<ParagraphSeparator />
					<h2>Pourquoi recevoir et transmettre les rites Munay-Ki ?</h2>
					<section className='paragraphe-3-1'>
						<aside>
							<div>
								<img
									src={AndesSoleil}
									className='img-chamane'
									alt='Les 9 rites Munay-Ki - Un Laïka au cours d’un rituel.'
									title='Les 9 rites Munay-Ki - Un Laïka au cours d’un rituel.'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								En nous transmettant les rites <em>Munay-Ki</em>, les Laïkas
								nous offrent l’opportunité d’élever notre taux vibratoire. Ils
								nous permettent d’évoluer physiquement, mentalement et
								émotionnellement, et ainsi permettre l’avènement d'une ère
								nouvelle.
							</p>
							<blockquote>
								"Les nouveaux gardiens de la Terre viendront de l’Occident, et
								ceux qui ont eu le plus grand impact sur la Terre Mère,
								Pachamama, ont maintenant la responsabilité de restaurer la
								relation avec Elle, après s’être refaits".
							</blockquote>
						</section>
					</section>
					<section className='paragraphe-3-2'>
						<section className='paragraphe-content'>
							<p>
								Nous avons, nous Occidentaux, la responsabilité de ce chaos.
								Nous avons donc la responsabilité, de ramener la paix,
								l’équilibre et l’harmonie. Soyons les nouveaux Gardiens de la
								Terre.
							</p>
							<p>
								J’ai reçu, de{' '}
								<a
									href='https://www.facebook.com/subileau.psychosomato/'
									title='Accédez par ce lien à la page Facebook de Ludivine Subileau, psycho-somatothérapeute,.'
									target='_blank'
								>
									Ludivine Subileau
								</a>
								, les rites, enseignements et sagesses <em>Munay-Ki</em> et je
								l’en remercie.
							</p>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default Les9RitesMunayKi;
