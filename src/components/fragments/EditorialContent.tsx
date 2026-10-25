import { Badge } from 'primereact/badge';

import { getBadgeSeverityFromTag } from '../../modules/helpers';

import ParagraphSeparator from '../tools/Paragraph-Separator';
import SharePopup from '../tools/SharePopup';
import { iCard, iCardInfo } from './CardList/ICard';
import MiniCardList from './CardList/MiniCardList';

export interface EditorialContentProps {
	data: iCard;
	cards: iCardInfo[];
}

const EditorialContent = ({ data, cards }: EditorialContentProps) => {
	return (
		<>
			<article className='article BlogArticle'>
				<div className='article-container'>
					<h1>{data.h1}</h1>
					<section className='icon-panel'>
						<SharePopup url={window.location.href} title='{data.h1}' />
					</section>
					<div className='article-main-container'>
						<div className='article-content-container'>
							<p>
								<b>{data.type}</b> -{' '}
								<i>publié le : {data.date.toLocaleDateString()}</i>
							</p>
							<div className='blog-card-tags'>
								{data.tags.map((tag: string, i: number) => (
									<span className='blog-card-tag' key={`span-tag-${i}`}>
										<Badge
											value={tag}
											severity={getBadgeSeverityFromTag(tag)}
										/>
									</span>
								))}
							</div>
							{data.content}
						</div>
					</div>
				</div>
				<ParagraphSeparator />
				<MiniCardList cards={cards} />
			</article>
		</>
	);
};

export default EditorialContent;
