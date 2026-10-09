import { useState, useMemo } from 'react';
import { iCard } from '../../components/fragments/CardList/ICard';

export interface iCardFilters {
	type?: 'Evénement' | 'Article';
	tags?: string[];
}

export const useCardFilter = (articles: iCard[]) => {
	const [filters, setFilters] = useState<iCardFilters>({
		tags: [],
	});

	const filtered = useMemo(() => {
		return articles
			.filter((a) => {
				if (!!filters.type && a.type !== filters.type) return false;

				if (
					filters.tags &&
					filters.tags.length > 0 &&
					!filters.tags.every((t) => a.tags.includes(t))
				)
					return false;
				return true;
			})
			.sort((a, b) => b.date.getTime() - a.date.getTime());
	}, [articles, filters]);

	return { filters, setFilters, filtered };
};
