import Cta from '../../fragments/Ctas/Cta';
import CtaExplorateurInv from '../../fragments/Ctas/ExplorateurInvisible';
import ParagraphSeparator from '../../tools/Paragraph-Separator';

const PortesOuvertesBBNov2026 = () => {
	return (
		<>
			<p>
				Le dimanche 22 novembre 2026, le cabinet Blowball, à Guyancourt, a
				ouvert ses portes pour une matinée de rencontres et de découvertes avec
				ses praticiens. Une quinzaine de visiteurs sont venus échanger avec nous
				et découvrir nos activités.
			</p>
			<p>
				J’y ai présenté une conférence autour de la fontaine Saint-Sauveur de
				Maurepas, intitulée « Explorer un lieu oublié… ». J’ai partagé ma
				manière d’aborder un lieu en croisant les observations de terrain, les
				recherches historiques et les perceptions géobiologiques.
			</p>
			<p>
				La conférence a été bien accueillie. Les visiteurs ont semblé apprécier
				la matinée, et chaque praticien a pu présenter son activité.
			</p>
			<h2>De Holda au feu sacré : un cheminement symbolique</h2>
			<p>
				Une question a porté sur un enchaînement d’images évoqué pendant la
				conférence : Holda et les vestales, les vestales de Rome, le feu sacré
				et deux figures portant le nom de Brigitte.
			</p>
			<p>
				Dans ma lecture des écrits de Yann Lipnick, Holda, ou Dame Holle, est
				associée à l’air et à des présences qu’il nomme les vestales. Le mot m’a
				ensuite fait penser aux vestales de Rome, gardiennes du feu sacré. De
				là, j’ai établi un rapprochement avec sainte Brigitte de Kildare,
				associée à une tradition de feu sacré, puis avec une autre sainte
				Brigitte : Brigitte de Suède, fondatrice de l’ordre du Saint-Sauveur.
			</p>
			<p>
				Cette succession ne décrit pas une continuité historique entre ces
				figures. C’est un cheminement par associations et correspondances, qui
				m’a ramené au nom de la fontaine Saint-Sauveur. Pour moi, ces éléments
				disjoints prennent ensemble une forte résonance émotionnelle, comme une
				confirmation intime de ma lecture du lieu.
			</p>
			<p>
				La question m’a toutefois montré que ce fil est difficile à suivre
				lorsqu’il n’est pas explicité. Ce qui se relie spontanément dans mon
				expérience peut sembler abrupt à l’auditoire. Il me reste donc à mieux
				faire comprendre comment ces images se répondent et pourquoi elles ont
				leur place dans cette exploration.
			</p>
			<h2>Des échanges autour des initiations en géobiologie</h2>
			<p>
				Les échanges se sont prolongés autour du cycle « Explorateur de
				l’invisible ». Plusieurs personnes ont manifesté leur intérêt pour ces
				initiations et l’envie d’y participer. Une suite encourageante à cette
				matinée de rencontres.
			</p>
			<p>
				La matinée a aussi été l’occasion de faire découvrir un outil de
				géobiologie : une dame a gagné un lobe de Hartmann que j’avais fabriqué
				artisanalement. J’ai pu lui en expliquer brièvement le fonctionnement et
				l’utilisation.
			</p>
			<p>
				J’ai apprécié le format de ces portes ouvertes : les visiteurs venaient
				avec un intérêt réel pour au moins l’un des praticiens. Cela a favorisé
				des échanges ciblés autour de nos activités.
			</p>
			<ParagraphSeparator />
			<h2>Poursuivre l’exploration</h2>
			<p>
				Les correspondances évoquées pendant la conférence ne représentent
				qu’une partie de l’exploration de la fontaine Saint-Sauveur. Pour mieux
				comprendre un lieu, je mets en relation les observations de terrain, son
				histoire, les cartes et les perceptions géobiologiques. C’est l’ensemble
				de ces pistes qui permet peu à peu d’en composer une lecture plus
				complète, sans réduire le lieu à une seule interprétation.
			</p>
			<p>
				Cette démarche est au cœur du cycle{' '}
				<b>« Explorateur de l’invisible »</b>. Les initiations proposent
				d’apprendre progressivement à observer un lieu, à mener ses propres
				recherches et à relier les éléments recueillis.
			</p>
			<p>Pour aller plus loin :</p>
			<div className='cta-container'>
				<CtaExplorateurInv />{' '}
				<Cta
					link={'/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas'}
					title={
						'Lire l’intégralité de l’étude géobiologique et subtile autour de la fontaine Saint-Sauveur'
					}
					ctaText={'Découvrir l’étude autour de la fontaine Saint-Sauveur'}
					ctaLinkClassName='cta-secondary'
				/>
			</div>
		</>
	);
};

export default PortesOuvertesBBNov2026;
