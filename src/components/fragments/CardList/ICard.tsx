import { JSX } from 'react/jsx-runtime';
import { iImage } from '../McImage/McImage';

export type CardType = 'Evénement' | 'Article' | 'Etude géobio.';

export interface CardListProps {
	cards: iCard[];
	disableFilters?: boolean;
}

export interface iCardInfo {
	slug: string;
	h1?: string;
	date: Date;
	tags: string[];
	thumbnail: iImage;
	type: CardType;
}

export interface iCard extends Omit<iCardInfo, 'h1'> {
	content: string | JSX.Element;
	h1: string;
}

export interface iCradsPanel {
	filter?: string;
	sort: string;
	desc: boolean;
}
