import ParagraphSeparator from '../tools/Paragraph-Separator';
import '../../scss/routes/Actualites.scss';
import MetaTag from '../tools/MetaTag';

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
								<li>
									<s>Dimanche 22 février de 09h00 à 12h30 - Plaisir (78)</s>{' '}
									<i>Annulé</i>
								</li>
								<li>Dimanche 15 mars de 09h00 à 12h30 - Guyancourt (78)</li>
							</ul>
							<h4>Module 2 - Les premières recherches </h4>
							<ul>
								<li>
									<s>Dimanche 22 février de 14h00 à 18h30 - Plaisir (78)</s>{' '}
									<i>Annulé</i>
								</li>
								<li>Dimanche 15 mars de 14h00 à 18h30 - Guyancourt (78)</li>
							</ul>
							<h4>Module 3 - Les failles et les veines d’eau</h4>
							<ul>
								<li>Dimanche 19 avril de 09h00 à 12h30 - Guyancourt (78)</li>
							</ul>
							<h4>Module 4 - Les réseaux géomagnétiques de base</h4>
							<ul>
								<li>Dimanche 19 avril de 14h00 à 18h30 - Guyancourt (78)</li>
							</ul>
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
					</section>
					<ParagraphSeparator />
					<section>
						<h2>
							Initiation à la <em>Géobiologie</em> - Explorateur de l’invisible
							suite...
						</h2>
						<p>
							Je suis en train d’imaginer la continuité de l’initiation{' '}
							<strong>Explorateur de l’invisible</strong>. La forme reste à
							définir : immersion en nature, exploration chez un hôte… ou
							peut‑être un mélange des deux ou les deux.
						</p>
						<p>
							L’objectif serait d’offrir, aux personnes ayant complété les
							quatre modules, l’opportunité de venir, sur le terrain, avec moi,
							pour étudier un lieu inspirant ou ayant besoin d'être rééquilibré.
						</p>
						<ul>
							<li>
								Approfondir des notions vues en initiation grâce à des cas
								concrets et variés.
							</li>
							<li>
								Explorer des environnements différents : forêt, maison, terrain,
								lieu chargé d’histoire…
							</li>
							<li>
								Apprendre à structurer une étude complète : observation,
								mesures, interprétation, restitution.
							</li>
							<li>
								Gagner en confiance dans sa pratique et dans ses ressentis
								subtils.
							</li>
							<li>
								Créer des liens avec d’autres passionnés, favorisant l’entraide
								et la progression.{' '}
							</li>
							<li>
								Profiter d’un espace bienveillant pour poser toutes ses
								questions et lever ses doutes.
							</li>
						</ul>
						<p>
							Je crois profondément que l’énergie d’un groupe, lorsqu’il est
							restreint et harmonieux, ouvre des portes que l’on ne peut
							franchir seul. Le petit groupe devient alors un cercle
							d’exploration, de soutien et de transformation. C’est pour cela
							que je privilégie toujours les petits groupes, où chacun peut
							trouver sa place, s’exprimer et progresser à son rythme sans
							jugement.
						</p>
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
				</div>
			</div>
		</>
	);
};

export default Actualites;
