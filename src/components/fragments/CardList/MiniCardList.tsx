import { iCardInfo } from './ICard';
import MiniCard from './MiniCard';

export interface MiniCardListProps {
	cards: iCardInfo[];
}

const MiniCardList = ({ cards }: MiniCardListProps) => {
	return (
		<>
			<aside
				className='related-articles-section'
				aria-label='Articles connexes'
			>
				<h2 className='related-title'>📖 À lire aussi</h2>

				<div className='related-articles-grid'>
					{cards.map((card, index) => (
						<MiniCard
							key={`minicard-${index}`}
							slug={card.slug}
							date={card.date}
							thumbnail={card.thumbnail}
							type={card.type}
							tags={[]}
							h1={card.h1}
						/>
					))}
				</div>
			</aside>
		</>
	);
};

export default MiniCardList;
