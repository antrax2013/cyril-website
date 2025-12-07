import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Actualites.scss';
import MetaTag from '../tools/MetaTag';

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
							<h3>Portes ouvertes coffret d'Alumine à Plaisir (78)</h3>
							<p>
								Je serai présent lors des portes ouvertes des espaces bien-être
								Vibration et Libellule du{' '}
								<a
									href='https://coffret-alumine.art/fr/'
									title='Cliquez sur ce lien pour découvrir la boutique en ligne'
									target='_blank'
								>
									<em>coffret d’Alumine</em>
								</a>{' '}
								<p>
									A cette occasion, et accompagné de nombreux thérapeutes et
									particiens oeuvrant dans ces espaces, j'animerai 4 conférences
									d’introduction à la Géobiologie.
								</p>
								<ul>
									<li>Samedi 13/12 à 14h00</li>
									<li>Dimanche 14/12 à 15h00</li>
									<li>Samedi 20/12 à 14h00</li>
									<li>Dimanche 21/12 à 14h00</li>
								</ul>
								<p>
									<a href='https://marie.cophignon.net/massage-assis-methode-eas'>
										Marie, mon épouse, Massothérapeute énergétique,
									</a>{' '}
									proposera des massages assis selon la méthode de l’Ecole des
									Arts du souffle (EAS®).
								</p>
							</p>
							<a
								href='https://www.facebook.com/permalink.php?story_fbid=pfbid02aT94GYPdw9ZWN5AziFGhzcs71G1KVqbAP1hUUyCnowr6Dzg6mw3HP6WZbe2ghXTFl&id=61573954084460'
								target='_blank'
								title='Cliquez ici pour en savoir plus sur les portes ouvertes.'
								className='cta cta-secondary'
							>
								En savoir plus
							</a>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<h2>
							Initiation à la <em>Géobiologie</em> - Explorateur de l’invisible
						</h2>
						<section className='paragraphe-content'>
							<h3>1er trimrestre 2025</h3>
							<p>
								Pour cette nouvelle année, je proposerai deux sessions des 4
								modules de mon initiation à la <em>Géobiologie</em>, Explorateur
								de l’invisible, une à l’espace Libellule de Coffret d'Alumine à
								Plaisir et l'autre au cabinet de Carole Jacob à Guyancourt.{' '}
							</p>
							<p>
								Je vous accueillerai, dans ces espaces, en groupe restreint (4-6
								pers max.), pour pouvoir vous accompagner au mieux. Le tarif
								sera de 60€ par module ou 200€ pour les 4.
							</p>
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
							<p className='txt-center txt-warning'>
								⚠️ Attention réservation <b>obligatoire</b> ⚠️
							</p>
							<a
								href='/geobiologie#invisible'
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
					<section className='paragraphe-3'>
						<h2>Sorties</h2>
						<section className='paragraphe-content'>
							<p>
								<i>
									Aucune sortie n'est encore planifiée pour cette nouvelle année
									à ce jour. La prochaine devrait avoir lieu au printemps en
									avril ou en mai.
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
