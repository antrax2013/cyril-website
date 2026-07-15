import Menu from './tools/Menu';
import logo from '../assets/logo512.png';

const Header = () => {
	return (
		<>
			<div className='article title'>
				<div className='title-text'>
					<p className='h1-title'>{import.meta.env.VITE_META_NAME}</p>
					<p className='subtitle'>{import.meta.env.VITE_META_TITLE}</p>
				</div>
				<div className='logo' itemProp='logo'>
					<img
						alt='une chacana modernisée, une croix andine'
						title='une chacana modernisée, le logo du site'
						src={logo}
						loading='lazy'
					/>
				</div>
			</div>
			<nav itemScope itemType='https://schema.org/SiteNavigationElement'>
				<Menu />
			</nav>
		</>
	);
};

export default Header;
