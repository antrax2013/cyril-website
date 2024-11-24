import Menu from './tools/Menu';
import logo from '../assets/logo512.png';

const Header = () => {
	return (
		<>
			<article className='title'>
				<div className='title-text'>
					<h1>{import.meta.env.VITE_META_NAME}</h1>
					<h2>
						<span className='subtitle'>{import.meta.env.VITE_META_TITLE}</span>
					</h2>
				</div>
				<div className='logo' itemProp='logo'>
					<img
						alt='une chacana modernisée, une croix andine'
						title='une chacana modernisée, le logo du site'
						src={logo}
						loading='lazy'
					/>
				</div>
			</article>
			<nav itemScope itemType='https://schema.org/SiteNavigationElement'>
				<Menu />
			</nav>
		</>
	);
};

export default Header;
