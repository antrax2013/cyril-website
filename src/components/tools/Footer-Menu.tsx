import { Button } from 'primereact/button';

const FooterMenu = (/*{ ...props }*/) => {
	const onClick = (index: string) => {
		window.location.pathname = '/' + index;
	};

	return (
		<>
			<section>
				<Button
					label='Politique de confidentialité'
					className='p-button-secondary p-button-text'
					onClick={() => onClick('politique-de-confidentialite')}
				/>
				<Button
					label='Plan du site'
					className='p-button-secondary p-button-text'
					onClick={() => onClick('plan-du-site')}
				/>
			</section>
		</>
	);
};

export default FooterMenu;
