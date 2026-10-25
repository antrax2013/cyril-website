import CtaExplorateurInv from '../../fragments/Ctas/ExplorateurInvisible';
import CtaExplorations from '../../fragments/Ctas/Explorations';
import CtaGeobiologie from '../../fragments/Ctas/Geobiologie';
import McImage from '../../fragments/McImage/McImage';
import Image1 from '../../../assets/articles/apprendre-a-lire-un-lieu/les-3-portes.png';
import Image2 from '../../../assets/articles/apprendre-a-lire-un-lieu/illustration-exploration-par-pistes-zones-transparentes-500px.png';
import Image3 from '../../../assets/articles/apprendre-a-lire-un-lieu/illustration-observation-visible-geobiologique-zones-transparentes.png';

import '../../../assets/articles/apprendre-a-lire-un-lieu/apprendre-a-lire-un-lieu-img-1.jpg';
import ParagraphSeparator from '../../tools/Paragraph-Separator';

const LireUnLieu = () => {
	return (
		<div className='articles'>
			<div className='article'>
				<section className='paragraphe-1'>
					<h2>Une approche, pas une recette.</h2>
					<p>
						Lire un lieu ne consiste pas à appliquer une suite d’étapes toujours
						identiques. Une exploration peut commencer par une carte, un texte
						ancien, une observation, une perception géobiologique ou une simple
						rencontre avec un lieu.
					</p>
					<p>
						Quel que soit le point de départ, je cherche ensuite à replacer ce
						premier indice dans un ensemble plus vaste. Un lieu est façonné par
						sa géographie, son histoire et les activités humaines, mais aussi
						par la faune, la flore et les phénomènes plus subtils qui s’y
						manifestent.
					</p>
					<p>
						Aucun de ces éléments ne suffit à lui seul. C’est leur mise en
						relation, au fil de l’exploration, qui permet d’approcher peu à peu
						ce qui fait la singularité du lieu.
					</p>
					<blockquote>
						Observer, ressentir et questionner, sans réduire la complexité du
						lieu à une réponse unique.
					</blockquote>
				</section>
				<ParagraphSeparator />
				<section className='paragraphe-2'>
					<h2>
						Il n’existe pas de point de départ unique, pas de méthode figée
					</h2>
					<p>
						Ce qui donne sa cohérence à la démarche n’est pas l’ordre suivi,
						mais la manière dont une piste en ouvre une autre et fait
						progressivement évoluer la lecture du lieu.
					</p>
					<p>
						Je pars de ce qui attire mon attention : une forme dans le paysage,
						une information historique, une perception, une mesure, un
						témoignage ou une relation possible entre plusieurs éléments. Cela
						devient une piste que je suis aussi loin que les informations
						disponibles le permettent.
					</p>
					<div className='img-container'>
						<McImage
							path={Image1}
							className={'img'}
							alt={
								'Trois portes d’entrée pour explorer un lieu : informations, découverte sur le terrain et relation entre plusieurs indices.'
							}
						/>
					</div>
					<p>
						Elle peut se confirmer, se transformer, se ramifier ou conduire à
						une impasse. Lorsque les éléments manquent, je change d’angle :
						nouveau document, retour sur le terrain, mesure, exploration
						géobiologique ou témoignage. Ce nouvel apport peut éclairer la piste
						initiale, en ouvrir une autre ou remettre en question mon
						interprétation.
					</p>
					<p>
						L’intention n’est donc pas forcément présente au départ. Elle
						apparaît lorsqu’une piste mérite d’être approfondie, puis évolue
						avec les découvertes.
					</p>
					<blockquote>
						Questions, observations, documents, témoignages et perceptions
						géobiologiques peuvent intervenir à tout moment. Leur mise en
						relation accompagne toute l’exploration.
					</blockquote>
				</section>
				<ParagraphSeparator />
				<section className='paragraphe-3'>
					<h2>Des regards différents, de valeur égale</h2>
					<p>
						Documents, témoignages, observations visuelles, mesures et
						perceptions géobiologiques offrent différentes manières d’aborder un
						lieu. Dans ma démarche, aucune n’est placée au-dessus des autres.
					</p>
					<div className='img-container'>
						<McImage
							path={Image2}
							className={'img'}
							alt={
								'alt="Schéma d’une exploration sans ordre imposé reliant questions, observations du lieu, documents, témoignages et relevés géobiologiques par leur mise en relation.'
							}
						/>
					</div>
					<p>
						Toutes passent par une interprétation humaine. Un document ancien
						porte le contexte et parfois les partis pris de son auteur. Une
						observation dépend de ce que l’on remarque. Un témoignage est lié à
						une mémoire et à un point de vue. Une mesure dépend d’un outil et de
						ses conditions d’utilisation. Une perception géobiologique demande
						elle aussi à être située et interprétée.
					</p>
					<div className='cta-container'>
						<CtaGeobiologie className='cta-tertiary' />
					</div>
					<p>
						Ces approches ne sont pas interchangeables : chacune révèle une
						dimension particulière du lieu. Je ne cherche donc pas à utiliser un
						document pour valider une perception, ni une perception pour prouver
						un récit historique. J’observe plutôt comment ces lectures se
						répondent, se complètent, s’écartent ou ouvrent une nouvelle piste.
					</p>
					<div className='box-label-container'>
						<div className='img-container'>
							<ul className='box-label'>
								<li>Les documents et archives</li>
								<li>Les observations</li>
								<li>Les ressentis</li>
								<li>Les hypothèses</li>
							</ul>
							<McImage
								path={Image3}
								className={'img img-lg'}
								alt={
									'Image exemple documenté de Saint-Sauveur Photographie réelle + carte ou plan + relevé de terrain.'
								}
							/>
						</div>
					</div>
					<legend>
						Chaque support apporte une partie de l’information. Leur
						confrontation fait apparaître les relations entre les différents
						indices.
					</legend>
				</section>

				<section className='paragraphe-4'>
					<h2>La mise en relation se fait tout au long du chemin</h2>
					<p>
						La mise en relation ne se fait pas seulement à la fin. Une carte
						peut donner un autre sens à une orientation remarquée sur place. Une
						perception peut attirer l’attention sur une zone délaissée. Un
						témoignage peut inviter à relire un document ou à revenir sur le
						terrain.
					</p>
					<p>
						La lecture se transforme ainsi au fil de l’exploration. Toutes les
						informations ne doivent pas entrer dans une explication unique.
						Certaines pistes aboutissent, d’autres restent ouvertes faute
						d’éléments. Il est alors plus juste de suspendre la conclusion que
						de combler les vides.
					</p>
				</section>
				<section className='paragraphe-5'>
					<h2>Conclusion</h2>
					<p>
						Lire un lieu, ce n’est pas mémoriser un parcours à reproduire. C’est
						accueillir des informations de différentes natures, reconnaître les
						pistes qui apparaissent et choisir comment les approfondir.
					</p>
					<p>
						Il s’agit de tirer le fil, de s’adapter à ce qui se présente et
						d’accepter que la compréhension se construise progressivement,
						parfois sans réponse définitive.
					</p>
				</section>
				<ParagraphSeparator />
				<aside>
					<h2>Pour aller plus loin</h2>
					<p>Envie d’expérimenter cette démarche par vous-même ?</p>

					<div className='cta-container'>
						<CtaExplorateurInv ctaText='Découvrir le cycle « Explorateur de l’invisible »' />{' '}
						<CtaExplorations
							ctaText={'Voir mes explorations sur le terrain'}
							className={'cta-secondary'}
						/>
					</div>
				</aside>
			</div>
		</div>
	);
};

export default LireUnLieu;
