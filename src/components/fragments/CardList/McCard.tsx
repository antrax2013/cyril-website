import { Card } from 'primereact/card';
import { iCard } from './ICard';
import McImage from '../McImage/McImage';
import Cta from '../Ctas/Cta';

import { Badge } from 'primereact/badge';
import { getBadgeSeverityFromTag } from '../../../modules/helpers';

import '../../../scss/fragments/CardList/Card.scss';
import Metas from '../MetaTags/metas.json';
import { iMetaTag } from '../MetaTags/IMetaTag';

const McCard = ({ slug, date, tags, images, type, h1 }: iCard) => {
	const thumbnail = images[0];
	const meta: iMetaTag = Metas.metas.find((m) => m.key === slug) || {
		title: '',
		description: '',
		canonical: '',
	};
	const header = <h2>{h1 ?? meta.title}</h2>;
	const footer = (
		<Cta
			link={meta.canonical}
			title={`Lire le post sur l’${type} : ${h1 ?? meta.title}`}
			ctaText='Lire la suite'
			ctaLinkClassName='cta-secondary'
			target='_blank'
		/>
	);

	const key = Math.random() * 1000000;

	return (
		<div className='McCard'>
			<Card
				footer={footer}
				header={header}
				className='card-main-container md:w-25rem'
				key={`card-${key}`}
			>
				<div className='card-first-container'>
					<div className='card-img-container'>
						<McImage
							path={thumbnail.path}
							className={'card-thumbnail'}
							alt={thumbnail.alt}
							key={`img-${key}`}
						/>
					</div>
					<p>
						<b>{type}</b> - <i>{date.toLocaleDateString()}</i>
					</p>
				</div>
				<p>{meta.description}</p>
				<div className='card-tags'>
					{tags.map((tag: string, i: number) => (
						<span className='card-tag' key={`tag-${key}-${i}`}>
							<Badge value={tag} severity={getBadgeSeverityFromTag(tag)} />
						</span>
					))}
				</div>
			</Card>
		</div>
	);
};

export default McCard;
