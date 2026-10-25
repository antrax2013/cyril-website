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
			<a href='/' itemProp='url'>
				<img alt='logo' src={croixAndine} className='logo' />
			</a>
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

		let result = className;
		if (
			windowPathName.includes(pathName) &&
			!windowPathName.startsWith(
				'/initiations/geobiologie/explorateur-de-l-invisible',
			)
		) {
			result = selectedClassName;
		} else {
			switch (pathName) {
				case '_geobiologie':
					if (windowPathName.includes('/geobiologie'))
						result = selectedClassName;
					break;
				case '/initiations/geobiologie/explorateur-de-l-invisible':
					if (
						windowPathName.startsWith(
							'/initiations/geobiologie/explorateur-de-l-invisible',
						)
					)
						result = selectedClassName;
					break;
			}
		}

		return result;
	};

	const items: MenuItem[] = [
		{
			label: 'Géobiologie',
			items: [
				{
					label: 'Découvrir la géobiologie',
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
					label: 'Explorateur l’Invisible',
					template: (item: MenuItem, options: MenuItemOptions) => {
						return itemTemplate(item, options);
					},
					url: '/initiations/geobiologie/explorateur-de-l-invisible',
					className: getClassName(
						'/initiations/geobiologie/explorateur-de-l-invisible',
					),
					command: () => {
						onClick('explorateur-de-l-invisible');
					},
				},
			],
			className: getClassName('_geobiologie'),
		},
		{
			label: 'Mon approche',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/mon-approche',
			command: () => {
				onClick('mon-approche');
			},
			className: getClassName('mon-approche'),
		},
		{
			label: 'Explorations',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/explorations',
			className: getClassName('/explorations'),
			command: () => {
				onClick('explorations');
			},
		},

		{
			label: 'Articles',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/articles',
			className: getClassName('articles'),
			command: () => {
				onClick('articles');
			},
		},
		{
			label: 'Agenda',
			template: (item: MenuItem, options: MenuItemOptions) => {
				return itemTemplate(item, options);
			},
			url: '/agenda',
			className: getClassName('agenda'),
			command: () => {
				onClick('agenda');
			},
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
