import { iCard } from '../../fragments/CardList/ICard';
import thumbnail from '../../../assets/géobiologie/etudes/yvelines/maurepas/st sauveur/st-sauveur.jpg';
import FontaineStSauveur from '../../routes/Geobiologie/Etudes/Fontaine-st-Sauveur';

export const ExplorFontaineStSauveur: iCard = {
	slug: 'yvelines/fontaine-saint-sauveur-maurepas',
	date: new Date('2026-07-01'),
	tags: ['Fontaine', 'Maurepas', 'Yvelines'],
	thumbnail: {
		path: thumbnail,
		className: 'img',
		alt: 'Praticienne bien-être à Plaisir effectuant un massage du dos assis méthode EAS® en entreprise à l’agence Petit-Fils, Yvelines',
	},
	h1: 'Fontaine Saint‑Sauveur à Maurepas (Yvelines) : étude géobiologique d’un site sacré',
	type: 'Etude géobio.',
	content: <FontaineStSauveur />,
};
