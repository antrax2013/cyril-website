const FooterMenu = (/*{ ...props }*/) => {
	return (
		<>
			<section>
				<a href='/politique-de-confidentialite' className='footer-link'>
					Politique de confidentialité
				</a>
				{' - '}
				<a href='/plan-du-site' className='footer-link'>
					Plan du site
				</a>
			</section>
		</>
	);
};

export default FooterMenu;
