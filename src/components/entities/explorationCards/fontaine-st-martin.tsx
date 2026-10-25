import { iCard } from '../../fragments/CardList/ICard';
import thumbnail from '../../../assets/géobiologie/etudes/yvelines/jouars/fontaine st martin/fontaine-2.jpg';
import FontaineStMartin from '../../routes/Geobiologie/Etudes/Fontaine-St-Martin';

export const ExplorFontaineStMartin: iCard = {
	slug: 'yvelines/fontaine-saint-martin-jouars-pontchartrain',
	date: new Date('2026-08-29'),
	tags: ['Fontaine', 'Jouars-Pontchartrain', 'Yvelines'],
	thumbnail: {
		path: thumbnail,
		className: 'img',
		alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
	},
	h1: 'Fontaine Saint-Martin de Jouars-Pontchartrain : une future exploration géobiologique',
	type: 'Etude géobio.',
	content: <FontaineStMartin />,
};
