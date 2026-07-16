import { useState } from 'react';

import { Accordion, AccordionTab } from 'primereact/accordion';
import { Galleria } from 'primereact/galleria';

import ParagraphSeparator from '../../../tools/Paragraph-Separator';
import ImgCC from '../../../../assets/Cc_by-nc-nd_icon.svg';
import SharePopup from '../../../tools/SharePopup';

import '../../../../scss/routes/Geobiologie/Etudes/FontaineStSauveur.scss';

// photos / images
import photoFontaine from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/st-sauveur.jpg';
import carrtePostale1 from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/veuille-photo-1.jpg';
import carrtePostale2 from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/veuille-photo-2.jpg';
import menthePomme from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/menthe-pomme.jpg';
import leGardien from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/le-gardien.jpg';
import principauxReseaux from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/fond-1.gif';
import dessinCarole from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/dessin-carole-global.jpg';
import dessinChemin from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/chemin.jpg';
import dessinSanctuaire from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/st-Sauveur-sanctuaire.jpg';
import dessinPresences from '../../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/dessin-vestale-lutin-christ.jpg';

interface ICarousselItem {
	src: string;
	alt: string;
	title: string;
	className: string;
}

const FontaineStSauveur = () => {
	const tableCartePostales = [
		{
			src: carrtePostale2,
			alt: 'Ancienne carte postale montrant une jeune fille debout devant la fontaine St-Sauveur versant de l’eau.',
			title:
				'Etude géobiologique - Ancienne carte postale de la fontaine St-Sauveur.',
			className: 'img-cartepostale-2-fontaine-st-sauveur',
		} as ICarousselItem,
		{
			src: carrtePostale1,
			alt: 'Ancienne carte postale montrant un jeune garçon debout devant la fontaine St-Sauveur.',
			title:
				'Etude géobiologique - Ancienne carte postale de la fontaine St-Sauveur.',
			className: 'img-cartepostale-1-fontaine-st-sauveur',
		} as ICarousselItem,
		{
			src: menthePomme,
			alt: 'Photo d’un pied de menthe pomme prise à proximité de la fontaine St-Sauveur.',
			title:
				'Etude géobiologique - Pied de menthe pomme à proximité  la fontaine St-Sauveur.',
			className: 'img-menthe-pomme-fontaine-st-sauveur',
		} as ICarousselItem,
	];

	const [cartePostale, _] = useState<ICarousselItem[]>(tableCartePostales);

	const itemTemplate = (item: ICarousselItem) => {
		return (
			<img
				src={item.src}
				alt={item.alt}
				style={{ width: '100%', display: 'block' }}
				loading='lazy'
			/>
		);
	};

	return (
		<>
			<div className='FontaineStSauveur'>
				<div className='article'>
					<h1>
						Fontaine Saint‑Sauveur à Maurepas (Yvelines) : étude géobiologique
						d’un site sacré
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
								title='La fontaine Saint‑Sauveur - étude géobiologique'
							/>
						</section>
					</legend>

					<section className='paragraphe-1'>
						<aside>
							<div>
								<img
									src={photoFontaine}
									className='img-photo-fontaine-st-sauveur'
									alt='Photo de la fontaine St-Sauveur printemps 2026.'
									title='Etude géobiologique - Photo de la fontaine St-Sauveur printemps 2026.'
									loading='lazy'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								La <b>fontaine Saint‑Sauveur de Maurepas</b> trouve son origine
								dans une source préhistorique qui permit l’installation des
								premiers habitants de la forêt. Avec l’essor de l’agriculture,
								les populations se sont établies durablement autour de ce point
								d’eau essentiel.
							</p>
							<p>
								Au VIᵉ siècle, dans le contexte de la christianisation du bassin
								parisien, la source est placée sous le vocable de Saint‑Sauveur,
								une dédicace rare en Île‑de‑France pour une fontaine, signe
								probable de son importance locale.
							</p>
							<blockquote>
								Avancez… la forêt veille, la source appelle, et ceux qui osent
								franchir le seuil découvrent bien plus qu’un simple lieu...
							</blockquote>
							<p>
								Ainsi, la fontaine Saint‑Sauveur constitue un repère historique
								majeur, reliant la Préhistoire, la christianisation et la
								formation de Maurepas autour d’un même point d’eau.
							</p>
						</section>
					</section>
					<ParagraphSeparator />

					<section className='paragraphe-2-1'>
						<section className='paragraphe-content'>
							<h2>Considérations générales</h2>
							<i>A Maurepas, le 24 mai 2026.</i>
							<blockquote>
								L'équipe du jour composée d’Adeline, Carole, Laëtitia et Thierry
								a cheminé à mes côtés comme on avance dans un clair‑obscur
								bienveillant. Je les remercie pour leur présence, leur écoute et
								la justesse de leurs ressentis qui ont été une d’aide précieuse
								pour moi. Ce fut un moment tissé de découvertes, d’échanges et
								de partages ressentis, un de ces instants d'osmose entre le lieu
								et nous.
							</blockquote>
							<p>
								La fontaine se trouve en contre-bas de Maurepas-Village près du
								parking du bassin de la Courance.
								<ul>
									<li>coordonnées : 48.777148° N, 1.920811° E</li>
									<li>
										altitude : 111m{' '}
										<i>(au niveau du talus à l'arrière de l'édicule).</i>
									</li>
								</ul>
							</p>
							<p>
								L’édicule actuel de la fontaine Saint‑Sauveur, construit en
								1911, présente une structure compacte (1.67m x 1.44m), orientée
								selon un axe nord-sud. Bien qu’en partie embourbé, le site
								laisse encore apparaître deux résurgences actives. L’eau
								s’échappe par l’angle avant gauche de la bâtisse et s’écoule
								vers le ru de Maurepas situé en contrebas. Sa température,
								stable entre 11 et 12 °C, confirme une alimentation souterraine
								constante.
							</p>
							<p>
								La végétation environnante reflète parfaitement un milieu humide
								et fertile : la menthe-pomme, les orties, sureaux et trèfles,
								accompagnés d’un florilège varié d’herbes hautes et graminées,
								composent un cortège végétal cohérent avec la présence d’une
								source active et d'eau abondante.
							</p>
						</section>
						<aside>
							<div className='gallerie-panel'>
								<Galleria
									value={cartePostale}
									showThumbnails={false}
									showIndicators
									item={itemTemplate}
									className='carte-postale-gallerie'
								/>
							</div>
						</aside>
					</section>
					<section className='paragraphe-2-2'>
						<section className='paragraphe-content'>
							<h3>Le ressenti subtil</h3>
							<p>
								Lors de notre premier contact, le lieu s’est présenté à nous
								comme une mémoire froissée. Une terre marquée par l’oubli,
								l’indifférence, et ces drames anciens qui ne laissent derrière
								eux que des souffrances silencieuses. Une lourdeur s’est levée,
								presque palpable, comme si l’espace portait encore l’empreinte
								de ceux qui venaient autrefois y pleurer à l’abri des regards.
							</p>
							<blockquote>
								«J'ai la sensation d'un murmure de solitude, retenu depuis
								longtemps. Comme s’il affleurait sous la mousse.» - Cyril
							</blockquote>
							<p>
								L’ensemble donnait le sentiment d’un site souillé, en attente de
								respect, de considération et d’une présence humaine plus
								consciente en contraste avec la négligence qu’il subit.
							</p>
							<blockquote>
								«Hier soir, le lieu m’a soufflé une mise en garde silencieuse.
								Une méfiance ancienne, presque douloureuse : “Ne venez pas si
								c’est pour me souiller davantage.”» - Adeline
							</blockquote>
							<p>
								À notre arrivée, le groupe a perçu une méfiance, une fermeture,
								comme si le lieu cherchait à se protéger d’une nouvelle
								déception, d’une promesse qui resterait vaine.
							</p>
						</section>
					</section>
					<ParagraphSeparator />

					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h2>L'étude géobiologique</h2>
							<h3>Les présences</h3>
							<Accordion multiple activeIndex={[0]}>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Le gardien du lieu</h4>
									}
									className='paragraphe-3-1'
								>
									<aside>
										<div>
											<img
												src={leGardien}
												className='img-dessin-gardien'
												alt='Gardien de la fontaine Saint‑Sauveur de Maurepas, silhouette de brume veillant dans la végétation profonde au bord du chemin.'
												title='Etude géobiologique - Le gardien de la fontaine Saint‑Sauveur de Maurepas.'
												loading='lazy'
											/>
										</div>
									</aside>
									<section className='paragraphe-content m-0'>
										<p>
											Le gardien se situe de l’autre côté de la route, (
											<span className='text-eau  text-shadow'>G23</span>), par
											rapport à la fontaine, aux pieds de magnifiques sureaux.
										</p>
										<blockquote>
											«Je sens une énergie neutre, un grand principe archétypal
											comme... le destin. J’ai envie de me prosterner devant
											lui.» - Carole
										</blockquote>
										<p>
											Evoluant en 23ᵉ dimension, il se manifeste comme une
											figure massive, imposante et neutre, évoquant l’archétype
											du destin, c’est‑à‑dire une présence universelle,
											fondamentale, indépendante de toute polarité. Sa simple
											apparition suscite un respect immédiat, avec une qualité
											de gravité silencieuse qui invite naturellement à
											l’inclination ou à la prosternation.
										</p>
										<p>
											Sa présence à nos côtés marque le passage vers une
											perception plus profonde et plus subtile du site.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={<h4 className='inline-header'>Le lutin</h4>}
								>
									<section className='m-0'>
										<p>
											Un lutin s’est manifesté, constituant un tournant majeur.
											L’atmosphère s’est allégée et une joie nouvelle a commencé
											à circuler, signe que le site s’ouvrait progressivement à
											notre présence et au dialogue subtil.
										</p>
										<blockquote>
											«Je sens quelque chose qui m’attire ici. Je sens de la
											joie. Ça me fait des guilis dans le dos et j’ai une
											sensation d’ouverture sur le dessus de ma tête.» - Carole
										</blockquote>
										<p>
											Il est d’abord entré en contact avec Carole, qu'il a menée
											vers la cheminée cosmotellurique argent. Son arrivée est
											le marqueur clair de l’acceptation du groupe et de la
											sincérité de notre démarche vis‑à‑vis du lieu.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											L’élémentaire d’air / La vestale
										</h4>
									}
								>
									<section className='m-0'>
										<p>
											Au sommet du talus, derrière l’édicule et dans l’axe du
											toit, se trouve un élémentaire d’air. Les ressentis qui
											s’en dégagent sont ceux d’un voile léger, porteur d’une
											qualité féminine, douce et apaisante, presque mariale.
										</p>
										<p>
											Sa manifestation s’inscrit dans une verticalité, comme une
											colonne d’air ascendante, reliant le sol à un plan plus
											élevé. Elle évoque un élan d’envol, comme un passage, une
											porte vers un ailleurs, une réalité plus fine et plus
											subtile.
										</p>
										<blockquote>
											«Je ressens quelque chose de très doux, de protécteur.
											Quelque chose de léger comme un voile. Ca me fait penser à
											l'énergie de la Vierge.» - Carole
										</blockquote>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Energie Christique</h4>
									}
								>
									<section className='m-0'>
										<p>
											Le lieu est patronymiquement relié au Christ. Sa présence
											se manifeste également au sommet du talus, légèrement sur
											la gauche du cœur du vortex, dans la zone déjà marquée par
											l’élémentaire d’air et la dynamique verticale.
										</p>
										<p>
											Cette présence ajoute une profondeur spirituelle au lieu,
											ouvrant une grille de lecture complémentaire qui éclaire,
											sous un angle différent, les dynamiques subtiles
											présentes.
										</p>
										<blockquote>
											«J’ai envie de mettre une croix sur la pointe du toît de
											la fontaine.» - Carole, en train de dessiner la fontaine
										</blockquote>
										<p>
											Cette présence ajoute une profondeur spirituelle au lieu,
											ouvrant une grille de lecture complémentaire qui éclaire,
											sous un angle différent, les dynamiques subtiles
											présentes.
										</p>
									</section>
								</AccordionTab>
							</Accordion>

							<aside>
								<div>
									<img
										src={dessinCarole}
										className='img-dessin-carole'
										alt='Dessin, non exhaustif, global des énergies présentes sur le site de la fontaine St-Sauveur pour rester lisible.'
										title='Etude géobiologique - Dessin, non exhaustif, des énergies preséentes.'
										loading='lazy'
									/>
								</div>
							</aside>
							<ParagraphSeparator />
							<section className='paragraphe-3-2'>
								<h3>Les cheminées cosmotelluriques</h3>
								<section className='paragraphe-content'>
									<p>
										Deux cheminées cosmotelluriques, aux fonctions opposées, ont
										été identifiées, situées de part et d’autre de l’édicule, le
										long du bord de route.
									</p>
									<Accordion multiple activeIndex={[0]}>
										<AccordionTab
											headerTemplate={
												<h4 className='inline-header'>Cheminée déchargeante</h4>
											}
										>
											<section className='m-0'>
												<p>
													La cheminée située sur la droite de l’édicule, repère{' '}
													<span className='text-neutre  text-shadow'>
														CT<sub>6</sub>
													</span>
													, est une cheminée déchargeante qui évolue en 6ᵉ
													dimension. Ce type d'être subtil se nourrit de
													mémoires résiduelles anciennes, de souffrances, qui
													cherchent à être évacuées.
												</p>
												<p>
													Sa présence converge avec cette sensation de
													tristesse, perçue sur le lieu à notre arrivée,
													conférant, ainsi, une connotation de zone de
													recueillement par rejet.
												</p>
											</section>
										</AccordionTab>
										<AccordionTab
											headerTemplate={
												<h4 className='inline-header'>
													Cheminée indigo ou argent ?
												</h4>
											}
										>
											<section className='m-0'>
												<p>
													La cheminée située à gauche de l’édicule,{' '}
													<span className='text-argent  text-shadow'>
														CT<sub>13</sub>
													</span>
													, nous a été signalée par le lutin, qui a attiré
													Carole sur ce point. Elle a perçu une élévation, une
													ouverture au‑dessus d’elle.
												</p>
												<p>
													Dans un premier temps, j’ai ressenti cette cheminée
													comme étant indigo, en 13ᵉ dimension, en reliance avec
													le chakra coronal, le 7ᵉ chakra, Sahasrara.
												</p>
												<p>
													<strong>À reconfirmer sur place.</strong>
													<br />
													Cependant, à la rédaction de cette étude, et de
													manière plus rationnelle, notamment au regard des
													réseaux géomagnétiques présents en ce point, il
													apparaît plus probable que cette première perception
													ait été erronée. Le gardien semble d’ailleurs aller
													dans ce sens.
												</p>
												<p>
													<i>
														Une relecture plus fine suggère qu’il s’agit plutôt
														d’une cheminée argent, de nature lunaire. Liée au
														féminin, elle opère en 15ᵉ dimension.
													</i>
												</p>
												<p>
													<i>
														Ce type de cheminée ouvre spécifiquement le 13ᵉ
														chakra, le chakra des voyages astraux. Cette lecture
														converge également avec les ressentis subtils
														d’ouverture et de déplacement de conscience perçus
														par Carole.
													</i>
												</p>
												<p>
													<i>
														Fondamentalement, qu’elle soit indigo ou argent, sa
														fonction reste la même : permettre la reliance aux
														êtres supérieurs, au divin, à la source.
													</i>
												</p>
											</section>
										</AccordionTab>
									</Accordion>
									<p>
										Cette quasi-symétrique renforce l’équilibre général du lieu.
										Cette disposition triangulaire, singulière, en miroir, et
										révèle la volonté d’une structuration géométrique et
										énergétique ancienne.
									</p>
								</section>
							</section>
							<ParagraphSeparator />
							<section className='paragraphe-content'>
								<h3>Les phénomènes éthériques remarquables</h3>
								<Accordion multiple activeIndex={[0]}>
									<AccordionTab
										headerTemplate={
											<h4 className='inline-header'>
												Le champ sacré : la protection des lieux
											</h4>
										}
									>
										<section className='m-0'>
											<p>
												Le lieu est entouré d'une barrière subtile, une zone de
												protection s’étend sur environ 100 m en amont et en aval
												de la fontaine. Elle est structurée par une succession
												artificielle de 9 lignes Hartmann, Curry et Peyré,
												similaires à celles observées ailleurs dans la région.
												L’ensemble constitue un champ sacré doté d’une capacité
												d’auto‑activation.
											</p>
										</section>
									</AccordionTab>
									<AccordionTab
										headerTemplate={
											<h4 className='inline-header'>Le vortex</h4>
										}
									>
										<section className='m-0'>
											<p>
												Sur l’arrière de l’édicule, au même endroit que
												l’élémentaire d’air, se trouve la présence d’un cœur de
												vortex dextrogyre, une dynamique masculine qui contribue
												fortement à la verticalité de la zone.
											</p>
											<p>
												Ce vortex est gardé par une déva de la nature, dont la
												fonction est de maintenir l’harmonie et l’équilibre
												entre les différents plans d’existence. Sa présence
												stabilise le mouvement ascendant du vortex et assure la
												cohérence entre les niveaux énergétiques en interaction.
											</p>
											<blockquote>
												«Quand je suis là-haut, j'ai une sensation de
												verticalité, de ne plus être là. D'être transportée
												ailleurs.» - Adeline
											</blockquote>
											<p>
												Or, qui dit vortex dit reliance subtile entre deux lieux
												physiques. Cette configuration nécessiterait une étude
												plus dédiée pour en comprendre l’intensité, la portée et
												la direction.
											</p>
											<p>
												Deux lieux apparaissent comme des candidats plausibles
												pour cette liaison : l’église Saint‑Sauveur de
												Maurepas‑Village et la fontaine Saint‑Martin, réputée
												être comme une fontaine jumelle de la Fontaine
												Saint‑Sauveur (qui pourrait avoir été détruite).
											</p>
										</section>
									</AccordionTab>
									<AccordionTab
										headerTemplate={
											<h4 className='inline-header'>La porte Astrale</h4>
										}
									>
										<section className='m-0'>
											<p>
												Mon intuition, renforcée par une information transmise
												par le gardien du lieu, suggère la présence d’une porte
												astrale à proximité de la fontaine. Cette indication ne
												s’est pas imposée comme une certitude, mais comme une
												orientation subtile possible, un point d’attention à
												garder en mémoire lors des explorations futures.
											</p>
										</section>
									</AccordionTab>
								</Accordion>
							</section>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<h3>Les réseaux géomagnétiques</h3>
							<aside>
								<div>
									<img
										src={principauxReseaux}
										className='img-dessin-reseaux'
										alt='Dessin, non exhaustif, des principaux réseaux géomagnétiques influençant les énergies subtiles autour de la fontaine St-Sauveur.'
										title='Etude géobiologique - Les principaux réseaux géomagnétiques autour de la fontaine St-Sauveur.'
										loading='lazy'
									/>
								</div>
							</aside>
							<Accordion multiple activeIndex={[0]}>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Réseaux Hartmann</h4>
									}
								>
									<section className='m-0'>
										<p>
											Deux nœuds de Hartmann ont été détectés, croisement de
											ligne selon les axes nord-sud et est-ouest.
										</p>
										<p>
											Le nœud Hartmann de niveau 1 négatif
											<br />
											Ce nœud Hartmann négatif de niveau 1 est constitué de deux
											lignes Hartmann négatives de premier niveau. Il se situe à
											quelques mètres à gauche de la cheminée cosmotellurique
											argent. La ligne Hartmann nord‑sud, (
											<span className='text-feu  text-shadow'>H-1</span>), qui
											compose ce nœud, est parallèle à la route et forme un
											point de passage obligé pour atteindre le haut du talus.
										</p>
										<p>
											Le nœud de Hartmann négatif sous l'édicule
											<br />
											Sous l’édicule, nous sommes face à un nœud Hartmann
											atypique. Une ligne Hartmann négative de niveau 2,
											orientée nord‑sud, épouse la profondeur de l’édicule. Elle
											coupe perpendiculairement une ligne Hartmann négative de
											niveau 4, (
											<span className='text-feu  text-shadow'>H-4</span>),
											orientée est-ouest, qui épouse quant à elle la largeur de
											l’édicule.
											<br />
											Ces deux lignes présentent une largeur anormalement
											importante pour leur niveau respectif, ce qui constitue
											une singularité notable.
										</p>
										<p>
											<i>
												A noter que la ligne est-ouest passant sous l'édicule
												forme également un nœud Hartmann négatif avec la ligne
												nord-sud de niveau 1 de l'autre nœud formant comme un
												seuil devant la fontaine.
											</i>
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Réseaux lunaire / argent</h4>
									}
								>
									<section>
										<p>
											Un nœud argent positif de niveau 1 se trouve directement (
											<span className='text-argent  text-shadow'>L+1</span>)
											sous la cheminée argent. Cette présence renforce
											l’hypothèse d’une cheminée argent plutôt qu’indigo. Il a
											essentiellement une fonction de soutien, de fixation de la
											cheminée.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Réseaux Curry</h4>
									}
								>
									<section>
										<p>
											À l’arrière de l’édicule, là où se trouvent le cœur du
											vortex et l’élémentaire d’air, se situe un nœud Curry
											particulièrement intéressant. Le croisement est composé de
											deux lignes Curry positives de niveau 2, (
											<span className='text-curry  text-shadow'>C+2</span>),
											légèrement plus larges que ce que l’on observe
											habituellement pour ce niveau, ce qui constitue déjà une
											singularité notable.
										</p>
										<p>
											Cette configuration crée un triangle à tendance
											équilatérale entre les deux lignes Curry avec la ligne de
											l'axe nord‑sud du nœud argent.
										</p>
										<p>
											<i>
												Il conviendrait de vérifier s'il n'existe pas un réseau
												non détecté, plus puissant que le réseau argent,
												parallèle à la route, qui viendrait compléter cette
												structure.
											</i>
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											Réseaux Peyré solaire / or / cuivre
										</h4>
									}
								>
									<section>
										<p>
											Une ligne Peyré solaire de niveau 2 traverse l’édicule
											selon un axe nord‑sud. Sa présence est importante, elle
											contribue à réduire l'impact de la ligne Hartmann négative
											qui passe au même endroit et avec laquelle elle partage le
											tracé.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Réseaux cobalt</h4>
									}
								>
									<section>
										<p>
											Une ligne cobalt (
											<span className='text-cobalt  text-shadow'>C</span>),
											déviée d’une dizaine de degrés, vient croiser le nœud
											Curry situé à l’arrière de l’édicule. Cette ligne renforce
											l’ensemble de la structure subtile déjà présente autour du
											vortex, de l’élémentaire d’air.
										</p>
									</section>
								</AccordionTab>
							</Accordion>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-5'>
						<section className='paragraphe-content'>
							<h2>La recherche a posteriori dans la litèrature</h2>
							<Accordion multiple activeIndex={[1]}>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Le chiffre maître - 111</h4>
									}
								>
									<section>
										<p>
											Le chiffre 111 se présente comme un signe vibrant, un
											appel discret de l’invisible. Dans les traditions
											spirituelles, il est perçu comme un marqueur d’attention,
											une impulsion qui indique qu’un mouvement intérieur
											s’amorce, qu’un message cherche à se frayer un passage
											jusqu’à la conscience.
										</p>
										<p>
											Le 111 est décrit comme un chiffre d’alignement, d’éveil
											et de commencement. Il porte l’énergie du 1, mais triplée
											: ce qui en fait un appel, un signal, un portail
											vibratoire.
										</p>
										<p>
											On retrouve ce chiffre à la fois au niveau de l’altitude
											du talus à l’arrière de l’édicule mais également en
											faisant une réduction en se basant l’année de construction
											1911.
										</p>
										<blockquote>
											«Depuis qu’on est arrivé, j’ai en tête la chanson de Tina
											Arena “Voler plus haut.”» - Laëtitia
										</blockquote>
										<i>
											Au passage noter cette synchronicité subtile, le titre de
											la chanson étant “Aller plus haut.”
										</i>
										<p>
											Le 111 est décrit comme un chiffre d’alignement, d’éveil
											et de commencement. Il porte l’énergie du 1, mais triplée
											: ce qui en fait un appel, un signal, un portail
											vibratoire.
										</p>
										<p>
											111 marque l’ouverture d’un axe vertical : une montée de
											conscience, un appel à s’élever. C’est le chiffre‑seuil,
											celui qui signale qu’un passage s’ouvre entre deux plans.
											Une vibration de portail : quand le 1 se triple, l’origine
											devient ascension.
										</p>
										<p>
											Dans la Bible, le 111 renvoie à la présence divine
											elle‑même , le Père, le Fils et le Saint‑Esprit : la
											sainte Trinité. Dès lors, il devient une invitation
											intérieure, une convocation silencieuse destinée à
											intensifier la dévotion et à tisser un lien plus intime
											avec le divin.
										</p>
										<p>
											<i>
												On ne saurait ignorer, comme l’indiquent les anciennes
												cartes postales, que le talus est récent, sans doute
												issu du remblai nécessaire à la construction de la
												route. Pourtant, la référence symbolique demeure. Le
												subtil, sous le nom de hasard, sait trouver son chemin
												jusqu’à nous.
											</i>
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											Holda, la fée de l’air et ses vestales
										</h4>
									}
								>
									<section>
										<p>
											En m’appuyant sur{' '}
											<a
												href='https://www.oviloroi.com/boutique/livres/8-presences-invisibles-gardiennes-terre'
												target='_blank'
											>
												les écrits de Yann Lipnick
											</a>
											, la figure de Holda / Dame Holle, considérée comme la
											reine de l’air, apparaît particulièrement pertinente. Elle
											régit des élémentaux de l’air appelés vestals ou vestales.
										</p>
										<p>
											Holda est également liée au monde souterrain et à
											l’au‑delà. La tradition rapporte qu’elle accueille les
											âmes des enfants morts en bas âge et les garde auprès
											d’elle avec une immense douceur.
										</p>
										<p>
											Holda et ses vestales ont un rôle purificateur. Ils
											peuvent apporter une aide précieuse dans les situations de
											tristesse, de timidité ou de fermeture émotionnelle.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>Sainte(s) Brigitte</h4>
									}
								>
									<section>
										<p>
											Sainte Brigitte de Kildare (Ve siècle) est l’une des
											saintes les plus vénérées d’Irlande. Elle est profondément
											associée à la pauvreté volontaire, à la simplicité et au
											don de soi. Au cœur du monastère de Kildare brûlait un feu
											perpétuel, entretenu par les religieuses. Il ne devait
											jamais s’éteindre.
										</p>
										<p>
											Dans la Rome antique, les Vestales étaient des femmes
											vierges chargées de garder le feu sacré de Vesta. Elles
											étaient symboliquement les protectrices de Rome, garantes
											de sa pureté et de sa continuité.
										</p>
										<p>
											Sainte Brigitte de Suède (XIVᵉ siècle) fonde l’ordre du
											St-Sauveur, ordre centré sur la Passion du Christ et la
											maternité spirituelle de Marie.
										</p>
										<p>
											Derrière la figure chrétienne de Sainte Brigitte se
											profile une divinité beaucoup plus ancienne, Brigid.
										</p>
										<p>
											Brigid est une divinité celte se manifestant sous trois
											formes complémentaires :
										</p>
										<ul>
											<li>
												La déesse du feu sacré, incarnant la transformation, la
												création, la purification. Son feu n’est pas
												destructeur, il est vivant, créateur, civilisateur.
											</li>
											<li>
												La déesse de la guérison et des eaux, liée aux sources,
												aux fontaines, aux eaux guérisseuses, elle est la mère
												bienveillante, celle qui soigne les corps et apaise les
												âmes.
											</li>
											<li>
												La déesse de la poésie et de l’inspiration, elle est la
												flamme du verbe, don divin, un souffle venu de l’Autre
												Monde, qui donne aux bardes leur clairvoyance.
											</li>
										</ul>

										<p>
											<i>
												Ce passage consacré à Sainte Brigitte a émergé de
												manière inattendue au fil de mes recherches, comme un
												clin d’œil du subtil. Certains diront le hasard. Rien,
												sur le terrain, ne semble aujourd’hui renvoyer
												directement à elle, et pourtant sa présence s’impose
												avec la douceur d’une évidence encore voilée. Elle
												apparaît comme une pièce supplémentaire de ce puzzle
												symbolique, dont la place reste à découvrir.
											</i>
										</p>
									</section>
								</AccordionTab>
							</Accordion>
						</section>
					</section>
					<section className='paragraphe-6'>
						<section className='paragraphe-content'>
							<h2>Les différents niveaux de lecture</h2>
							<Accordion multiple activeIndex={[0]}>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											Le murmure des résonances sacrées
										</h4>
									}
								>
									<section>
										<p>
											Le 111 apparaît comme un signe d’alignement, un appel à
											s’élever, un seuil entre visible et invisible. Autour de
											lui gravitent des figures féminines sacrées : Holda, reine
											de l’air, protectrice des âmes et ses vestales; Brigid,
											déesse du feu devenue sainte ; les vestales romaines,
											gardiennes de la flamme éternelle ; mais aussi l’ordre du
											Saint‑Sauveur, la présence christique, le ressenti marial.
										</p>
										<p>
											Ainsi, mythes germaniques, traditions celtes, rites
											romains, symboles chrétiens et numérologie se répondent.
											Ils composent une même histoire, celle d’un passage, d’une
											élévation, d’un souffle qui traverse les époques. Le
											hasard ? Comme si le monde cherchait à murmurer quelque
											chose à travers ces résonances.
										</p>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											Le sanctuaire de recueillement
										</h4>
									}
								>
									<section className='paragraphe-6-1'>
										<section className='paragraphe-content'>
											<p>
												Plusieurs éléments agissent en synergie pour faire de la
												fontaine Saint‑Sauveur un véritable{' '}
												<b>sanctuaire de recueillement</b>.
											</p>
											<p>
												D’un point de vue géographique, le lieu est à{' '}
												<b>l’écart des regards</b>, légèrement retiré, offrant
												un espace où l’on peut venir <b>seul</b>, se{' '}
												<b>recentrer sur soi</b>.
											</p>
											<p>
												L’accès forme un parcours cohérent, ponctué d’éléments
												subtils qui facilitent l’intériorisation. Le croisement
												des deux lignes Hartmann négatives crée un effet de{' '}
												<b>seuil</b> lorsque l’on se présente devant l’édicule :
												un passage énergétique qui ralentit naturellement le
												mental et prépare à l’écoute intérieure.
											</p>
											<p>
												La forme de l’édicule, avec sa tablette, évoque
												discrètement un <b>prie‑dieu</b>, invitant le corps à
												une posture d’inclinaison douce, propice au
												recueillement. Juste devant, l’eau qui s’écoule emporte
												symboliquement et énergétiquement les tracas vers la
												terre mère, où ils peuvent être transmutés.
											</p>
											<aside>
												<div>
													<img
														src={dessinSanctuaire}
														className='img-dessin-sanctuaire'
														alt='Dessin représentant les éléments subtils évoquant la fontaine St-Sauveur, comme un sanctuaire de recueillement.'
														title='Etude géobiologique - La fontaine St-Sauveur, un sanctuaire de recueillement.'
														loading='lazy'
													/>
												</div>
											</aside>
											<p>
												À cette dynamique s’ajoutent les présences d’Holda et de
												la vestale. Elles se manifestent comme une présence
												douce, protectrice et purificatrice, qui enveloppe
												silencieusement le lieu. En accompagnant les états de{' '}
												<b>tristesse</b>, de <b>timidité</b> ou de{' '}
												<b>fermeture émotionnelle</b>, elles contribuent à faire
												de cet espace un endroit où l’on peut se délester,{' '}
												<b>s’apaiser</b> et retrouver une{' '}
												<b>clarté intérieure</b>.
											</p>
										</section>
									</section>
								</AccordionTab>
								<AccordionTab
									headerTemplate={
										<h4 className='inline-header'>
											Un chemin d’élévation intérieure
										</h4>
									}
								>
									<section>
										<h5>Les étapes préliminaires d’ouverture</h5>
										<p>
											La première étape, le point 0 (
											<span className='text-cobalt  text-shadow'>P0</span>),
											correspond à la cheminée cosmotellurique située à droite
											de l’édicule, évoluant en 6ᵉ dimension. Elle a pour
											fonction la libération émotionnelle et la transmutation
											des charges lourdes, ouvrant ainsi le chemin.
										</p>
										<p>
											La station{' '}
											<span className='text-cobalt  text-shadow'>P1</span>, au
											pied du gardien du lieu, marque un véritable point de
											bascule. C’est un espace apaisant, un lieu d’acceptation,
											où l’on se rend disponible pour le parcours initiatique
											qui s’ouvre. On y formule intérieurement la demande d’être
											accompagné par les présences bienveillantes du site.
										</p>
										<h5>Les étapes de nettoyage, la libération</h5>
										<p>
											Le pèlerin se dirige ensuite vers le seuil (
											<span className='text-cobalt  text-shadow'>P2</span>),
											formé par le large nœud résultant du croisement des
											réseaux Hartmann –4 et Hartmann –1. Ce passage agit comme
											un effet de seuil, ralentissant le mental et préparant à
											la purification.
										</p>
										<p>
											Puis vient le point{' '}
											<span className='text-cobalt  text-shadow'>P3</span>, au
											pied de l’édicule, là où la forme évoque discrètement un
											prie‑dieu. L’eau qui s’écoule opère un nettoyage
											symbolique et énergétique, rappelant le principe du
											Jourdain que l’on retrouve à l’entrée de nombreuses
											églises. Ici, l’eau lave, allège, clarifie.
										</p>
										<p>
											Sous le regard christique, le pèlerin se recueille. Il
											dépose ce qui pèse, laisse s’ouvrir sa conscience, et
											libère ce qui doit l’être. Ce mouvement intérieur
											s’accomplit dans la présence douce et purificatrice de
											Holda, dont la qualité d’air et de soin subtil accompagne
											ce passage avec une bienveillance silencieuse.
										</p>
										<aside>
											<div>
												<img
													src={dessinChemin}
													className='img-dessin-chemin'
													alt='Dessin représentant les différentes stations du chemin d’élévation intérieure autour de la fontaine St-Sauveur.'
													title='Etude géobiologique - La fontaine St-Sauveur, un chemin d’élévation intérieure.'
													loading='lazy'
												/>
											</div>
										</aside>
										<h5>L’apaisement</h5>
										<p>
											Le point suivant,{' '}
											<span className='text-cobalt  text-shadow'>P4</span>, se
											situe au croisement de la ligne Cobalt et d’un réseau
											positif encore à identifier. La ligne Cobalt agit sur le
											4ᵉ chakra (Anahata), le chakra du cœur. Elle place le
											pèlerin dans une dynamique d’apaisement, d’accueil et
											d’ouverture intérieure, préparant la montée vibratoire.
										</p>
										<h5>Les étapes de l’élévation</h5>
										<p>
											Le point{' '}
											<span className='text-cobalt  text-shadow'>P5</span> se
											trouve au croisement de la ligne Curry +2, de la ligne
											Argent, et de la cheminée Argent CT13. En agissant sur le
											13ᵉ chakra, ce palier marque l’entrée dans une phase
											d’élévation, une reliance au divin.
										</p>
										<p>
											Enfin, la station{' '}
											<span className='text-cobalt  text-shadow'>P6</span>. Elle
											s’articule autour du nœud Curry +2, du cœur du vortex et
											de la présence délicate de la Vestale. Ce point marque
											l’aboutissement du parcours : un espace où les forces
											ascendantes du vortex, la stabilité du réseau et la
											douceur purificatrice de la Vestale se conjuguent pour
											ouvrir une élévation intérieure. Ici, le pèlerin se tient
											dans une verticalité pleine, relié à la fois à la terre et
											au ciel. Un état alignement cosmo-tellurique qui scelle
											l’ensemble du chemin parcouru.
										</p>
										<h5>Conclusion du parcours initiatique</h5>
										<p>
											Ce parcours initiatique conduit progressivement le pèlerin
											à se délester, à s’ouvrir et à accueillir les énergies
											subtiles et les présences qui veillent sur le lieu. En
											cheminant, il entre en résonance avec les dynamiques
											fines. Il devient alors le lien vivant entre la Terre et
											le Ciel.
										</p>
									</section>
								</AccordionTab>
							</Accordion>
						</section>
					</section>

					<ParagraphSeparator />
					<section className='paragraphe-7'>
						<section className='paragraphe-content'>
							<h2>Conclusions de l’étude géobiologique</h2>
							<p>
								La fontaine Saint‑Sauveur est un lieu ancien qui vibre
								silencieusement sous la mousse. Son architecture, à la fois
								subtile et dense, révèle une géométrie singulière qui témoigne
								d’un savoir ancien, précis, posé là pour durer. La cohérence et
								l’équilibre du dispositif donnent au site l’allure d’un
								sanctuaire oublié, retiré du monde, dont seuls les animaux
								perçoivent encore la mémoire sacrée.
							</p>
							<p>
								La fontaine Saint‑Sauveur n’est pas un simple point d’eau. C’est
								un lieu de passage, un seuil qui veille, un espace qui ne
								s’ouvre qu’à ceux qui savent ralentir, écouter, se rendre
								disponibles. Un lieu qui ne se révèle pas à la curiosité, mais à
								la qualité de présence.
							</p>
							<br />
							<h2>
								Pistes d’exploration pour une prochaine session sur le lieu
							</h2>

							<ul>
								<li>
									Affiner les mesures et la géométrie : vérifier s’il ne manque
									pas un élément important, notamment un réseau majeur parallèle
									à la route sur l’axe nord‑sud.
									<br /> Contexte : certaines intuitions et incohérences locales
									suggèrent une ligne non détectée.
								</li>
								<li>
									Étudier le vortex : déterminer sa taille, sa direction, et
									surtout le lieu subtil avec lequel la fontaine pourrait être
									reliée. <br />
									Contexte : le vortex semble jouer un rôle central dans la
									verticalité du site.
								</li>
								<li>
									Explorer la zone en amont et en aval : parcourir l’espace
									jusqu’au champ sacré pour repérer variations, présences ou
									structures oubliées. <br />
									Contexte : plusieurs phénomènes semblent se prolonger au‑delà
									de la zone immédiate. Ils pourraient venir enrichir le circuit
									qui me semble incomplet. Peut-être a-t-il besoin d'être
									restauré ?
								</li>
								<li>
									Vérifier la porte astrale et la symétrie subtile : confirmer
									la porte astrale et rechercher une présence en miroir du
									gardien, une émanation de Brigid ? <br />
									Contexte : le lieu présente une géométrie qui pourrait être
									symétrique.
								</li>
							</ul>
						</section>
						<aside>
							<div>
								<img
									src={dessinPresences}
									className='img-dessin-presences'
									alt='Dessin représentant la figure christique, un lutin et une vestale autour de la fontaine St-Sauveur.'
									title='Etude géobiologique - Le lutin, le chirst et la vestale, présences subtiles de la fontaine St-Sauveur.'
									loading='lazy'
								/>
							</div>
						</aside>
					</section>

					<section className='paragraphe-9'>
						<section className='paragraphe-content'>
							<h3>L'anecdote des chevaux</h3>
							<p>
								Quelques centaines de mètres en contrebas de la fontaine se
								trouve une écurie. Nous étions en train d’étudier le site de la
								fontaine lorsque, soudain, trois cavalières ont emprunté la
								route pour s’y rendre.
							</p>
							<p>
								Arrivés exactement à la limite du champ sacré, les chevaux se
								sont arrêtés net, refusant catégoriquement d’avancer. Malgré
								l’insistance des cavalières, ils ont dû rebrousser chemin et
								contourner la zone de la fontaine pour pouvoir poursuivre leur
								route.
							</p>
							<p>
								Cette anecdote constitue un indice empirique fort, venant
								confirmer la présence d’un champ sacré actif autour de la
								fontaine durant nos recherches.
							</p>
						</section>
					</section>

					<section className='paragraphe-9'>
						<section className='paragraphe-content'>
							<blockquote>
								NB : Cette étude reprend l’ensemble des informations que j’ai
								rassemblées. Elles sont issues de l’observation visuelle,
								subtile, de canalisation, d’intuitions et de la littérature.
							</blockquote>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default FontaineStSauveur;
