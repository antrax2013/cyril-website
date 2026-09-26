import { iCard } from '../../fragments/CardList/ICard';
import thumbnail from '../../../assets/géobiologie/etudes/yvelines/jouars/fontaine st martin/fontaine-2.jpg';

export const ExplorFontaineStMartin: iCard = {
	slug: 'fontaine-saint-martin-jouars-pontchartrain',
	date: new Date('2026-08-29'),
	tags: ['Fontaine', 'Jouars-Pontchartrain', 'Yvelines'],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
		},
	],
	type: 'Etude géobio.',
};
