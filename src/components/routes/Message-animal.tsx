import MetaTag from '../tools/MetaTag';
import '../../scss/routes/MessageAnimal.scss';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import MessageAnimalChien from '../../assets/la-communication-animale/florian-schindler-iz_C0d3tK1Q-unsplash.png';
import MessageAnimalLapin from '../../assets/la-communication-animale/pexels-pixabay-372166.png';
import MessageAnimalChat from '../../assets/la-communication-animale/pexels-marcus-pinho-328812-923360.png';

const MessageAnimal = () => {
	const head = () => {
		return (
			<MetaTag
				title='La communication animale'
				description='La communication animale, un moyen pour renforcer la compréhension mutuelle entre un gardien et son animal, dont je ne suis que le messager.'
				resume='La communication animale, messager entre deux êtres, le gardien et son animal, sur un plan subtil, je fluidifie l’échange et permet une écoute mutuellement pour renforcer leurs liens et amour réciproque.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='message-animal'>
				<article>
					<h1>La communication animale</h1>
					<h2>L’écoute du message animal</h2>
					<section className='paragraphe-1'>
						<aside>
							<div>
								<a
									href='https://unsplash.com/fr/photos/un-chiot-golden-retriever-dort-sur-un-plancher-en-bois-iz_C0d3tK1Q?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
									target='_blank'
								>
									<img
										src={MessageAnimalChien}
										className='img-message-animal-chien'
										alt='Photo d’un chiot golden retriever, de Florian Schindler, dormant paisiblement sur le parquet.'
										title='La communication animale, apporter de la sérénité aux animaux.'
										loading='lazy'
									/>
								</a>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<p>
								Une session de <em>communication animale</em> n’est ni un{' '}
								<b>acte médical</b>, ni de <b>la psychologie animal</b> et ne
								les
								<b> remplace pas</b>. Un animal peut y exprimer son mal-être,
								une douleur, un ressenti, ou, au contraire, de la joie, de la
								sérénité... mais, comme pour un humain, cela n’est en aucun cas
								<b> un diagnostic</b>.
							</p>
							<p className='txt-center '>
								<b className='txt-warning'>
									Je ne suis pas vétérinaire et ne les remplace pas. Seul un
									vétérinaire pourra poser un diagnostic, proposer d’éventuels
									soins et traitements médicaux.
								</b>
							</p>

							<p>
								La <em>communication animale</em> est avant tout la rencontre de
								deux âmes sur un plan subtil. Elle se fait dans un respect
								mutuel, la sincérité et la bienveillance. Je suis le messager
								entre votre animal et vous, son « propriétaire », son gardien.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<h2>Le déroulé d’une séance de communication animale</h2>
					<section className='paragraphe-2'>
						<section className='paragraphe-content'>
							<p>
								La séance se déroule en plusieurs phases : une phase
								préparatoire, une phase d’écoute et de transmission, une phase
								de restitution.
							</p>
							<p className='txt-center'>
								<i className='comment'>
									L’animal est libre et peut ou non accepter l’échange.
								</i>
							</p>
							<h3>La phase préparatoire : définir l’objectif de la séance</h3>
							<p>
								Nous, gardien et messager, ensemble, définissons un objectif de
								séance basé sur un ensemble de questions et messages à
								transmettre. L’idée est d’établir un fil conducteur pour
								répondre au mieux à vos attentes.
							</p>
							<p>
								Moins je connais de détails sur votre animal, moins je serais
								influencé, plus juste seront mes ressentis.
							</p>
						</section>
						<aside>
							<div>
								<a
									href='https://www.pexels.com/fr-fr/photo/lapin-blanc-et-brun-sur-champ-d-herbe-verte-372166/'
									target='_blank'
								>
									<img
										src={MessageAnimalLapin}
										className='img-message-animal-lapin'
										alt='Photo d’un lapin brun et blanc au milieu des paquerettes prise par Pixabay'
										title='La communication animale, comprendre les besoins de votre animal'
										loading='lazy'
									/>
								</a>
							</div>
						</aside>
					</section>

					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h3>La phase d’écoute et de transmission : l’échange intuitif</h3>
							<p>
								A distance, j’entre en contact, sur un plan subtil, avec votre
								protégé. Le contact est progressif, doux et évolue en fonction
								de ce qu’il permet. Certains animaux sont très demandeurs et
								d’autres plus réservés. Cela dépend de leur caractère et de
								leurs envies du moment.
							</p>
							<p>
								Durant cette première partie, comme pour n’importe quelle
								rencontre, je vais me présenter, lui dire pourquoi je viens à
								lui et de la part de qui.
							</p>
							<p>
								Ensuite, en fonction de son attitude et de ses choix, je
								recevrai, ou non, des informations sous diverses formes.
							</p>
							<p className='txt-center'>
								<i className='comment'>
									Votre protégé est un être libre et souverain. Il dispose de
									son libre arbitre et peut ou non consentir à l’échange.
								</i>
							</p>
							<p>
								Je lui poserai les questions que nous avons préparées et lui
								délivrerai les messages de votre part. En retour, j’écouterai et
								vous remetterai les siens. Si besoin, pour approfondir un ou
								plusieurs points, je me réserverai le droit de poser des
								questions complémentaires, sans jugement, avec douceur et
								respect, comme lors d’une conversation sincère avec un ami.
							</p>
							<aside>
								<div>
									<a
										href='https://www.pexels.com/fr-fr/photo/chat-tigre-gris-allonge-sur-des-guirlandes-blanches-923360/'
										target='_blank'
									>
										<img
											src={MessageAnimalChat}
											className='img-message-animal-chat'
											alt='Photo d’un chat tigré jouant avec des guilandes prise par Marcus Pinho'
											title='La communication animale, transmettre une émotion sans filtre dans le respect mutuel'
											loading='lazy'
										/>
									</a>
								</div>
							</aside>

							<h3>La restitution du message animal</h3>
							<p>
								Durant la phase d’échange, je noterai, sans filtre, toutes les
								informations et vous les resituerai sans interprétation, peu
								importe leur nature.
							</p>
							<p className='txt-center'>
								<i className='comment'>
									Les sessions se font dans le respect, la sincérité et
									l’authenticité.
								</i>
							</p>
							<p>
								Les animaux ont une autre vision du monde que nous et d’autres
								préoccupations. Et, quelque fois, au cours d’une séance, des
								informations insolites surgissent. Ce qui ne fait pas sens
								aujourd’hui, peut trouver du sens avec le temps.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<p>
								En amont de la séance, j’ai besoin de divers informations et
								supports :
							</p>
							<ul>
								<li>
									Le nom, la date de naissance et/ou l’âge de votre animal{' '}
									<i>(si possible)</i>
								</li>
								<li>
									Une ou plusieurs photos récentes de pleins pieds dans une
									position ou une attitude habituelle. L’idée est de disposer
									d’une représentation visuelle de votre animal tel qu’il est au
									naturel
								</li>
								<li>
									La cause de la session ainsi qu'un ensemble de questions et
									messages à transmettre
								</li>
							</ul>
							<p>
								<i>
									<u>NB :</u> Étant encore en phase d’apprentissage, j’aurai
									besoin que certaines questions soient des questions me
									permettant de valider la bonne connexion avec vôtre animal. A
									cet effet, j’ai besoin de quelques questions simples sur ses
									habitudes dont vous connaissez la réponse : ce qu’il aime
									manger, où il aime dormir, son activité préférée etc.
								</i>
							</p>
							<p className='txt-center '>
								<b className='txt-warning'>
									Je ne souhaite entrer en connexion qu'avec des animaux
									vivants.
								</b>
							</p>
						</section>
					</section>
				</article>
			</div>
		</>
	);
};

export default MessageAnimal;
