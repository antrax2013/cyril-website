import { explorationCards } from '../entities/explorationCards/exporationCards';
import CardList from '../fragments/CardList/CardList';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import SharePopup from '../tools/SharePopup';
import '../../scss/routes/Explorations.scss';
import CtaMonApproche from '../fragments/Ctas/MonApproche';
import CtaGeobiologie from '../fragments/Ctas/Geobiologie';
import CtaExplorateurInv from '../fragments/Ctas/ExplorateurInvisible';
import CtaAgenda from '../fragments/Ctas/Agenda';

const Explorations = () => {
	return (
		<>
			<div className='Explorations'>
				<div className='article'>
					<div className='hero'>
						<h1>Explorations géobiologiques et lecture des lieux</h1>
						<section className='icon-panel'>
							<SharePopup
								url={window.location.href}
								title='Cyril Cophignon, Explorations géobiologiques et lecture des lieux'
							/>
						</section>
						<p>
							Mes explorations suivent une démarche itérative. Je croise
							l’histoire d’un lieu, son folklore, ses symboles et ses légendes
							locales avec mes observations et mes ressentis sur le terrain.
							Chaque découverte peut soulever de nouvelles questions. Je creuse
							alors les pistes qui émergent, cherche leurs points de convergence
							et suis le fil de l’enquête, qui peut me conduire vers un autre
							lieu.
						</p>
						<p>
							J’explore principalement les Yvelines, mais mes recherches me
							conduisent aussi dans les Alpes et les Ardennes. Cette façon de
							mener l’enquête, entre histoire, terrain et ressenti, est au cœur
							de mon approche.
						</p>
						<div className='cta-container'>
							<CtaMonApproche />
						</div>
					</div>
					<div>
						<h2>La géobiologie au fil des lieux</h2>
						<p>
							La géobiologie est un outil de mes outils pour relier les indices
							et construire une histoire possible du lieu. Une part de cette
							lecture repose sur le ressenti, le subtil, ce qu’on ne peut pas
							toujours vérifier. Je la garde donc ouverte, avec humilité :
							certaines pistes mènent à une impasse ou s’avèrent inexactes. Cela
							fait aussi partie de l’enquête, sans rien retirer au plaisir
							d’explorer.
						</p>
						<div className='cta-container'>
							<CtaGeobiologie className={'cta-tertiary'} />
						</div>
					</div>
					<ParagraphSeparator />
					<div>
						<h2>Mes études de lieux</h2>
						<CardList cards={explorationCards} disableFilters={true} />
					</div>
					<ParagraphSeparator />
					<div>
						<h2>Explorer à votre tour</h2>
						<p>
							Le cycle « Explorateur de l’invisible » permet de découvrir la
							géobiologie par la pratique et de construire progressivement sa
							propre lecture des lieux.
						</p>
						<div className='cta-container'>
							<CtaExplorateurInv />
							<CtaAgenda />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Explorations;
