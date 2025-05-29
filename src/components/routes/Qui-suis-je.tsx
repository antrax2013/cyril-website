import MetaTag from '../tools/MetaTag';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import ImgMoi from '../../assets/moi.png';
import '../../scss/routes/QuiSuisJe.scss';

const QuiSuisJe = () => {
	const head = () => {
		return (
			<MetaTag
				title={import.meta.env.VITE_META_MAIN_TITLE || 'Qui suis-je ?'}
				description='Guide des mondes subtils, je vous propose de partager mes connaissances des mondes subtils, géobiologie, chamanisme... et ainsi vous guider, vous accompagner, sur votre chemin de vie dans le respect des énergies qui nous entourent. Cyril COPHIGNON'
				resume='Guide des mondes subtils, je mets mes connaissances des mondes subtils à votre service pour vous accompagner sur votre chemin de vie.'
				forceTitle={true}
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='QuiSuisJe'>
				<article>
					<h1>Qui suis-je ?</h1>
					<section className='paragraphe-1'>
						<aside>
							<div>
								<img
									src={ImgMoi}
									className='img-qui-suis-je-moi'
									alt='Cyril Cophignon, guide des mondes subtils.'
									title='Cyril Cophignon, guide des mondes subtils.'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
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
								Je me suis, dans un premier temps, en 2020, avec{' '}
								<a
									href='https://marie.cophignon.net'
									title='Accédez par ce lien au site de mon épouse, Marie'
									target='_blank'
								>
									mon épouse
								</a>
								, formé au{' '}
								<a
									href='https://marie.cophignon.net/reiki'
									title='Accédez par ce lien au site de mon épouse, qui vous présente ce qu’est le Reiki Usui'
									target='_blank'
								>
									Reiki Usui
								</a>
								. Et ensemble, en septembre 2023, nous sommes devenus maître
								Reiki. Merci{' '}
								<a
									href='https://www.reflexologie-carolejacob.fr/'
									title='Accédez par ce lien au site de Carole Jacob, réflexologue et maître Reiki Usui enseignante.'
									target='_blank'
								>
									Carole
								</a>
								.
							</p>
							<p>
								Le <em>Reiki</em> m’a permis de m’ouvrir aux mondes du subtil et
								de l’énergétique. Je ne remercierai jamais assez cette porte qui
								s’est ouverte à moi. Grâce à elle, j’ai pu expérimenter et
								découvrir des sensations nouvelles, enrichissantes me donnant
								envie d’aller plus loin.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								Je suis originaire de Sedan, une petite ville atypique du
								nord-est de la France, proche de la Belgique, au passé glorieux.
								A l’ombre de son château fort, terre bercée de contes et
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
									Etre initié aux <em>rites chamaniques du Munay-Ki</em>
								</li>
								<li>
									Recevoir des enseignements <em>chamaniques</em>
								</li>
							</ul>
							<p>
								Je serai heureux de partager avec vous ces passions qui ont
								changé mon regard sur la vie et de vous accompagner, de vous
								guider sur votre chemin de vie.
							</p>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default QuiSuisJe;
