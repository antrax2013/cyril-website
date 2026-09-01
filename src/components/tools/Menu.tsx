import { Menubar } from 'primereact/menubar';
import croixAndine from '../../assets/croix-andine-turquoise-50x50.png';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

const Menu = ({ ...props }) => {
	const itemTemplate = (item: MenuItem, options: MenuItemOptions) => {
		return (
			<span itemProp='name' role='menuitem'>
				<a
					itemProp='url'
					className={options.className}
					onClick={options.onClick}
					href={item.url}
				>
					<span className={options.labelClassName}>{item.label}</span>
				</a>
			</span>
		);
	};
	const start = (
		<span className='logo-menu'>
			<img alt='logo' src={croixAndine} className='logo' />
		</span>
	);
	const end = () => {
		switch (import.meta.env.VITE_ACTIVERDV || 0) {
			case '1':
				return (
					<a
						href={import.meta.env.VITE_URLRDV}
						rel='external'
						target={'_blank'}
					>
						Prendre rendez-vous
					</a>
				);
				break;
			case '2':
				return (
					<>
						<section className='nav-section-siret'>
							<div itemScope itemType='https://schema.org/Organization'>
								<meta itemProp='iso6523Code' content='0009:93380473400012' />
								<i className='siret'>N°Siret : 933 804 734 00012</i>
							</div>
						</section>
						<section className='nav-section-events'>
							<div>
								🌀 <a href='#événements'>Initiations et événements</a> 🌀
							</div>
						</section>
					</>
				);
				break;
			default:
				return <></>;
		}
	};

	const className = 'm-1';
	const selectedClassName = 'm-1 selected';

	const onClick = (index: string) => {
		window.location.pathname = '/' + index;
	};

	const getClassName = (pathName: string) => {
		pathName = pathName.toLowerCase();
		const windowPathName = window.location.pathname;

		if (windowPathName.includes(pathName)) {
			return selectedClassName;
		}
		if (pathName === 'qui-suis-je' && windowPathName === '/') {
			return selectedClassName;
		}
		// Ressources case
		if (
			pathName === 'ressources' &&
			(windowPathName.startsWith('/geologie/') ||
				windowPathName.startsWith('/etudes-geobiologie/') ||
				windowPathName.startsWith('/ressources/'))
		) {
			return windowPathName.startsWith('/ressources/')
				? 'divers'
				: selectedClassName;
		}
		return className;
	};

	const items: MenuItem[] = [
		{
			label: 'Qui suis-je ?',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/qui-suis-je',
			command: () => {
				onClick('qui-suis-je');
			},
			className: getClassName('qui-suis-je'),
		},
		{
			label: 'Actualités',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/actualites',
			className: getClassName('actualites'),
			command: () => {
				onClick('actualites');
			},
		},
		{
			label: 'Géobiologie',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/geobiologie',
			className: getClassName('/geobiologie'),
			command: () => {
				onClick('geobiologie');
			},
		},
		{
			label: 'La communication animale',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/la-communication-animale',
			command: () => {
				onClick('la-communication-animale');
			},
			className: getClassName('la-communication-animale'),
		},
		{
			label: 'Les 9 Rites Munay-Ki',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/les-9-rites-munay-ki',
			className: getClassName('les-9-rites-munay-ki'),
			command: () => {
				onClick('les-9-rites-munay-ki');
			},
		},
		{
			label: 'Ressources',
			items: [
				{
					label: 'Études Géobiologiques',
					items: [
						// label: 'Yvelines',
						// items: [
						// 	{
						{
							label: 'Fontaine St Sauveur (78)',
							template: (item: MenuItem, options: MenuItemOptions) => {
								return itemTemplate(item, options);
							},
							url: '/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas',
							className: getClassName('fontaine-saint-sauveur-maurepas'),
							command: () => {
								onClick(
									'etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas',
								);
							},
						},
						{
							label: 'Fontaine St Martin (78)',
							template: (item: MenuItem, options: MenuItemOptions) => {
								return itemTemplate(item, options);
							},
							url: '/etudes-geobiologie/yvelines/fontaine-saint-martin-jouars-pontchartrain',
							className: getClassName(
								'fontaine-saint-martin-jouars-pontchartrain',
							),
							command: () => {
								onClick(
									'etudes-geobiologie/yvelines/fontaine-saint-martin-jouars-pontchartrain',
								);
							},
						},
						{
							label: 'Lavoir source aux fées (78)',
							template: (item: MenuItem, options: MenuItemOptions) => {
								return itemTemplate(item, options);
							},
							url: '/etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees',
							className: getClassName('le-lavoir-de-la-source-aux-fees'),
							command: () => {
								onClick(
									'etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees',
								);
							},
						}, // 	},
						// ],
					],
					className: getClassName('etudes-geobiologie'),
				},
				{
					label: 'Géologie',
					items: [
						{
							label: 'Les cupules',
							template: (item: MenuItem, options: MenuItemOptions) => {
								return itemTemplate(item, options);
							},
							url: '/geologie/les-cupules',
							className: getClassName('les-cupules'),
							command: () => {
								onClick('geologie/les-cupules');
							},
						},
					],
					className: getClassName('geologie'),
				},
				{
					label: 'Divers',
					items: [
						{
							label: 'Entretien tambour chamanique',
							template: (item: MenuItem, options: MenuItemOptions) => {
								return itemTemplate(item, options);
							},
							url: '/ressources/entretien-tambour-chamanique-peau',
							className: getClassName('entretien-tambour-chamanique-peau'),
							command: () => {
								onClick('ressources/entretien-tambour-chamanique-peau');
							},
						},
					],
					className: getClassName('divers'),
				},
			],
			className: getClassName('ressources'),
		},
		{
			label: 'Contact',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/contact',
			className: getClassName('contact'),
			command: () => {
				onClick('contact');
			},
		},
	];

	return <Menubar model={items} {...props} start={start} end={end} />;
};

export default Menu;
