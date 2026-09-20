import ImgMoi from '../../assets/moi-bois-baguettes-bruyeres.jpg';
import '../../scss/routes/QuiSuisJe.scss';
import SharePopup from '../tools/SharePopup';
import ParagraphSeparator from '../tools/Paragraph-Separator';

const QuiSuisJe = () => {
	return (
		<>
			<div className='QuiSuisJe'>
				<div className='article'>
					<h1>Qui suis-je ?</h1>
					<section className='icon-panel'>
						<SharePopup url={window.location.href} title='Qui suis-je ?' />
					</section>
					<section className='paragraphe-1'>
						<aside>
							<div>
								<img
									src={ImgMoi}
									className='img-qui-suis-je-moi'
									alt='Cyril Cophignon, Explorateur des mondes subtils.'
									title='Cyril Cophignon, Explorateur des mondes subtils.'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Curieux de nature, passionné d'Histoire, de patrimoine et de
								vivant, j’explore depuis plusieurs années la géobiologie et les
								mondes subtils à travers l'observation, l'expérimentation et le
								terrain.
							</p>
							<p>
								Au fil de mes recherches et de mes explorations, j’ai développé
								une approche centrée sur la lecture des lieux : observer les
								signaux faibles, comprendre les interactions qui façonnent un
								territoire et croiser ces observations avec son histoire, ses
								traditions et son environnement.
							</p>
							<p>
								Aujourd’hui, je partage cette démarche principalement à{' '}
								<b>Saint-Quentin-en-Yvelines et dans les Yvelines</b>, à travers
								mes explorations, mes conférences et le cycle « Explorateur de
								l’Invisible ». Avec une envie : transmettre des outils et une
								méthode pour permettre à chacun d’expérimenter, de développer
								son discernement et de devenir progressivement autonome.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='geobiologie-exploration'>
						<section className='paragraphe-content'>
							<h2>Mon approche</h2>
							<h3>La géobiologie d’exploration</h3>
							<p>
								La géobiologie est souvent associée à l’harmonisation
								énergétique des maisons ou à la recherche de perturbations à
								corriger. <b>Ce n’est pas l’approche que je développe.</b>
							</p>
							<p>
								Pour moi, la géobiologie est avant tout une{' '}
								<b>méthode de lecture des lieux</b>. Elle invite à observer,
								expérimenter et comprendre les interactions entre la géologie,
								l’eau, le vivant, les paysages, les symboles, les traditions et
								la mémoire d’un territoire.
							</p>
							<p>
								Il ne s’agit pas de transformer un lieu, mais d’apprendre à le
								reconnaître, à le décrypter et à comprendre l’histoire qu’il
								raconte.
							</p>

							<h4>Observer les signaux faibles</h4>
							<p>
								Développer un regard attentif sur les indices laissés par la
								nature : formes du paysage, comportement du vivant, eau,
								végétation, atmosphère, symboles ou détails qui passent souvent
								inaperçus.
							</p>
							<h4>Comprendre les interactions</h4>
							<p>
								Découvrir comment la géologie, l’eau, le vivant, les paysages et
								les présences symboliques et subtiles s’influencent mutuellement
								pour donner naissance à l’identité d’un lieu.
							</p>
							<h4>Décrypter le territoire</h4>
							<p>
								Croiser les observations de terrain avec l’histoire locale, le
								patrimoine, les traditions, les légendes et le folklore afin de
								révéler la cohérence profonde d’un paysage.
							</p>
							<h4>Lire l’histoire du lieu</h4>
							<p>
								Comprendre la mémoire vivante d’un territoire en faisant
								dialoguer les observations, la culture, le vivant et les mondes
								subtils, sans chercher des certitudes mais une lecture sensible
								et éclairée.
							</p>
							<a
								href='/geobiologie'
								className='cta cta-primary'
								title='Découvrir ma vision de la géobiologie et de l’exploration des lieux'
							>
								Découvrir la géobiologie
							</a>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<h2>Mon parcours</h2>
							<p>
								Mon parcours pour en arriver là est beaucoup moins linéaire.
							</p>
							<p>
								Développeur d’applications informatiques depuis 2004, curieux et
								autodidacte, j’aime apprendre et comprendre.
							</p>
							<p>
								La crise covid m’a permis de (re)prendre conscience que j’ai
								envie d’autres choses. J’ai envie d’explorer les mondes subtils,
								ondulatoires et vibrants, pour mieux comprendre et appréhender,
								de manière holistique, le mystère de la vie et du vivant.
							</p>
							<p>
								J’aime être au contact de la Nature, de la faune, de la flore,
								des roches... Passionné également de musique, d’Histoire et de
								légendes, j’ai trouvé dans la <em>géobiologie</em> et le
								chamanisme des réponses résonnant avec ce qui m’anime.
							</p>
							<p>
								Indépendant, souvent à contre-courant, j’aime sortir des
								sentiers battus et explorer. Ce qui me motive, découvrir,
								apprendre, comprendre et partager.
							</p>
							<p>
								Toujours en cheminement, je souhaite mettre mes connaissances au
								service de tous, et ainsi, guider, accompagner et protéger le
								vivant, les êtres vivants, la vie et notre planète, la Terre.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								En 2020, je découvre le <em>Reiki Usui</em> aux côtés de{' '}
								<a
									href='https://marie.cophignon.net/'
									title='Accédez au site de mon épouse, Marie'
									target='_blank'
									rel='noopener noreferrer'
								>
									mon épouse Marie
								</a>
								, auprès de{' '}
								<a
									href='https://www.reflexologie-carolejacob.fr/'
									title='Accédez au site de Carole Jacob, réflexologue et maître Reiki Usui enseignante'
									target='_blank'
									rel='noopener noreferrer'
								>
									Carole Jacob
								</a>
								. Cette première expérience m’ouvre à une perception plus
								sensible du vivant et des mondes subtils. J’expérimente alors
								des ressentis nouveaux qui éveillent ma curiosité et me donnent
								envie d’aller plus loin. En septembre 2023, nous poursuivons ce
								cheminement jusqu’à devenir tous les deux maîtres Reiki.
							</p>

							<p>
								En 2021, une nouvelle étape importante commence avec mon
								initiation à la <em>géobiologie auprès de Catherine Leveau</em>.
								C’est un véritable tournant. Je découvre une autre manière
								d’observer les lieux, de percevoir ce qui les traverse et de
								m’interroger sur les interactions entre leur environnement, le
								vivant et les phénomènes subtils. La géobiologie devient
								progressivement une véritable passion et le point central de mes
								explorations.
							</p>

							<p>
								En 2023, je reçois les <em>9 rites du Munay-Ki</em>. Pendant un
								peu plus d’un an,{' '}
								<a
									href='https://www.facebook.com/subileau.psychosomato/'
									title='Accédez à la page Facebook de Ludivine Subileau'
									target='_blank'
									rel='noopener noreferrer'
								>
									Ludivine Subileau
								</a>{' '}
								me transmet également des enseignements chamaniques d’Amérique
								du Sud. Cette expérience élargit encore mon regard, notamment
								sur les symboles, les traditions et les différentes manières
								dont les cultures appréhendent leur relation au vivant et au
								monde qui les entoure.
							</p>

							<p>
								En février 2025, je participe à mon premier salon du bien-être à{' '}
								<strong>Saint-Lambert-des-Bois</strong>, où je donne une
								conférence sur la géobiologie. J’y rencontre Marjorie Dufresne
								et découvre à travers nos échanges la{' '}
								<em>communication animale</em>. Quelques mois plus tard, en
								octobre 2025, je participe au premier module du cycle proposé
								par{' '}
								<a
									href='https://www.quanticienne-chamanique.fr/'
									title='Découvrir le site Emmanta d’Eaubonne, quanticienne chamanique'
									target='_blank'
									rel='noopener noreferrer'
								>
									Emmanta d’Eaubonne
								</a>
								. Cette pratique ouvre une nouvelle voie d’exploration de notre
								relation au vivant, que je continue aujourd’hui à approfondir.
							</p>

							<p>
								Je me suis également formé au{' '}
								<em>test musculaire de kinésiologie</em> auprès de{' '}
								<a
									href='https://ecoledesartsdusouffle.com/nos-formations/initiation-art-test-musculaire/'
									title='Découvrir l’École des Arts du Souffle et l’initiation au test musculaire'
									target='_blank'
									rel='noopener noreferrer'
								>
									Sonia Blaise, à l’École des Arts du Souffle
								</a>
								, dans les Ardennes. J’y ai découvert un outil permettant
								d’interroger les réactions du corps et d’explorer ce qui peut
								être difficile à percevoir ou à verbaliser. Cette approche
								complète ma pratique de la géobiologie en m’offrant une autre
								manière d’observer la relation entre une personne et un lieu,
								notamment les ressentis ou les réactions que celui-ci peut
								susciter et dont la personne n’a pas nécessairement conscience.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								Je suis originaire de Sedan, une petite ville atypique du
								nord-est de la France, proche de la Belgique, au passé glorieux.
								À l’ombre de son château fort, terre bercée de contes et
								légendes anciennes, au cœur de la vaste forêt des Ardennes, j’ai
								été attiré, très jeune, par l’Histoire.
							</p>
							<p>
								Grâce à mes connaissances en informatique et l’essor d’internet,
								j’accède à une mine d’informations intarissable qui me permet
								d’assouvir mon inépuisable soif d’apprendre. Ainsi, je me suis
								passionné pour les sites sacrés et les anciennes civilisations
								et plus particulièrement la culture celte et amazonienne. Cela,
								m’a permis de me rendre compte, de l’existence d’un savoir
								ancestral et universel.
							</p>
							<p>
								Dans ma quête perpétuelle de connaissances, au hasard de
								rencontres, j’ai eu l’opportunité de :
							</p>
							<ul>
								<li>Découvrir la lithothérapie et la radiesthésie</li>
								<li>Développer mon intuition</li>
								<li>
									Me former à la{' '}
									<a
										href='/geobiologie'
										title='Lien vers la partie géobiologie de mon site.'
										target='_self'
									>
										<em>géobiologie</em>
									</a>{' '}
									et au Reiki Usui
								</li>
								<li>
									D’être initié aux <em>rites chamaniques du Munay-Ki</em>
								</li>
								<li>
									Recevoir des enseignements <em>chamaniques</em>
								</li>
								<li>
									D’apprendre à pratiquer le test musculaire{' '}
									<em>de Kinésiologie</em>
								</li>
							</ul>
							<p>
								Je serai heureux de partager avec vous ces passions qui ont
								changé mon regard sur la vie et d’explorer avec vous les mondes
								subtils.
							</p>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default QuiSuisJe;
