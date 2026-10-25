import { useParams } from 'react-router-dom';
import { getSimilarArticles } from '../../modules/helpers';

import '../../scss/fragments/Blog/BlogArticle.scss';

import { explorationCards } from '../entities/explorationCards/exporationCards';
import { iCard } from './CardList/ICard';
import EditorialContent from './EditorialContent';

const Exploration = () => {
	const { slug } = useParams<{ slug: string }>();
	const { region } = useParams<{ region: string }>();
	const url = `${region}/${slug}`;
	const data: iCard = explorationCards.filter((e) => e.slug === url)[0];
	const similars = getSimilarArticles(data, explorationCards);

	return <EditorialContent data={data} cards={similars} />;
};

export default Exploration;
