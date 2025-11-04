import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Actualites.scss';
import MetaTag from '../tools/MetaTag';
import { Adresse } from '../tools/Adresse';

const Actualites = () => {
	const head = () => {
		return (
			<MetaTag
				title='Actualités'
				description='Les actualités de mon activités de guide des mondes subtiles.'
				resume='Les actualités de mon activités de guide des mondes subtiles, sur cette page j’évoquerais les différents événements, salon et formation aquels je participerai.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='actualites'>
				<article>
					<h1>Les actualités</h1>
					<section className='paragraphe-1'>
						<h2>Conférences, Salons et animations</h2>
						<section className='paragraphe-content'>
							<h3>
								Le 23 novembre 2025 - Salon L’être au naturel hotel Mercure à
								Maurepas (78)
							</h3>
							<p>
								Je serai présent au salon{' '}
								<a
									href='https://fb.me/e/1PYGeWXkGl'
									title='Cliquez sur ce lien pour plus d’informations sur le salon L’être au naturel à Maurepas'
									target='_blank'
								>
									L’être au naturel
								</a>
								, à l’hotel Mercure à Maurepas pour accompagner{' '}
								<a
									href='https://marie.cophignon.net'
									title='Cliquez sur ce lien pour plus d’informations sur l’univers de Marie COPHIGNON, Massothérapeute énergétique'
									target='_blank'
								>
									<em>Marie</em>
								</a>
								, mon épouse. N'hésitez pas à venir échanger avec nous.
							</p>
						</section>
						<section className='paragraphe-content'>
							<h3>
								En décembre 2025 - Portes ouvertes coffret d'Alumine à Plaisir
								(78)
							</h3>
							<p>
								Je serai présent lors des portes ouvertes du show room{' '}
								<a
									href='https://coffret-alumine.art/fr/'
									title='Cliquez sur ce lien pour découvrir la boutique en ligne'
									target='_blank'
								>
									<em>coffret d’Alumine</em>
								</a>{' '}
								où je ferai une ou plusieurs coférences sur la Géobiologie.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<h2>
							Initiation à la <em>Géobiologie</em> - Explorateur de l’invisible
						</h2>
						<section className='paragraphe-content'>
							<h3>4ème trimrestre 2025</h3>
							<p>
								Pour cette rentrée, je proposerai une session des 4 modules de
								mon initiation à la <em>Géobiologie</em>, Explorateur de
								l’invisible, au cabinet de Carole Jacob à Guyancourt.{' '}
							</p>
							<p>
								Je vous accueillerai, dans ce nouvel espace, en groupe restreint
								(4-6 pers max.), pour pouvoir vous accompagner au mieux. Le
								tarif sera de 60€ par module ou 200€ pour les 4.
							</p>
							<ul>
								<li>
									Module 1 - La découverte : Dimanche 19 octobre de 09h00 à
									12h30
								</li>
								<li>
									Module 2 - Les premières recherches : Dimanche 19 octobre de
									14h00 à 18h00
								</li>
								<li>
									Module 3 - Les failles et les veines d’eau : Dimanche 16
									novembre de 09h00 à 12h30
								</li>
								<li>
									Module 4 - Les réseaux géomagnétiques de base : Dimanche 16
									novembre de 14h00 à 18h00
								</li>
							</ul>
							<p className='txt-center'>
								<a
									href='/contact'
									target='_blank'
									title='Lien pour réserver un ou plusieurs modules pour l’initiation à la Géobiologie - Explorateur de l’invisible'
									className='txt-warning'
								>
									<span>
										⚠️ Attention réservation <b>obligatoire</b> via ce
										formulaire :{' '}
									</span>
									<u>formulaire</u> ⚠️
								</a>
							</p>
							<Adresse
								title='Cabinet Blowball'
								floor='Rez-de-chaussée'
								streetAddress='1, rue Le Corbusier'
								postalCode='78280'
								addressLocality='Guyancourt'
							/>
							<p>
								<u>NB:</u>{' '}
								<i>
									Je n’abandonne pas les initiations à l’espace Vibrations de
									Floriane à Plaisir. En fonction des demandes, il n’est pas
									exclu que j’y organise des sessions. J’envisage d’y proposer
									des sessions sur une journée ou un weekend-end entier.
								</i>
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<h2>Sorties</h2>
						<section className='paragraphe-content'>
							<p>
								<i>
									Aucune sortie n'est planifiée pour cette rentrée à ce jour. La
									prochaine devrait avoir lieu au printemps 2026.
								</i>
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<h2>Autres</h2>
						<section className='paragraphe-content'>
							<h3>Octobre 2025</h3>
							<p>
								Pour cette année, je me suis formé à la communication animale
								avec Emmanta D’Eaubonne à Magny-les-hameaux. J'ai toujours été
								très proche des animaux. J'ai hâte de vous proposer
								prochainement des sessions pour que je puisse m'exercer.
							</p>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default Actualites;
