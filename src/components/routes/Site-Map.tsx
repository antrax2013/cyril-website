import { iCard, iCardInfo } from '../fragments/CardList/ICard';
import { ArticleList } from '../entities/articles/ArticleList';
import { explorationCards } from '../entities/explorationCards/exporationCards';

const SiteMap = () => {
	const articles: iCard[] = [...ArticleList];
	const explorations: iCard[] = [...explorationCards];

	return (
		<>
			<div className='article'>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Accueil</a>
					</li>

					<li>
						<h2>Géobiologie</h2>
						<ul>
							<li>
								<a href='/geobiologie'>Découvrir la géobiologie</a>
							</li>
							<li>
						<a href='/explorations'>
							Explorations géobiologiques et lecture des lieux
						</a>
					</li>
					<li>
								<a href='/initiations/geobiologie/explorateur-de-l-invisible'>
									Explorateur de l’Invisible
								</a>
							</li>
						</ul>
					</li>

					<li>
						<h2>
							<a href='/mon-approche'>Mon approche</a>
						</h2>
					</li>

					<li>
						<h2>
							<a href='/explorations'>Explorations</a>
						</h2>
						<ul>
							{explorations.map((article: iCardInfo, i: number) => (
								<li key={`article-${i}`}>
									<a
										href={`articles/${article.slug}`}
									>{`${article.date.toLocaleDateString()} - ${article.h1}`}</a>
								</li>
							))}
						</ul>
					</li>

					<li>
						<h2>
							<a href='/articles'>Articles</a>
						</h2>
						<ul>
							{articles.map((article: iCardInfo, i: number) => (
								<li key={`article-${i}`}>
									<a
										href={`articles/${article.slug}`}
									>{`${article.date.toLocaleDateString()} - ${article.h1}`}</a>
								</li>
							))}
						</ul>
					</li>

					<li>
						<h2>
							<a href='/agenda'>Agenda</a>
						</h2>
					</li>

					<li>
						<h2>
							<a href='/contact'>Contact</a>
						</h2>
					</li>

					<li>
						<a href='/politique-de-confidentialite'>
							Politique de confidentialité
						</a>
					</li>
					<li>
						<a href='/plan-du-site'>Plan du site</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default SiteMap;
