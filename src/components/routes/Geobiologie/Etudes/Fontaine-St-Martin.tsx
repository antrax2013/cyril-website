import SharePopup from '../../../tools/SharePopup';
import ImgCC from '../../../../assets/Cc_by-nc-nd_icon.svg';
import ParagraphSeparator from '../../../tools/Paragraph-Separator';
import photoFontaine from '../../../../assets/géobiologie/etudes/yvelines/jouars/fontaine st martin/fontaine-st-martin-jouars.jpg';
import photoPlaine from '../../../../assets/géobiologie/etudes/yvelines/jouars/fontaine st martin/plaine-de-jouars-depuis-l-eglise-st-martin-philippe-milbault.jpg';

import '../../../../scss/routes/Geobiologie/Etudes/FontaineStMartin.scss';

const FontaineStMartin = () => {
	const photoPlaineURL = 'https://maps.app.goo.gl/dpnwA11JyKtpNqDq9';
	return (
		<>
			<div className='FontaineStMartin'>
				<div className='article'>
					<h1>
						Fontaine Saint-Martin de Jouars-Pontchartrain : une future
						exploration géobiologique
					</h1>
					<legend>
						<a
							href='https://fr.wikipedia.org/wiki/Licence_Creative_Commons#Sept_licences_régulièrement_utilisées'
							target='_blank'
						>
							<img
								className='ImgCC'
								src={ImgCC}
								alt='étude géobiologique publiée sous Licence Creative Commons BY-NC-ND'
								title='étude géobiologique publiée sous Licence Creative Commons BY-NC-ND'
							/>
						</a>
						<section className='icon-panel'>
							<SharePopup
								url={window.location.href}
								title='La fontaine Saint‑Martin - étude géobiologique'
							/>
						</section>
					</legend>

					<section className='paragraphe-1'>
						<aside>
							<div>
								<a
									href={photoPlaineURL}
									target='_blank'
									rel='noopener noreferrer'
								>
									<img
										src={photoPlaine}
										className='img-photo-plaine-fontaine-st-martin'
										alt="Photo de Philippe MILBAULT de mai 2021 de la plaine de Jouars vue depuis l'église St-Martin."
										title="Etude géobiologique - Photo de Philippe MILBAULT datant de mai 2021 de la plaine de Jouars vue depuis l'église St-Martin."
										loading='lazy'
									/>
								</a>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Au milieu de la plaine de Jouars, presque cachée par les hautes
								herbes, se trouve une petite fontaine que l'on pourrait
								facilement manquer : la fontaine Saint-Martin.
							</p>
							<blockquote>
								Certains lieux se font oublier sans pour autant perdre leur
								histoire.
							</blockquote>
							<p>
								Située à proximité de l'église du même nom, remontant aux XIIe
								et XIIIe siècle, elle se trouve sur un territoire ancien, non
								loin de la ferme d'Ithe et du site antique de Diodurum. Le
								chemin qui la longe suit une ancienne route romaine traversant
								la plaine de Jouars.
							</p>

							<p>
								Discrète aujourd'hui, la fontaine s'inscrit donc dans un paysage
								parcouru et occupé depuis des siècles.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<h2>Une étonnante ressemblance</h2>
							<p>
								Lorsque j'ai découvert la fontaine Saint-Martin, sa ressemblance
								avec un autre lieu m'a immédiatement interpellé : la fontaine
								Saint-Sauveur de Maurepas.
							</p>
							<p>
								La forme de l'édicule, son ouverture voûtée, la source et même
								le caractère discret du lieu évoquent fortement Saint-Sauveur.
								Cette ressemblance est d'ailleurs connue localement, la fontaine
								Saint-Martin étant parfois présentée comme la « sœur jumelle »
								de celle de Maurepas.
							</p>
							<p>
								La fontaine Saint-Sauveur a déjà fait l'objet d'une étude
								géobiologique. Nous y avions notamment observé une organisation
								énergétique complexe.
							</p>
							<a
								href='/contact?sujet=sortie-géobiologie'
								className='cta cta-secondary'
								title="Lien pour accéder à l'étude géobiologique complète de la fontaine St-Sauveur"
							>
								Découvrir l'étude de la fontaine St-Sauveur
							</a>
						</section>
						<aside>
							<div>
								<img
									src={photoFontaine}
									className='img-photo-fontaine-st-martin'
									alt='Photo de la fontaine St-Martin été 2026.'
									title='Etude géobiologique - Photo de la fontaine St-Martin été 2026.'
									loading='lazy'
								/>
							</div>
						</aside>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<p>Alors forcément, une question se pose.</p>
							<p>
								<b>
									Ces deux fontaines ne partagent-elles qu'une ressemblance
									architecturale ?
								</b>
							</p>
							<p>
								La fontaine Saint-Sauveur a déjà fait l'objet d'une étude
								géobiologique. Nous y avions notamment observé une organisation
								énergétique complexe.
							</p>

							<h2>Une étude géobiologique à venir</h2>
							<p>C'est justement tout l'intérêt de la prochaine exploration.</p>
							<p>
								La fontaine Saint-Martin fera l'objet d'une étude collective
								lors de notre prochaine sortie géobiologique à
								Jouars-Pontchartrain.
							</p>
							<p>
								L'objectif sera d'observer, de ressentir, de relever les
								phénomènes présents et de confronter les perceptions pour
								essayer de comprendre ce que cette petite fontaine peut encore
								nous raconter.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<h2>Participer à l'exploration</h2>
							<p>
								La fontaine Saint-Martin sera le terrain de notre prochaine
								sortie d'exploration géobiologique à Jouars-Pontchartrain.
							</p>
							<p>
								<b>Dimanche 18 octobre 2026 — de 9h à 12h30</b>
							</p>
							<p>
								Une matinée pour mettre en pratique la lecture d'un lieu,
								confronter les perceptions et participer directement à une étude
								géobiologique collective.
							</p>
							<a
								href='/contact?sujet=sortie-géobiologie'
								className='cta cta-primary'
								title='Lien pour réserver une place pour l’exploration géobiologique de terrain en nature'
							>
								Participer à la sortie
							</a>{' '}
							<a
								href='/actualites'
								className='cta cta-secondary'
								title='Lien pour voir l’agenda des sorties géobiologie'
							>
								Voir l'agenda
							</a>
							<br />
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default FontaineStMartin;
