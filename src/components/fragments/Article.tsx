import { useParams } from 'react-router-dom';
import { getSimilarArticles } from '../../modules/helpers';

import '../../scss/fragments/Blog/BlogArticle.scss';

import { ArticleList } from '../entities/articles/ArticleList';
import { iCard } from './CardList/ICard';
import EditorialContent from './EditorialContent';

const Article = () => {
	const { slug } = useParams<{ slug: string }>();
	const data: iCard = ArticleList.filter((e) => e.slug === slug)[0];
	const similars = getSimilarArticles(data, ArticleList);

	return <EditorialContent data={data} cards={similars} />;
};

export default Article;
