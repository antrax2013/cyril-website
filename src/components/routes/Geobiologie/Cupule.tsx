import MetaTag from '../../tools/MetaTag';
import ParagraphSeparator from '../../tools/Paragraph-Separator';
import Cupule1 from '../../../assets/cupules/cupule-11.png';
import Cupule2 from '../../../assets/cupules/cupule-2.png';
import Cupule3 from '../../../assets/cupules/cupule-3.png';
import '../../../scss/routes/Geobiologie/LesCupules.scss';

const Cupule = () => {
	const head = () => {
		return (
			<MetaTag
				title={import.meta.env.VITE_META_MAIN_TITLE || 'Les cupules'}
				description='Les cupules, ces énigmatiques pétroglyphes, formés par l’Homme, extrémenement répandus dont les archéologues en ignorent l’usage et la signification. Symbole du féminin, je vous propose de partir ensemble à la découverte de ces souvenirs du passé. Voyons ce que les mondes subtils ont à nous apprendre sur les cupules. Cyril COPHIGNON'
				resume='Les cupules, symbole du féminin, ces énigmatiques pétroglyphes, formés par l’Homme, extrémenement répandus dont les archéologues en ignorent l’usage et la signification.'
				forceTitle={true}
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='LesCupules'>
				<article>
					<h1>Les cupules</h1>
					<section className='paragraphe-1'>
						<aside>
							<div>
								<img
									src={Cupule2}
									className='img-cupules-roche-valee'
									alt='Photographie d’une roche dominant une vallée en montagne avec de multiple cupules, à proximité d’un village.'
									title='Les cupules - Une roche aux multiples cupules.'
									loading='lazy'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Une cupule, pour les archéologues, est un pétroglyphe. De formes
								variées, souvent horizontale, elle est une dépression creusée
								par l’Homme à la surface d’une roche, d’un mégalithique ou d’une
								paroi de grotte. Elle est la manifestation du principe féminin,
								là où le menhir est la manifestation du principe masculin.
							</p>
							<p>
								Les appellations « pierre à cupules », « pierre cupuliforme » ou
								« pierre à écuelles » sont utilisés pour nommer ces
								pétroglyphes.
							</p>
							<p>
								Il s’agit d’une dépression concave, de forme circulaire ou ovale
								ou autre et d’une profondeur de quelques millimètres, martelée
								généralement à l’aide de percuteurs en pierre (quartz, granit),
								parfois retrouvés in situ.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								Les cupules sont la résultante de l'activité culturelle et/ou
								sociale humaine : phénomène d’anthropisation du milieu de vie.
								Il n'est évidemment pas à exclure que certaines cavités soient
								d’origine naturelle et que par opportunité, elles ont été
								détournées, façonnées par l'Homme.
							</p>
							<p>
								De taille généralement modeste, quelques dizaines de centimètres
								tout au plus, ses parois sont incurvées et régulières. En deçà
								de 2 cm, les archéologues les qualifient plutôt de « point » ;
								au-delà de 2 cm on parle plutôt de « cuvettes », « bassins » ou
								« vasques », qui résultent le plus souvent d’une érosion
								différentielle.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={Cupule1}
									className='img-cupules-roche-3-cupules'
									alt='Photographie de Jl Staub d’une roche présentant deux cupules'
									title='Les cupules - Une roches et ses deux cupules.'
									loading='lazy'
								/>
							</div>
						</aside>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<p>
								Bien que des milliers de cupules ont été référencées à travers
								les continents, on ignore complétement leurs usages et leurs
								destinations :
							</p>
							<ul>
								<li>Simple écuelle naturelle</li>
								<li>
									Mortier : dans le concassage, broyage, affutage ou polissage
									de matière
								</li>
								<li>Lithopone : zone percutée pour créer un son</li>
								<li>Décoration, art</li>
								<li>
									Représentation iconographique : principe féminin, figuration
									soléiforme
								</li>
								<li>
									Utilisées dans le cadre de cérémonies ou rituels pour
									recueillir ou contenir un liquide (eau, sang, teinture,
									décoction, infusion...)
								</li>
								<li>
									Archéologie primaire : projection de constellations,
									zodiaques, calendrier de suivi des astres, des saisons ...
								</li>
							</ul>
							<aside>
								<div>
									<img
										src={Cupule3}
										className='img-cupules-pétroglyphe'
										alt='Photographie de Holger Ellgaard d’une roches aux multiples pétroglyphes suggérant des formes de bâteaux, d’annimaux et des dizaines de cupules.'
										title='Les cupules - Une roche aux multiples pétroglyphes dont des cupules.'
										loading='lazy'
									/>
								</div>
							</aside>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<p>
								En géobiologie, il a été noté que ces cupules sont très souvent
								liées à l’eau. A travers les prismes du subtil, de la géométrie
								et/ou de l’astronomie pourrait-on en apprendre d’avantage sur
								les cupules ?
							</p>
							<p>
								Bien que je n’aie aucune idée de ce que l’on pourrait découvrir,
								je vous propose d'explorer des sites dans les Yvelines à la
								recherche de celles-ci. L’objectif sera de les répertorier, de
								voir comment elles sont agencées pour tenter d'en extraire des
								informations.
							</p>
						</section>
					</section>
					<section className='paragraphe-5'>
						<section className='paragraphe-content'>
							<p>
								A cette effet, j’ai ciblé 4 sites potentiellement intéressants
								et qui pourraient contribuer à cette quête :
							</p>
							<ul>
								<li>
									Les rochers{' '}
									<a
										href='https://photos.piganl.net/2009/angennes/angennes.php'
										target='_blank'
										title='En cliquant sur ce lien, accédez à un article et une série de photos sur les rochers d’Angennes à Poigny-la-Foret'
									>
										d’Angennes à Poigny-la-Foret
									</a>
								</li>
								<li>
									Les rochers du{' '}
									<a
										href='https://maps.app.goo.gl/sUZ2aNs8dNwYY1fh9'
										target='_blank'
										title='En cliquant sur ce lien, accédez au plan et à une série de photos sur les rochers du four du diable à Gambaiseuil'
									>
										four du diable à Gambaiseuil
									</a>
								</li>
								<li>
									Les roches de la forêt Saint-Benoit à Maincourt-sur-Yvette
								</li>
								<li>Les roches de la forêt des Vaux de Cernay</li>
								{/* https://climbingaway.fr/fr/site-escalade/dampierre-maincourt https://bleau.info/vauxdecernay */}
							</ul>
							<aside>
								<div>
									<video controls>
										<source
											src={
												import.meta.env.BASE_URL +
												'public/les-cupules/Cupules.ogv'
											}
											type='video/ogg'
											title='Vidéo de Fanny Schertzer montrant, comment on peut matérialiser, avec de l’eau, les connexions entre des cupules'
										/>
									</video>
								</div>
							</aside>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default Cupule;
