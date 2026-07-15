import { Button } from 'primereact/button';
import MetaTag from '../../tools/MetaTag';
import ParagraphSeparator from '../../tools/Paragraph-Separator';
import React from 'react';
import CustomDialog from '../../tools/CustomDialog';
import Marcheur from '../../../assets/ressources/entretien-tambours/le-marcheur-et-son-tambour.jpg';
import MonTambour from '../../../assets/ressources/entretien-tambours/mon-tambour2.jpg';
import TabourArbreBleu from '../../../assets/ressources/entretien-tambours/tambour-arbre.jpg';
import '../../../scss/routes/Ressources/EntretienTambour.scss';
import SharePopup from '../../tools/SharePopup';

const EntretienTambourChamanique = () => {
	const [visible, setVisible] = React.useState(false);

	const head = () => {
		return (
			<MetaTag
				title='Protection tambour en peau : sécheresse et humidité'
				description='La peau d’un tambour réagit fortement à l’humidité : chaleur et sécheresse peuvent la tendre, l’étirer ou la détendre. Nicolas détaille les risques, les bons gestes, l’humidification et les protocoles pour préserver la tension et la qualité sonore de votre tambour.'
				resume='La chaleur et l’air sec peuvent abîmer la peau de votre tambour. Nicolas explique comment l’humidité influence la tension, comment éviter les dommages et quelles actions simples protègent durablement votre instrument.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='EntretienTambourChamanique'>
				<div className='article'>
					<h1>
						Comment protéger votre tambour en période de fortes chaleurs et
						d’air sec
					</h1>
					<section className='icon-panel'>
						<SharePopup
							url={window.location.href}
							title='Protéger son tambour en peau'
						/>
					</section>
					<i>
						Tous droit réservé à{' '}
						<a href='https://tambours-medecine-ossau.com/' target='_blank'>
							Nicolas, Créateur et Gardien de Tambours Médecine d'Ossau
						</a>
					</i>
					<section className='paragraphe-1-1'>
						<section className='paragraphe-content'>
							<p>
								Lorsque les températures montent, l’air devient souvent très
								sec. Et tout comme nous, les tambours peuvent en souffrir. Leur
								peau, issue d’un matériau naturel, réagit fortement aux
								variations d’humidité. Comprendre ce phénomène permet de mieux
								protéger votre instrument et d’éviter des dommages
								irréversibles.
							</p>
							<blockquote>
								L'igrométrtie idéale pour un tambour se situe entre 40% et 60%
								d'humidité.
							</blockquote>
						</section>
					</section>
					<section className='paragraphe-1-2'>
						<section className='paragraphe-content'>
							<h2>Une peau animale : une matière vivante qui réagit</h2>
							<p>
								La peau de votre tambour est une matière vivante. Elle se
								comporte exactement comme le bois :
							</p>
							<ul>
								<li>
									Quand l’air est humide, elle absorbe l’eau et gonfle
									légèrement.
								</li>
								<li>
									Quand l’air est sec, elle perd son eau et se rétracte, ce qui
									augmente la tension.
								</li>
							</ul>
							<p>
								Nicolas utilise souvent l’exemple du bois pour expliquer ce
								phénomène, car il est plus connu et fonctionne de la même
								manière.
							</p>
							<p>
								Votre tambour arrive chez vous habitué à un certain taux
								d’humidité. Si votre intérieur est plus sec, il sera plus tendu
								au début, puis finira par s’adapter.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={Marcheur}
									className='img-marcheur-tambour'
									alt='Un homme au bord du lac, jouant du tambour en peau sous la cascade, éclairé par une lanterne dorée dans une ambiance argent‑bleu mystique.'
									title='Le marcheur et son tabmour.'
								/>
							</div>
						</aside>
					</section>
					<h2>Pourquoi mon tambour se détend parfois ?</h2>
					<section className='paragraphe-2-1'>
						<section className='paragraphe-content'>
							<p>
								Il est normal qu’un tambour se détende et ne sonne plus
								lorsqu’il a été exposé à l’humidité. C’est même voulu : cela le
								protège d’une tension excessive qui pourrait l’endommager
								définitivement.
							</p>
							<p>
								Une fois qu’il aura séché, la tension reviendra naturellement.
							</p>
						</section>
					</section>
					<section className='paragraphe-2-2'>
						<aside>
							<div>
								<img
									src={MonTambour}
									className='img-mon-tambour'
									alt='Tambour chamanique posé dans les bois par un matin d’automne, entouré de feuilles dorées et de cristaux éclairés par une lumière douce et dorée.'
									title='Promenade matinale avec mon tambour.'
								/>
							</div>
						</aside>
						<section className='paragraphe-content'>
							<h2>Les risques liés à la sécheresse</h2>
							<p>
								Contrairement à ce que l’on pourrait croire, ce n’est pas
								l’humidité qui abîme un tambour. C’est la <b>sécheresse</b>.
							</p>
							<p>Un air trop sec ou une exposition au soleil peut :</p>
							<ul>
								<li>trop tendre la peau,</li>
								<li>l’étirer comme un élastique,</li>
								<li>finir par la déformer durablement,</li>
								<li>voir pire briser le cadre.</li>
							</ul>
							<p>
								C’est pour cela qu’un tambour peut rester détendu même lorsqu’il
								ne fait pas humide : <br />
								➡️ <b>il a été trop tendu trop longtemps</b>, et la peau s’est
								allongée.
							</p>
						</section>
					</section>
					<section className='paragraphe-3'>
						<section className='paragraphe-content'>
							<h2>Conseils essentiels pour protéger votre tambour</h2>
							<ul>
								<li>Ne laissez jamais votre tambour en plein soleil.</li>
								<li>Évitez les pièces trop chaudes ou trop sèches.</li>
								<li>
									Gardez un hygromètre près de votre tambour pour surveiller
									l’humidité.
								</li>
								<li>
									Placez-le dans une pièce humide (salle de bain, chambre).
								</li>
							</ul>
							<p>Nicolas le rappelle souvent :</p>
							<blockquote>
								L’humidité n’abîme pas un tambour. C’est le manque d’eau qui est
								dangereux.
							</blockquote>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-4'>
						<section className='paragraphe-content'>
							<h2>Comment humidifier correctement votre tambour</h2>
							<p>Vous pouvez humidifier la peau sans risque :</p>
							<ul>
								<li>avec un brumisateur,</li>
								<li>
									ou en mettant un peu d’eau dans votre main et en l’étalant
									doucement.
								</li>
							</ul>
							<p>
								À l’intérieur, contentez-vous d’une légère humidification pour
								éviter que le bois ne gonfle. Sur le dessus, vous pouvez mettre
								davantage d’eau.
							</p>
							<p>
								Si vous ne comptez pas l’utiliser immédiatement, ne retirez pas
								l’excédent : cela le détendra davantage mais le protégera plus
								longtemps.
							</p>
							<p>
								Ne vous inquiétez pas si la peau devient très souple après
								humidification : <br />
								➡️ c’est normal et sans danger.
							</p>
						</section>
						<aside>
							<div>
								<img
									src={TabourArbreBleu}
									className='img-tambour-arbre-bleu'
									alt='Tambour chamanique, où par paréidolie apparaît la forme d’un arbre bleu.'
									title='La tambour arbre bleu.'
								/>
							</div>
						</aside>
					</section>
					<section className='paragraphe-5'>
						<section className='paragraphe-content'>
							<h2>Mon tambour est trop détendu, que faire ?</h2>
							<p>
								Si votre tambour est trop détendu, même en période de
								sécheresse, Nicolas a un protocole à suivre pour rétablir la
								tension. Ces méthodes permettent souvent de redonner vie à un
								tambour que l’on croyait perdu.
							</p>
							<Button
								label='Le protocole'
								icon='pi pi-external-link'
								onClick={() => setVisible(true)}
							/>
							<CustomDialog
								title='Protocole "reset" de la peau'
								visible={visible}
								maximizable
								style={{ width: '50vw' }}
								onHide={() => {
									if (!visible) return;
									setVisible(false);
								}}
							>
								<p className='m-0'>
									Voici un protocole maison mis au point par Nicolas après des
									années d’expérimentations afin de faire un petit "reset" de la
									tension de la peau. Il fonctionne dans la grande majorité des
									cas, à condition que le tambour ait été correctement tendu à
									sa naissance.
								</p>
								<h3>Étape 1: humidification externe.</h3>
								<ul>
									<li>Versez 2 à 3mm d’eau sur toute la surface de la peau.</li>
									<li>Laissez l'eau 3 à 5 min selon son épaisseur. </li>
									<li>Puis enlevez l’eau.</li>
								</ul>
								<h3>Étape 2: humidification interne légère.</h3>
								<ul>
									<li>
										Versez 1mm maximum d’eau à l’intérieur du tambour, juste
										suffisamment pour que toute la peau soit recouverte.
									</li>
									<li>
										Laissez l'eau 3-5 min, videz, puis laissez reposer le
										tambour pendant 2 min.{' '}
									</li>
								</ul>
								<p>
									⚠️ <b>Pas plus d'1mm</b>, sinon le cadre risque de gonfler en
									absorbant l'eau lui aussi !
								</p>
								<h3>Étape 3: Répétez ce cycle 3 à 5 fois.</h3>
								<p>
									La peau doit devenir toute gondolée. Ça fait peur, mais c’est
									bon signe !
								</p>
								<h3>Étape 4: Séchage.</h3>
								<ul>
									<li>
										Posez le tambour en appui vertical contre un mur (reposant
										uniquement sur son cadre, pas sur les cordes ou la peau !).
									</li>
									<li>
										Laissez sécher 24h dans un endroit le plus humide possible !
										Pas de soleil, de chauffage etc !
									</li>
									<li>
										Plus l’humidité ambiante est présente, mieux cela fonctionne
										(en général au-dessus de 60-65% c'est idéal).
									</li>
								</ul>
								<h3>Étape 5: Profitez à nouveau de votre tambour !</h3>
								<p>
									Dans la grande majorité des cas, la peau retrouve une bien
									meilleure tension, proche de celle d'origine ! Mais si le
									tambour était très détendu avant le protocole, ce dernier peut
									ne pas suffire...
								</p>
								<p>Dans ce cas, il faudra refaire entièrement le tambour.</p>
								<h3>⚠️ Attention: à vos risques et précautions !</h3>
								<p>
									Ce protocole est sûr si bien respecté, je l'ai fait de
									nombreuses fois sans problème. Mais :
								</p>
								<ul>
									<li>trop d’eau à l’intérieur ➡️ cadre gonflé</li>
									<li>oubli de l’eau ➡️ peau abîmée</li>
									<li>séchage trop sec ➡️ déformations</li>
								</ul>
								<p>
									<b>
										Nicolas, et moi, déclinons toute responsabilité en cas de
										mauvaise manipulation.
									</b>
								</p>
								<p>
									Prenez le temps, suivez bien chaque étape… et tout ira bien !
									Évidemment le mieux reste encore de ne pas en arriver là. Donc
									évitez la sécheresse.
								</p>
							</CustomDialog>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-6'>
						<section className='paragraphe-content'>
							<h2>
								Entretenir la peau du tambour à chaque changement de saison
							</h2>
							<p>
								À chaque changement de saison,{' '}
								<a
									href='https://tambourunite.com/les-fondateurs/'
									target='_blank'
								>
									Lany et Jacques, de Tambour unité
								</a>
								, recommandent de graisser la peau du tambour afin de la
								nourrir, de la protéger et de préserver sa souplesse naturelle.
								Vous pouvez utiliser une{' '}
								<a
									href='https://tambourunite.com/huile-dentretien-pour-tambours-ancrage/'
									target='_blank'
								>
									huile minérale
								</a>
								, de l’huile de coco, ou de la graisse d’ours, trois matières
								particulièrement adaptées aux peaux animales.
							</p>
						</section>
					</section>
					<ParagraphSeparator />
					<section className='paragraphe-7'>
						<section className='paragraphe-content'>
							<h2>Conclusion</h2>
							<p>
								Un tambour est un être de matière vivante. Il respire, il
								réagit, il s’adapte. En comprenant son fonctionnement et en
								surveillant l’humidité, vous pouvez le protéger durablement et
								préserver sa qualité sonore.
							</p>
						</section>
					</section>
				</div>
			</div>
		</>
	);
};

export default EntretienTambourChamanique;
