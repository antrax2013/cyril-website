import CardList from './CardList';
import { CardListProps } from './ICard';

const CardsContainer = ({ cards }: CardListProps) => {
	return (
		<div className='cards-container'>
			<div className='cards-card-panel'>
				<CardList cards={cards} />
			</div>
		</div>
	);
};

export default CardsContainer;
