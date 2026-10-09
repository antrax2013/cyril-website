import { Card } from 'primereact/card';
import { iCard } from './ICard';
import McImage from '../McImage/McImage';

// import '../../../scss/fragments/Card.scss';
import Metas from '../MetaTags/metas.json';
import { iMetaTag } from '../MetaTags/IMetaTag';

const MiniCard = ({ slug, date, images, type, h1: title }: iCard) => {
	const thumbnail = images[0];
	const meta: iMetaTag = Metas.metas.find((m) => m.key === slug) || {
		title: '',
		description: '',
		canonical: '',
	};
	const header = <h3>{title ?? meta.title}</h3>;
	const footer = (
		<a
			href={meta.canonical}
			title={`Lire le post sur l’${type} : ${title ?? meta.title}`}
		>
			Lire la suite...
		</a>
	);

	const key = Math.random() * 1000000;

	return (
		<div className='MiniCard'>
			<Card
				footer={footer}
				header={header}
				className='card-main-container md:w-33rem'
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
					<div className='description'>
						<p>
							<b>{type}</b> - <i>{date.toLocaleDateString()}</i>
						</p>
						<p>{meta.description}</p>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default MiniCard;
