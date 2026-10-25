// import '../../scss/routes/Actues-et-News.scss';
import CardList from '../fragments/CardList/CardList';
import ParagraphSeparator from '../tools/Paragraph-Separator';
import { ArticleList } from '../entities/articles/ArticleList';

const Articles = () => {
	return (
		<>
			<div className='article card-list'>
				<div className='first-header-2'>
					<div className='first-header-2-container'>
						<div className='header-2-container'>
							<div className='header-2-content'>
								<h1>Articles</h1>
								<p className='header-2-sub-title size-l-hidden'>
									Un espace où je partage ce qui nourrit mes recherches et mes
									pratiques.
								</p>
								<div className='header-2-description'>
									<p>
										Géobiologie, exploration des lieux, tambour, Reiki, Munnay
										Ki, communication animale… mais aussi des sujets qui
										m’interpellent, des expériences de terrain et des réflexions
										plus personnelles autour du sensible et de l’invisible.
									</p>
									<p>
										Ces articles sont avant tout une manière de transmettre,
										d’explorer et de garder une trace de ce qui m’inspire au fil
										du temps.
									</p>

									<blockquote>
										Entre visible et invisible, il reste toujours quelque chose
										à découvrir.
									</blockquote>
								</div>
							</div>
						</div>
					</div>
					<ParagraphSeparator />
					<CardList cards={ArticleList} disableFilters={true} />
				</div>
			</div>
		</>
	);
};
export default Articles;
