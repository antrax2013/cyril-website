import MetaTag from '../tools/MetaTag';

const SiteMap = () => {
	const head = () => {
		return (
			<MetaTag
				title='Plan du site'
				description='Le plan du site. Vous trouverez le lien vers les différentes pages qui le compose : Reiki Usui, Massage des 5 Continents et plus encore...'
				resume='Le plan du site pour ne pas vous perdre.'
			/>
		);
	};

	return (
		<>
			{head()}
			<article>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Qui suis-je ?</a>
					</li>
					<li>
						<a href='/geobiologie'>Géobiologie</a>
					</li>
					<li>
						<a href='/les-9-rites-munay-ki'>Les 9 rites Munay-Ki</a>
					</li>
					<li>
						<a href='/contact'>Contact</a>
					</li>
					<li>
						<a href='/politique-de-confidentialite'>
							Politique de confidentialite
						</a>
					</li>
					<li>
						<a href='/plan-du-site'>Plan du site</a>
					</li>
					<li>
						<a href='/erreur-404'>Erreur 404</a>
					</li>
				</ul>
			</article>
		</>
	);
};
export default SiteMap;
