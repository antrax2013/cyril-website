// import { iBlog } from '../components/fragments/Blog/IBlog';

type TagSeverity =
	'info' | 'danger' | 'success' | 'secondary' | 'warning' | 'contrast';

const severityByTag: Record<string, TagSeverity> = {
	'MASSAGE DU DOS ASSIS MÉTH. EAS®': 'info',

	LAVOIR: 'danger',
	FONTAINE: 'danger',

	'REIKI USUI': 'success',
	REIKI: 'success',

	'DUO MASSAGE - TAMBOUR UNITÉ': 'secondary',

	YVELINES: 'warning',
	ARDENNES: 'warning',
	ALPES: 'warning',

	OFFRE: 'contrast',
	PROMO: 'contrast',
};

export function getBadgeSeverityFromTag(tag: string): TagSeverity | undefined {
	return severityByTag[tag.toUpperCase()];
}

// export const getSimilarArticles = (
// 	currentArticle: iBlog,
// 	allArticles: iBlog[],
// ) => {
// 	const { tags, slug } = currentArticle;

// 	return (
// 		allArticles
// 			.filter((article: iBlog) => article.slug !== slug)
// 			.map((article: iBlog) => {
// 				const tagsEnCommun = article.tags.filter((tag) => tags.includes(tag));
// 				return {
// 					...article,
// 					publishDate: article.date,
// 					score: tagsEnCommun.length, // Nombre de tags identiques
// 				};
// 			})
// 			// 3. Trier par score décroissant, puis par date la plus récente en cas d'égalité
// 			.sort((a, b) => {
// 				if (b.score !== a.score) {
// 					return b.score - a.score; // Plus haut score en premier
// 				}
// 				return b.date.getTime() - a.date.getTime(); // Plus récent en premier
// 			})
// 			.slice(0, 2)
// 	);
// };

export const toISODate = (date: string) => {
	const [day, month, year] = date.split('/');
	return `${year}-${month}-${day}`;
};
