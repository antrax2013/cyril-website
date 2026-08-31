import SharePopup from '../../tools/SharePopup';

const GeoBioExplorateurInvisible = () => {
	return (
		<>
			<div className='actualites'>
				<div className='article'>
					<div>
						<h1>Initiation à la Géobiologie — Explorateur de l’invisible</h1>
						<section className='icon-panel'>
							<SharePopup url={window.location.href} title='Les actualités' />
						</section>
						<p>
							Entrez dans la géobiologie par l’expérience du terrain avec le
							cycle <strong>« Explorateur de l’invisible »</strong>. Une
							initiation progressive pour apprendre à observer autrement les
							lieux et les interactions invisibles qui les traversent.
						</p>
					</div>
					<aside>
						<a
							href='/actualites'
							className='cta cta-primary'
							title='Lien pour accéder aux actualités et voir les prochaines dates'
						>
							Voir les prochaines dates
						</a>
						{'  '}
						<a
							href='/geobiologie'
							className='cta cta-secondary'
							title='En savoir plus sur la Géobiologie'
						>
							Découvrir la géobiologie
						</a>
					</aside>
					<main>
						<section>
							<h2>Ce que vous apprendrez</h2>
							<p>
								Ce cycle vous transmet les premières clés pour détecter les
								principaux phénomènes géobiologiques, observer leurs
								interactions avec le vivant et comprendre la manière dont ils
								s’organisent dans un lieu. Au fil des modules, vous développez
								une méthode de recherche et vos propres perceptions afin
								d’explorer progressivement de manière autonome.
							</p>
						</section>

						<section>
							<h2>Déroulement des ateliers</h2>
							<p>
								Chaque module dure environ <strong>une demi-journée</strong> et
								se divise en deux temps :
							</p>
							<ul>
								<li>
									<strong>Phase théorique :</strong> transmission des notions
									fondamentales et des protocoles.
								</li>
								<li>
									<strong>Phase pratique :</strong> mise en application directe
									et expérimentation sur le terrain.
								</li>
							</ul>
						</section>

						<section id='programme'>
							<h2>Programme des modules</h2>

							<article className='module'>
								<h3>Module 1 : La découverte</h3>
								<ul>
									<li>Présentation globale de la géobiologie.</li>
									<li>
										Prise en main des outils du géobiologue et compréhension de
										leur fonctionnement.
									</li>
									<li>
										Premier contact avec une énergie subtile : le gardien du
										lieu.
									</li>
								</ul>
							</article>

							<article className='module'>
								<h3>Module 2 : Les premières recherches</h3>
								<ul>
									<li>
										Définition et impacts des cheminées cosmo-telluriques sur le
										vivant.
									</li>
									<li>Apprentissage d'un protocole de recherche dédié.</li>
									<li>
										Détection sur le terrain et perception sensorielle de leurs
										effets.
									</li>
								</ul>
							</article>

							<article className='module'>
								<h3>Module 3 : Les failles et les veines d’eau</h3>
								<ul>
									<li>
										Identification des failles et des cours d’eau souterrains
										ainsi que leurs répercussions.
									</li>
									<li>
										Exercices pratiques de recherche sur le lieu d’initiation.
									</li>
									<li>
										Ressenti et expérimentation des variations énergétiques
										associées.
									</li>
								</ul>
							</article>

							<article className='module'>
								<h3>Module 4 : Les réseaux géomagnétiques de base</h3>
								<ul>
									<li>
										Découverte des principaux réseaux géomagnétiques et de leur
										influence sur les êtres vivants.
									</li>
									<li>Présentation du protocole de recherche ciblé.</li>
									<li>
										Localisation pratique et travail sur la perception
										sensorielle.
									</li>
								</ul>
							</article>
						</section>

						<section>
							<h2>Tarifs et Matériel</h2>
							<p className='price'>
								Module à la carte : 60 € par module
								<br />
								Tarif cycle complet : 200 € les 4 modules pour toute inscription
								à l'intégralité du cycle.
							</p>

							<aside className='callout'>
								<p>
									<strong>Inclus dans le tarif :</strong>
								</p>
								<ul>
									<li>La location de la salle.</li>
									<li>
										Un <strong>lobe de Hartmann artisanal</strong> (fabriqué par
										mes soins), remis lors de votre premier module pour vous
										accompagner durant toutes les phases pratiques.{' '}
										<em>
											Vous restez naturellement libre d'utiliser vos propres
											outils si vous le souhaitez.
										</em>
									</li>
								</ul>
							</aside>
						</section>

						<section>
							<h2>Un accompagnement bienveillant</h2>
							<p>
								Il arrive parfois que nos certitudes, nos croyances ou nos
								hésitations freinent nos ressentis. Je serai à vos côtés à
								chaque étape pour vous guider, vous rassurer et vous aider à
								développer vos propres perceptions à votre rythme.
							</p>
						</section>
					</main>
					<section>
						<h2>Vous souhaitez passer de la curiosité à l’expérimentation ?</h2>
						<p>
							Rejoignez le cycle <strong>« Explorateur de l’invisible »</strong>{' '}
							pour faire vos premiers pas sur le terrain, affiner vos
							perceptions et développer progressivement votre autonomie.
							Consultez les prochaines dates et venez vivre votre première
							exploration.
						</p>
						<aside>
							<a
								href='/actualites'
								className='cta cta-primary'
								title='Lien pour accéder aux actualités et voir les prochaines dates'
							>
								Voir les prochaines dates
							</a>
							{'  '}
							<a
								href='/geobiologie'
								className='cta cta-secondary'
								title='En savoir plus sur la Géobiologie'
							>
								Découvrir la géobiologie
							</a>
						</aside>
					</section>
				</div>
			</div>
		</>
	);
};

export default GeoBioExplorateurInvisible;
