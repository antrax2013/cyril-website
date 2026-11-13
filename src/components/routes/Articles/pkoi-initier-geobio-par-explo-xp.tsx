import CtaAgenda from '../../fragments/Ctas/Agenda';
import CtaExplorateurInv from '../../fragments/Ctas/ExplorateurInvisible';
import CtaGeobiologie from '../../fragments/Ctas/Geobiologie';
import McImage from '../../fragments/McImage/McImage';
import ParagraphSeparator from '../../tools/Paragraph-Separator';
import Image1 from '../../../assets/articles/geobio-pratique-experience/Conversation en forêt ensoleillée.jpg';

const PkoiInitierGeobioParExploXp = () => {
	return (
		<>
			<p>
				Vous souhaitez découvrir la géobiologie, mais vous vous demandez par où
				commencer ? Lire et écouter des témoignages peut apporter des repères.
				Mais pour apprendre à observer un lieu et à se faire sa propre idée,
				l’expérience sur le terrain est essentielle.
			</p>
			<p>
				Un stage d’initiation à la géobiologie permet de passer progressivement
				de la curiosité à l’exploration. On prend le temps de regarder, de
				questionner et de comparer ses observations, sans chercher à appliquer
				une réponse toute faite.
			</p>
			<div className='cta-container'>
				<CtaExplorateurInv /> <CtaAgenda />
			</div>
			<h2>Découvrir la géobiologie en partant des lieux</h2>
			<p>
				Un lieu ne se résume pas à une liste de phénomènes à rechercher. Son
				histoire, sa géographie, son environnement et les activités humaines
				participent à son identité.
			</p>

			<p>
				L’explorer, c’est d’abord prendre le temps de l’approcher. Que
				remarque-t-on ? Quels éléments attirent l’attention ? Quelles questions
				suscite-t-il ? Une carte, une archive ou un détail du paysage peuvent
				ouvrir des pistes, sans donner à eux seuls une explication définitive.
			</p>
			<p>
				Cette façon de faire invite à rester curieux. Elle évite d’appliquer
				partout la même grille de lecture et laisse une place à ce que le lieu
				nous donne réellement à observer.
			</p>
			<div className='cta-container'>
				<CtaGeobiologie className={'cta-tertiary'} />
			</div>
			<ParagraphSeparator />
			<h2>Pourquoi apprendre par l’expérience ?</h2>
			<p>
				Les apports théoriques donnent des repères et du vocabulaire.
				L’exploration permet ensuite de les mettre en relation avec un lieu
				concret. On peut observer, formuler des questions, essayer une approche
				et revenir sur ce que l’on a perçu.
			</p>
			<p>
				Cette démarche demande de garder du recul. Un ressenti est une
				expérience personnelle à examiner, pas une preuve à lui seul. Le
				comparer à d’autres observations et en discuter aide à distinguer ce que
				l’on a vécu, ce que l’on a constaté et les interprétations possibles.
			</p>
			<p>
				Le terrain devient ainsi un espace d’apprentissage : il ne fournit pas
				nécessairement une réponse immédiate, mais il aide à faire évoluer son
				regard.
			</p>
			<h2>Peut-on commencer sans expérience préalable ?</h2>
			<p>
				Oui. Un stage d’initiation s’adresse aussi aux personnes qui découvrent
				la géobiologie. Il n’est pas nécessaire d’avoir déjà pratiqué ou de
				savoir à l’avance ce que l’on va percevoir.
			</p>
			<div className='img-container'>
				<McImage
					path={Image1}
					className={'img'}
					alt={
						'Cyril échange avec une stagiaire pendant une initiation à la géobiologie.'
					}
				/>
			</div>
			<legend>
				Cyril échange avec une stagiaire pendant une initiation à la
				géobiologie.
			</legend>
			<p>
				L’idée n’est pas de reproduire le ressenti de quelqu’un d’autre, ni
				d’obtenir un résultat attendu. Chacun avance à son rythme, avec sa
				curiosité et son attention. Les échanges avec le groupe permettent de
				confronter les points de vue sans imposer une interprétation unique.
			</p>
			<ParagraphSeparator />
			<h2>Qu’apprend-on en explorant un lieu ?</h2>
			<p>
				Apprendre la géobiologie par l’exploration, ce n’est pas seulement
				acquérir des notions. C’est aussi développer une façon d’aborder un lieu
				: prendre le temps de l’observer, se poser des questions, accueillir ses
				impressions et les examiner avec discernement.
			</p>
			<p>
				Au fil de l’expérience, on peut gagner en confiance et en autonomie. On
				apprend à construire sa propre lecture d’un lieu, tout en restant ouvert
				à ce qui peut la nuancer.
			</p>
			<h2>Du premier stage à une pratique plus autonome</h2>
			<p>
				C’est l’esprit du cycle <b>« Explorateur de l’invisible »</b> : proposer
				une initiation progressive, où les apports et l’expérience du terrain se
				complètent. Les modules permettent d’avancer pas à pas et de développer
				ses propres repères.
			</p>
			<div className='cta-container'>
				<CtaExplorateurInv /> <CtaAgenda />
			</div>
		</>
	);
};

export default PkoiInitierGeobioParExploXp;
