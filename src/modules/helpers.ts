// import { iBlog } from '../components/fragments/Blog/IBlog';

import { iCard } from '../components/fragments/CardList/ICard';

type TagSeverity =
	'info' | 'danger' | 'success' | 'secondary' | 'warning' | 'contrast';

const severityByTag: Record<string, TagSeverity> = {
	// Sujet
	'REIKI USUI': 'success',
	REIKI: 'success',
	GÉOBIOLOGIE: 'success',
	'MUNAY-KI': 'success',
	CHAMANISME: 'success',
	'COMMUNICATION ANIMALE': 'success',
	'CLAIR RESSENTI': 'success',

	// Type
	LAVOIR: 'danger',
	FONTAINE: 'danger',

	SOIN: 'danger',
	TRANSMISSION: 'danger',
	INITIATION: 'danger',
	EXPLORATION: 'danger',
	CONFÉRENCE: 'danger',
	SORTIE: 'danger',

	//
	'CYCLE INITIATION': 'secondary',
	SUBTIL: 'secondary',
	RESSENTI: 'secondary',
	HISTOIRE: 'secondary',

	// Zone géographique
	YVELINES: 'warning',
	ARDENNES: 'warning',
	ALPES: 'warning',
	'EXPLORATEUR DE L’INVISIBLE': 'warning',
	'SORTIE SENSORIELLE': 'warning',

	// Evenement
	OFFRE: 'contrast',
	PROMO: 'contrast',
	'PORTES OUVERTES': 'contrast',
	SALON: 'contrast',
};

export function getBadgeSeverityFromTag(tag: string): TagSeverity | undefined {
	return severityByTag[tag.toUpperCase()];
}

export const getSimilarArticles = (
	currentArticle: iCard,
	allArticles: iCard[],
) => {
	const { tags, slug } = currentArticle;

	return (
		allArticles
			.filter((article: iCard) => article.slug !== slug)
			.map((article: iCard) => {
				const tagsEnCommun = article.tags.filter((tag) => tags.includes(tag));
				return {
					...article,
					publishDate: article.date,
					score: tagsEnCommun.length, // Nombre de tags identiques
				};
			})
			// 3. Trier par score décroissant, puis par date la plus récente en cas d'égalité
			.sort((a, b) => {
				if (b.score !== a.score) {
					return b.score - a.score; // Plus haut score en premier
				}
				return b.date.getTime() - a.date.getTime(); // Plus récent en premier
			})
			.slice(0, 2)
	);
};

export const toISODate = (date: string) => {
	const [day, month, year] = date.split('/');
	return `${year}-${month}-${day}`;
};
