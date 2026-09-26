const SiteMap = () => {
	return (
		<>
			<div className='article'>
				<h1>Le plan du site</h1>
				<ul>
					<li>
						<a href='/'>Accueil</a>
					</li>

					<li>
						<h2>Géobiologie</h2>
						<ul>
							<li>
								<a href='/geobiologie'>Découvrir la géobiologie</a>
							</li>
							<li>
								<a href='/initiations/geobiologie/explorateur-de-l-invisible'>
									Explorateur de l’Invisible
								</a>
							</li>
						</ul>
					</li>

					<li>
						<h2>
							<a href='/explorations'>Explorations</a>
						</h2>
						<ul>
							<li>
								<a href='/etudes-geobiologie/yvelines/fontaine-saint-sauveur-maurepas'>
									Fontaine Saint-Sauveur — Maurepas
								</a>
							</li>
							<li>
								<a href='/etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees'>
									Lavoir de la Source aux Fées — Saint-Forget
								</a>
							</li>
							<li>
								<a href='/etudes-geobiologie/yvelines/fontaine-saint-martin-jouars-pontchartrain'>
									Fontaine Saint-Martin — Jouars-Pontchartrain
								</a>
							</li>
						</ul>
					</li>

					<li>
						<h2>
							<a href='/agenda'>Agenda</a>
						</h2>
					</li>

					<li>
						<h2>
							<a href='/mon-approche'>Mon approche</a>
						</h2>
					</li>

					<li>
						<h2>Articles</h2>
						<ul>
							<li>
								<a href='/la-communication-animale'>Communication animale</a>
							</li>
							<li>
								<a href='/les-9-rites-munay-ki'>Les 9 rites Munay-Ki</a>
							</li>
							<li>
								<a href='/geologie/les-cupules'>Les cupules</a>
							</li>
							<li>
								<a href='/ressources/entretien-tambour-chamanique-peau'>
									Entretien de la peau d’un tambour chamanique
								</a>
							</li>
						</ul>
					</li>

					<li>
						<h2>
							<a href='/contact'>Contact</a>
						</h2>
					</li>

					<li>
						<a href='/politique-de-confidentialite'>
							Politique de confidentialité
						</a>
					</li>
					<li>
						<a href='/plan-du-site'>Plan du site</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default SiteMap;
