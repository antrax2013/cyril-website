import { iCard } from '../../fragments/CardList/ICard';
import thumbnail from '../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/st-sauveur.jpg';

export const ExplorFontaineStSauveur: iCard = {
	slug: 'fontaine-saint-sauveur-maurepas',
	date: new Date('2026-07-01'),
	tags: ['Fontaine', 'Maurepas', 'Yvelines'],
	images: [
		{
			path: thumbnail,
			className: 'img',
			alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
		},
	],
	type: 'Etude géobio.',
};
