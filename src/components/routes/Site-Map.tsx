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
			<div className='article'>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Qui suis-je ?</a>
					</li>
					<li>
						<a href='/actualites'>Actualités</a>
					</li>
					<li>
						<a href='/geobiologie'>Géobiologie</a>
					</li>
					<li>
						<a href='/la-communication-animale'>La communication animale</a>
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
				<ul>
					<h2>Ressources</h2>
					<ul>
						<h3>Études géobiologiques</h3>
						<li>
							<a href='/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas'>
								La fontaine St-Sauveur
							</a>
						</li>
						<li>
							<a href='/etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees'>
								Le lavoir de la source aux fées
							</a>
						</li>
					</ul>
					<ul>
						<h3>Géologie</h3>
						<li>
							<a href='geologie/les-cupules'>Les cupules</a>
						</li>
					</ul>
					<ul>
						<h3>Divers</h3>
						<li>
							<a href='/ressources/entretien-tambour-chamanique-peau'>
								Entretien du tambour chamanique
							</a>
						</li>
					</ul>
				</ul>
			</div>
		</>
	);
};
export default SiteMap;
