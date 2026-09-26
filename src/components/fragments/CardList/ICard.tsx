//import { JSX } from 'react/jsx-runtime';
import { iImage } from '../McImage/McImage';

export type CardType = 'Evénement' | 'Article' | 'Etude géobio.';

export interface CardListProps {
	cards: iCard[];
	disableFilters?: boolean;
}

export interface iCard {
	slug: string;
	date: Date;
	tags: string[];
	images: iImage[];
	//content?: string | JSX.Element;
	type?: CardType;
	h1?: string;
}

export interface iCradsPanel {
	filter?: string;
	sort: string;
	desc: boolean;
}
