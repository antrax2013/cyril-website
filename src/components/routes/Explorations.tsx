import ParagraphSeparator from '../tools/Paragraph-Separator';
import SharePopup from '../tools/SharePopup';

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
							<a href='/mon-approche' className='cta'>
								Découvrir mon approche
							</a>
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
							<a href='/geobiologie' className='cta'>
								Découvrir la géobiologie
							</a>
						</div>
					</div>
					<ParagraphSeparator />
					<div>
						<h2>Mes études de lieux</h2>
						<h3>Le lavoir de la Source aux Fées — Saint‑Forget</h3>
						<p>
							À Saint‑Forget, un lavoir se cache dans la forêt, près d’une
							source entourée de récits et de légendes. Son emplacement étonnant
							invite à remonter son histoire et à découvrir ce que le lieu
							raconte sur le terrain.
						</p>
						<div className='cta-container'>
							<a
								href='/etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees'
								className='cta'
							>
								Découvrir l'étude
							</a>
						</div>
						<h3>La fontaine Saint‑Sauveur — Maurepas</h3>
						<p>
							Discrète sous la végétation, la fontaine Saint‑Sauveur fait partie
							de ces lieux que l’on pourrait traverser sans les voir. Son
							exploration m’a conduit à rechercher la place de cette source dans
							l’histoire de Maurepas et à observer ce qui subsiste aujourd’hui.
						</p>
						<div className='cta-container'>
							<a
								href='/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas'
								className='cta'
							>
								Découvrir l'étude
							</a>
						</div>
						<h3>
							La fontaine Saint‑Martin — Jouars‑Pontchartrain · étude à venir
						</h3>
						<p>
							Près de l’église Saint‑Martin, cette fontaine s’inscrit dans un
							paysage marqué par d’anciens chemins et la proximité de Diodurum.
							Les recherches historiques ont déjà ouvert plusieurs pistes ;
							l’exploration sur le terrain viendra nourrir la suite de
							l’enquête.
						</p>
						<div className='cta-container'>
							<a
								href='/etudes-geobiologie/yvelines/fontaine-saint-martin-jouars-pontchartrain'
								className='cta'
							>
								Découvrir l'étude
							</a>
						</div>
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
							<a
								href='/initiations/geobiologie/explorateur-de-l-invisible'
								className='cta cta-primary'
							>
								Découvrir le cycle
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Explorations;
