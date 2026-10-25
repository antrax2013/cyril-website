import { iCard } from '../../fragments/CardList/ICard';
import thumbnail from '../../../assets/géobiologie/etudes/yvelines/st-forget/la-source-aux-fees.png';
import LeLavoirDeLaSourceAuxFees from '../../routes/Geobiologie/Etudes/Le-lavoir-de-la-source-aux-fees';

export const ExplorLavoirSourceAuxFees: iCard = {
	slug: 'yvelines/le-lavoir-de-la-source-aux-fees',
	date: new Date('2025-05-29'),
	tags: ['Lavoir', 'Saint-Forget', 'Yvelines'],
	thumbnail: {
		path: thumbnail,
		className: 'img',
		alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
	},
	h1: 'Le lavoir de la Source aux Fées à Saint‑Forget',
	type: 'Etude géobio.',
	content: <LeLavoirDeLaSourceAuxFees />,
};
