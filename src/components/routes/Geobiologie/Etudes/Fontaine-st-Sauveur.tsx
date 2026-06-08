import MetaTag from '../../../tools/MetaTag';
import ParagraphSeparator from '../../../tools/Paragraph-Separator';
import ImgCC from '../../../../assets/Cc_by-nc-nd_icon.svg';
import '../../../../scss/routes/Geobiologie/Etudes/LeLavoirDeLaSourceAuxFees.scss';
import SharePopup from '../../../tools/SharePopup';

const FontaineStSauveur = () => {
	const head = () => {
		return (
			<MetaTag
				title={
					import.meta.env.VITE_META_MAIN_TITLE ||
					'Fontaine Saint‑Sauveur de Maurepas : étude géobiologique complète'
				}
				description='Étude géobiologique de la fontaine Saint‑Sauveur à Maurepas : source ancienne, champ sacré, vortex, réseaux subtils et présences protectrices. Un lieu qui veille.'
				resume='La fontaine Saint‑Sauveur de Maurepas, héritière d’une source préhistorique, révèle une architecture subtile et un champ sacré actif. Vortex, réseaux géomagnétiques, présences élémentaires et mémoire du lieu composent un espace puissant, “bien plus qu’un simple point d’eau” selon ton texte : « La fontaine Saint‑Sauveur n’est pas qu’un point d’eau, mais une porte qui veille. '
				forceTitle={true}
			/>
		);
	};

	return (
		<>
			{head()}
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
						{/* <aside>
							<div>
								<img
									src={SourceAuxFees3}
									className='img-source-aux-fees-lavoir'
									alt='Photographie du lavoir de la source aux fées orientée Nord.'
									title='Etude géobiologique - Le lavoir de la source aux fées.'
									loading='lazy'
								/>
							</div>
						</aside> */}
						<section className='paragraphe-content'>
							<p>
								La fontaine Saint‑Sauveur de Maurepas trouve son origine dans
								une source préhistorique qui permit l’installation des premiers
								habitants de la forêt. Avec l’essor de l’agriculture, les
								populations se sont établies durablement autour de ce point
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
							<p></p>
						</section>
					</section>
					<ParagraphSeparator />
					<h2>Considérations générales</h2>
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<i>A Maurepas, le 24 mai 2026.</i>
							<blockquote>
								L'équipe du jour est composée d’Adeline, Carole, Laëtitia et
								Thierry a cheminé à mes côtés comme on avance dans un
								clair‑obscur bienveillant. Je les remercie pour leur présence,
								leur écoute et la justesse de leurs ressentis qui ont été une
								d’aide précieuse pour moi. Ce fut un moment tissé de
								découvertes, d’échanges et de partages ressentis, un de ces
								instants d'osmose entre le lieu et nous.
							</blockquote>
							<p>
								La fontaine se trouve en contre-bas de Maurepas-village près du
								parking du bassin de la Courance.
								<ul>
									<li>coordonnées : 48.777148° N, 1.920811° E</li>
									<li>
										altitude : <i>111m</i> au niveau du talus à l'arrière de
										l'édicule
									</li>
								</ul>
							</p>
							<p>
								L’édicule actuel de la fontaine Saint‑Sauveur présente une
								structure compacte (1.67m x 1.44m), orientée selon un axe
								nord-sud. Bien qu’en partie embourbé, le site laisse encore
								apparaître deux résurgences actives. L’eau s’échappe par le coin
								avant gauche de l’édicule et s’écoule vers le ru de Maurepas
								situé en contrebas. Sa température, stable entre 11 et 12 °C,
								confirme une alimentation souterraine constante.
							</p>
							{/* <aside>
								<div>
									<img
										src={SourceAuxFees2}
										className='img-source-aux-fees-lavoir'
										alt='Photographie du lavoir de la source aux fées orientée Sud.'
										title='Etude géobiologique - Le lavoir de la source aux fées.'
										loading='lazy'
									/>
								</div>
							</aside> */}
							<p>
								La végétation environnante reflète parfaitement un milieu humide
								et fertile : la menthe pomme, les orties, sureaux et trèfles,
								accompagnés d’un florilège varié d’herbes hautes et graminées,
								composent un cortège végétal cohérent avec la présence d’une
								source active et d'eau abondante.
							</p>
							<h3>Le ressenti subtil</h3>
							<p>
								Lors de notre premier contact, le lieu s’est présenté à nous
								comme une mémoire froissée. Une terre marquée par l’oubli,
								l’indifférence, et ces drames anciens qui ne laissent derrière
								eux que des souffrances silencieuses. Une lourdeur s’est levée,
								presque palpable, comme si l’espace portait encore l’empreinte
								de ceux qui venaient autrefois y pleurer en retrait, à l’abri
								des regards.
							</p>
							<blockquote>
								«J'ai la sensation d'un murmure de solitude, retenu depuis
								longtemps. Comme si il affleurait sous la mousse.» - Cyril
							</blockquote>
							<p>
								L’ensemble donnait le sentiment d’un site souillé, en attente de
								respect, de considération et d’une présence humaine plus
								consciente, en contraste avec la négligence qu’il subit.
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
					<h2>L'étude géobiologique</h2>
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h3>Le champ sacré : la protecttion des lieux</h3>
							<p>
								Le lieu est entouré d'une barrière subtile, une zone de
								protection s’étend sur environ 100 m en amont et en aval de la
								fontaine. Elle est structurée par une succession artificielle de
								lignes Hartmann, Curry et Peyré, similaires à celles observées
								ailleurs dans la région. L’ensemble constitue un champ sacré
								doté d’une capacité d’auto‑activation.
							</p>
						</section>
						<section className='paragraphe-content'>
							<h3>Les présences</h3>
							<ul className='enumeration'>
								<li>
									Le gardien du lieu
									{/* (repère{' '}
									<span className='text-eau  text-shadow'>E14</span>
									). */}
									Le gardien se situe de l'autre côté de la route, par rapport à
									la fontaine, aux pieds de magnifiques sureaux.
									<br />
									<blockquote>
										«Je sens une énergie neutre, comme un grand principe
										archetypal comme... le destin. J'ai envie de me prosterner
										devant lui.» - Carole
									</blockquote>
									<br />
									Il se manifeste comme une figure massive, imposante et neutre,
									évoquant l’archétype du destin, c’est‑à‑dire une présence
									universelle, fondamentale, indépendante de toute polarité. Sa
									simple apparition suscite un respect immédiat, avec une
									qualité de gravité silencieuse qui invite naturellement à
									l’inclination ou à la prosternation.
									<br />
									Sa présence à nos côtés marque le passage vers une perception
									plus profonde et plus subtile du site.
								</li>
								<li>
									Le lutin
									<br />
									Un lutin s’est manifesté, constituant un tournant perceptible
									et majeur : l’atmosphère s’est allégée et une joie nouvelle a
									commencé à circuler, signe que le site s’ouvrait
									progressivement à notre présence et au dialogue subtil. Sa
									présence est le marqueur clair de l’acceptation du groupe et
									de la sincérité de notre démarche vis‑à‑vis du lieu.
									<br />
									<blockquote>
										«Je sens quelque chose qui m'attire ici. Je sens de la joie.
										Ca me fait des guilis dans le dos et j'ai une sensation
										d'ouverture sur le dessus de ma tête.» - Carole
									</blockquote>
									<br />
									Le lutin s'est d'abord manifesté auprès de Carole, qu'il a
									menée vers la cheminée cosmotellurique argent.
								</li>
								<li>
									La fée de l'air
									<br />
									Une fée de l’air s’est manifestée auprès de Laëtitia,
									apportant une coloration nouvelle à la recherche. Sa présence
									a ouvert des possibilités de lecture plus fines, dont le sens
									complet n’apparaîtra qu’après le recoupement des ressentis du
									terrain avec la littérature existante, notamment les travaux
									de Yann Lipnick. <br />
									Cette intervention subtile a enrichi la dynamique de l’étude,
									en élargissant le champ des interactions perceptibles.
								</li>
								<li>
									L'élémentaire d'air / La vestale
									<br />
									Au sommet du talus, derrière l’édicule et dans l’axe du toit,
									se trouve un élémentaire d’air. Les ressentis qui s’en
									dégagent sont ceux d’un voile léger, porteur d’une qualité
									féminine, douce et apaisante, presque mariale.
									<br />
									Sa manifestation s'inscrit dans une verticalité, comme une
									colonne d’air ascendante, reliant le sol à un plan plus élevé.
									Elle évoque un élan d’envol, comme un passage, une porte vers
									un ailleurs, une réalité plus fine et plus subtile.
									<blockquote>
										«Je ressens quelque chose de très doux, de protécteur.
										Quelque chose de léger comme un voile. Ca me fait penser à
										l'énergie de la Vierge.» - Carole
									</blockquote>
								</li>
								<li>
									Un vortex
									<br />
									Au même endroit que l’élémentaire d’air se trouve la présence
									d’un cœur de vortex dextrogyre, une dynamique masculine qui
									contribue fortement à la verticalité de la zone.
									<br />
									Ce vortex est gardé par une déva de la nature, dont la
									fonction est de maintenir l’harmonie et l’équilibre entre les
									différents plans d’existence. Sa présence stabilise le
									mouvement ascendant du vortex et assure la cohérence entre les
									niveaux énergétiques en interaction.
									<blockquote>
										«Quand je suis là haut, j'ai une sensation de verticalité,
										de ne plus être là. D'être transportée ailleurs.» - Adeline
									</blockquote>
									<br />
									Or, qui dit vortex dit reliance subtile entre deux lieux
									physiques. Cette configuration nécessiterait une étude plus
									dédiée pour en comprendre l’intensité, la portée et la
									direction.
									<br />
									Deux lieux apparaissent comme des candidats plausibles pour
									cette liaison : l’église Saint‑Sauveur de Maurepas‑Village et
									la fontaine Saint‑Martin, réputée comme une fontaine jumelle
									de la Fontaine Saint‑Sauveur (qui pourrait avoir été
									détruite).
								</li>
								<li>
									Energie Christique
									<br />
									Le lieu est pratnominiquement relié au Christ. Sa présence se
									manifeste également au sommet du talus, légèrement sur la
									gauche du cœur du vortex, dans la zone déjà marquée par
									l’élémentaire d’air et la dynamique verticale.
									<br />
									Cette présence ajoute une profondeur spirituelle au lieu,
									ouvrant une grille de lecture complémentaire qui éclaire, sous
									un angle différent, les dynamiques subtiles présentes.
									<blockquote>
										«J'ai envie de mettre un croix sur la pointe du toît de la
										fontaine.» - Carole, en train de dessiner la fontaine
									</blockquote>
								</li>
							</ul>
							<h3>Les cheminées cosmotelluriques</h3>
							<p>
								Deux cheminées cosmotelluriques ont été identifiées, situées de
								part et d’autre de l’édicule, sur le bord de la route, de
								manière symétrique. Cette disposition, singulière, en miroir
								renforce l’équilibre général du lieu et confirme la présence
								d’une structuration triangulaire énergétique ancienne.
							</p>
							<ul>
								<li>
									Cheminée déchargeante
									<br />
									La cheminée située sur la droite de l’édicule est une cheminée
									déchargeante qui évolue en 6ème dimension. Ce type d'être
									subtil est souvent attiré par à des mémoires anciennes ou à
									des souffrances résiduelles qui cherchent à être évacuées dont
									elle se nourrit.
									<br />
									Sa présence converge avec la sensation de tristesse perçue sur
									le lieu à notre arrivée, ainsi qu’avec une forme zone de
									recueillement par rejet, comme si le lieu avait servi d’espace
									d’accueil pour des charges émotionnelles nécessitant un
									exutoire.
								</li>
								<br />
								<li>
									Cheminée indigo ou argent ?<br />
									La cheminée située à gauche de l’édicule nous a été signalée
									très tôt par le lutin, qui a attiré Carole directement sur ce
									point. Carole a imédiatement perçu une élévation, une
									ouverture au‑dessus d’elle.
									<br />
									Dans un premier temps, j’ai ressenti cette cheminée comme
									étant indigo, en 13ᵉ dimension, en reliance avec le chakra
									coronal.
									<br />
									Cependant, à la rédaction de cette étude, et de manière plus
									rationnelle, notamment au regard des réseaux géomagnétiques,
									il apparaît plus probable que cette première perception ait
									été erronée. Le gardien semble d’ailleurs aller dans ce sens.
									À reconfirmer sur place.
									<br />
									<br />
									<i>
										Une relecture plus fine suggère qu’il s’agit plutôt d’une
										cheminée argent, de nature lunaire, liée au féminin, opérant
										en 15ᵉ dimension. Ce type de cheminée ouvre spécifiquement
										le 13ᵉ chakra, le chakra des voyages astraux, ce qui
										correspond davantage aux ressentis d’ouverture, de subtilité
										et de déplacement de conscience perçus sur place.
										<br />
										Fondamentalement, qu’elle soit indigo ou argent, sa fonction
										reste la même : permettre la reliance aux êtres supérieurs,
										au divin, à la source.
									</i>
								</li>
							</ul>
							{/* <aside>
								<div>
									<img
										src={SourceAuxFeesPresence}
										className='img-presences-source-aux-fees-lavoir'
										alt='Photographie du lavoir de la source aux fées orientée Est où sont indiquées l’emplacement des présences subtiles.'
										title='Etude géobiologique - Le lavoir de la source aux fées et ses présences subtiles.'
										loading='lazy'
									/>
								</div>
							</aside> */}
						</section>
					</section>
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<h3>Les réseaux géomagnétiques</h3>
							<h4>Réseaux de Hartmann</h4>
							<p>
								Deux nœuds de Hartmann ont été détectés, croisement de ligne
								selon les axes N/S et E/O
							</p>
							<ul>
								<li>
									Le nœud Hartmann de niveau 1 négatif
									<br />
									Ce nœud Hartmann négatif de niveau 1 est constitué de deux
									lignes Hartmann négatives de premier niveau. Il se situe à
									quelques mètres à gauche de la cheminée cosmotellurique
									“élevante”. La ligne Hartmann nord‑sud, qui compose ce nœud,
									est paralléle à la route et forme un point de passage obligé
									pour atteindre le haut du talus.
								</li>
								<li>
									Le nœud de Hartman négatif sous l'édicule
									<br />
									Sous l’édicule, nous sommes face à un nœud Hartmann atypique.
									Une ligne Hartmann négative de niveau 2, orientée Nord/Sud,
									épouse la profondeur de l’édicule. Elle coupe
									perpendiculairement une ligne Hartmann négative de niveau 4,
									orientée Est/Ouest, qui épouse quant à elle la largeur de
									l’édicule.
									<br />
									Ces deux lignes présentent une largeur anormalement importante
									pour leur niveau respectif, ce qui constitue une singularité
									notable.
									<br />
									<i>
										A noter que la ligne E/O passant sous l'édicule forme
										également un nœud Hartmann négatif avec la ligne N/S de
										niveau 1 de l'autre nœud formant comme un seuil devant la
										fontaine.
									</i>
								</li>
							</ul>
							<h4>Réseaux Lunaire / Argent</h4>
							<p>
								Un nœud argent positif de niveau 1 se trouve directement sous la
								cheminée “élevante”. Cette présence renforce l’hypothèse d’une
								cheminée argent plutôt qu’indigo. Il a essentiellement une
								fonction de soutien, de stabilisation de la cheminée.
							</p>
							<h4>Réseaux Curry</h4>
							<p>
								À l’arrière de l’édicule, là où se trouvent le cœur du vortex et
								l’élémentaire d’air, se situe un nœud Curry particulièrement
								intéressant. Le croisement est composé de deux lignes Curry
								positives de niveau 2, légèrement plus larges que ce que l’on
								observe habituellement pour ce niveau, ce qui constitue déjà une
								singularité notable.
							</p>
							<p>
								Cette configuration crée un triangle à tendance équilatérale
								entre les deux lignes Curry avec la ligne de l'axe Nord/Sud du
								nœud Argent. Il conviendrait de vérifier s'il n'exispte pas un
								réseau non détecté, plus puissant que le réseau Argent,
								paralléle à la route, qui veindrait compléter cette structure.
							</p>
							<h4>Réseaux Peyré Solaire / Or / Cuivre</h4>
							<p>
								Une ligne Peyré or de niveau 2 traverse l’édicule selon un axe
								Nord/Sud. Sa présence est prépondérante : elle impose sa
								fréquence et inhibe la ligne Hartmann négative qui passe au même
								endroit et avec laquelle elle partage le tracé.
							</p>
							<h4>Réseaux Cobalt</h4>
							<p>
								Une ligne cobalt, déviée d’une dizaine de degrés, vient croiser
								le nœud Curry situé à l’arrière de l’édicule. Cette ligne
								renforce l’ensemble de la structure subtile déjà présente autour
								du vortex, de l’élémentaire d’air.
							</p>

							{/* <aside>
								<div className='img-legende'>
									<img
										src={SourceAuxFeesReseaux}
										className='schema-reseaux-geomagnetiques-source-aux-fees-lavoir'
										alt='Schéma allégé des réseaux géomagnétiques du lavoir de la source aux fées et de sa cheminée cosmotellurique'
										title='Etude géobiologique - Les réseaux géomagnétiques du de lavoir de la source aux fées.'
										loading='lazy'
									/>
									<legend>
										Schématiquement voici comment sont placés le croisement de
										réseau <span className='text-titane'>Titane</span> et la
										cheminée cosmotellurique sur le lieu.
									</legend>
								</div>
							</aside> */}
						</section>
					</section>
					<section className='paragraphe-5'>
						<section className='paragraphe-content'>
							<h2>La recherche a posteriori dans la litérature</h2>
							<h3>Le chiffre maître - 111 - </h3>
							<p>
								Le 111 est décrit comme un chiffre d’alignement, d’éveil et de
								commencement. Il porte l’énergie du 1, mais triplée : ce qui en
								fait un appel, un signal, un portail vibratoire.
							</p>
							<blockquote>
								«Depuis qu’on est arrivé, j'ai en tête la chanson de Tina Arena
								“Voler plus haut.”» - Laëtitia
							</blockquote>
							<i>
								Au passage noter cette synchronisité subtile, le titre de la
								chanson étant “Aller plus haut.”
							</i>
							<p>
								111 marque l’ouverture d’un axe vertical : une montée de
								conscience, un appel à s’élever. C’est le chiffre‑seuil, celui
								qui signale qu’un passage s’ouvre entre deux plans. Une
								vibration de portail : quand le 1 se triple, l’origine devient
								ascension.
							</p>
							<h3>Holda, la fée de l'air et ses vestales.</h3>
							<p>
								En m’appuyant sur{' '}
								<a
									href='https://www.oviloroi.com/boutique/livres/8-presences-invisibles-gardiennes-terre'
									target='_blank'
								>
									les écrits de Yann Lipnick
								</a>
								, la figure de Holda / Dame Holle, considérée comme la reine de
								l’air, apparaît particulièrement pertinente. Elle régit des
								élémentaux de l’air appelés vestals ou vestales.
							</p>
							<p>
								Holda est également liée au monde souterrain et à l’au‑delà. La
								tradition rapporte qu’elle accueille les âmes des enfants morts
								en bas âge et les garde auprès d’elle avec une immense douceur.
							</p>
							<p>
								Les vestales, ces élémentaux ont pour rôle de purificateur. Ils
								peuvent apporter une aide précieuse dans les situations de
								tristesse, de timidité ou de fermeture émotionnelle.
							</p>
							<p>
								Dans la Rome antique, les Vestales étaient des femmes vierges
								chargées de garder le feu sacré de Vesta. Elles étaient
								symboliquement les protectrices de Rome, garantes de sa pureté
								et de sa continuité.
							</p>
							<p>
								D’un point de vue l’archétypal les Vestales et la Vierge Marie
								convergent : protection du feu sacré (Rome Vs Le Christ),
								virginité sacrée, posture protectrice, voile blanc.
								Culturellement parlant, la figure de la Vierge Marie peut être
								vue comme une continuité symbolique des Vestales.
							</p>
							<p>
								Ainsi, trois couches symboliques se superposent harmonieusement
								: Holda, reine de l’air, gardienne des vestals élémentaires les
								Vestales romaines, gardiennes du feu sacré Marie, gardienne de
								la flamme christique.
							</p>
							<p>
								Cette convergence éclaire d’un jour nouveau la présence de
								l’élémentaire d’air et la dynamique féminine subtile perçue sur
								le site.
							</p>
						</section>
						<section className='paragraphe-content'>
							<h3>L'anecdote des chevaux</h3>
							<p>
								Quelques centaines de mètres en contrebas de la fontaine se
								trouve une écurie. Nous étions en train d’étudier le site de la
								fontaine lorsque, soudain, trois cavalières ont emprunté la
								route en direction de l’écurie.
							</p>
							<p>
								Cette anecdote constitue un indice empirique fort, venant
								confirmer la présence d’un champ sacré actif autour de la
								fontaine durant nos recherches.
							</p>
						</section>
					</section>
					<section className='paragraphe-5'>
						<section className='paragraphe-content'>
							<h2>Conclusions de l’étude géobiologique</h2>
							<p>
								La fontaine Saint‑Sauveur est un lieu ancien qui vibre
								silencieusement sous la mousse. Son architecture subtile, dense,
								dont la géométrie singulière sculptée dans des temps reculés, en
								fait un site sacré que seuls les animaux semblent encore
								reconnaître.
							</p>
							<p>
								La fontaine Saint‑Sauveur n’est pas qu’un point d’eau, mais une
								porte qui veille. Un lieu qui ne s’ouvre qu’à ceux qui savent
								prendre le temps de l’écouter, de le conscientiser.
							</p>
							<h3>
								Pistes d’exploration pour une prochaine session sur le lieu
							</h3>

							<ol>
								<li>
									Affiner les mesures et la géométrie : vérifier s’il ne manque
									pas un élément important, notamment un réseau majeur parallèle
									à la route sur l’axe Nord/Sud.
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
									de la zone immédiate.
								</li>
								<li>
									Vérifier la porte astrale et la symétrie subtile : confirmer
									la porte astrale et rechercher une présence en miroir du
									gardien. <br />
									Contexte : le lieu présente une géométrie qui pourrait être
									symétrique.
								</li>
							</ol>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default FontaineStSauveur;
