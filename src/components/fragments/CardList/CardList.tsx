import { useState } from 'react';
import {
	AutoComplete,
	AutoCompleteCompleteEvent,
} from 'primereact/autocomplete';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import McCard from './McCard';
import { CardListProps, iCard } from './ICard';
import { Fieldset } from 'primereact/fieldset';
import {
	MultiStateCheckbox,
	MultiStateCheckboxChangeEvent,
} from 'primereact/multistatecheckbox';
import { useCardFilter } from '../../../modules/Hooks/useCardFilter.Hook';

import '../../../scss/fragments/CardList/CardList.scss';

interface IconItem {
	value: string;
	icon: string;
}
interface iTag {
	key: string;
	value: string;
}

const CardList = ({ cards, disableFilters }: CardListProps) => {
	const allTags = Array.from(new Set(cards.flatMap((a) => a.tags)));
	const [selectedTags, setSelectedTags] = useState<iTag[]>([]);
	const [filteredTags, setFilteredTags] = useState<iTag[]>([]);
	const [first, setFirst] = useState(0);
	const [rows, setRows] = useState(6);

	const { setFilters, filtered } = useCardFilter(cards);

	const [category, setCategory] = useState<string>('');
	const options: IconItem[] = [
		{ value: 'Article', icon: 'pi pi-id-card' },
		{ value: 'Evénement', icon: 'pi pi-ticket' },
	];

	const selectedItemTemplate = (item: any) => {
		return (
			<span className='filter-item' title={item.value}>
				{item.value}
			</span>
		);
	};

	const handdleTagFiltration = (event: AutoCompleteCompleteEvent) => {
		let filteredTags: iTag[] = allTags.map((t: string) => ({
			key: t.toLowerCase(),
			value: t,
		}));

		if (!!event.query.trim().length) {
			filteredTags = [...filteredTags].filter((tag) =>
				tag.key.startsWith(event.query.toLowerCase()),
			);
		}

		setFilteredTags(filteredTags);
	};

	const onPageChange = (event: PaginatorPageChangeEvent) => {
		setFirst(event.first);
		setRows(event.rows);
	};

	const paginatorTemplate = {
		layout:
			'FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink RowsPerPageDropdown',
		CurrentPageReport: (options: any) => {
			return (
				<span
					style={{
						color: 'var(--text-color)',
						userSelect: 'none',
						width: '135px',
						textAlign: 'center',
					}}
				>
					page n° {options.currentPage} / {options.totalPages}
				</span>
			);
		},
	};

	const key = Math.random() * 10000000;

	return (
		<div className='CardList main-container'>
			<Paginator
				first={first}
				rows={rows}
				totalRecords={filtered.length}
				rowsPerPageOptions={[6, 12, 24]}
				onPageChange={onPageChange}
				template={paginatorTemplate}
			/>
			<div className='CardList main-container'>
				<div className='board-container'>
					<Fieldset legend='Filtres' toggleable>
						{disableFilters !== true && (
							<div className='card-types-filter'>
								<span className='label'>Catégorie :</span>
								<MultiStateCheckbox
									value={category}
									onChange={(e: MultiStateCheckboxChangeEvent) => {
										const newCategory = e.value;
										setFilters((f) => ({ ...f, type: newCategory }));
										setCategory(newCategory);
									}}
									options={options}
									optionValue='value'
								/>
								<span className='category-name'>{category || 'Toutes'}</span>
							</div>
						)}
						<div className='card-tags-filter'>
							<span className='label'>Etiquettes :</span>
							<AutoComplete
								className='autocomplete-scroll'
								field='value'
								multiple
								value={selectedTags}
								suggestions={filteredTags}
								completeMethod={handdleTagFiltration}
								onChange={(e) => {
									if (selectedTags.length <= 3) {
										const tags = e.value;
										setFilters((f) => ({
											...f,
											tags: tags.map((t) => t.value),
										}));
										setSelectedTags(tags);
									}
								}}
								selectedItemTemplate={selectedItemTemplate}
							/>
						</div>
					</Fieldset>
				</div>
				<div className='cards-container'>
					{filtered.slice(first, first + rows).map((card: iCard, i: number) => (
						<McCard
							key={`Card-${key}-${i}`}
							h1={card.h1}
							slug={card.slug}
							date={card.date}
							tags={card.tags}
							thumbnail={card.thumbnail}
							type={card.type}
						/>
					))}
				</div>
			</div>
			<Paginator
				first={first}
				rows={rows}
				totalRecords={filtered.length}
				rowsPerPageOptions={[6, 12, 24]}
				onPageChange={onPageChange}
				template={paginatorTemplate}
				//template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }}
				// template='FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink'
			/>
		</div>
	);
};

export default CardList;
