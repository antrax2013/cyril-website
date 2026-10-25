import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { lazy } from 'react';
import JsonLd from './components/fragments/JsonLd';
import * as LocalBusinessLd from './components/fragments/JsonLd/localBusiness.json';

// Header & Footer
const PanneauLateral = lazy(() => import('./components/Panneau-lateral'));
const FooterMenu = lazy(() => import('./components/tools/Footer-Menu'));
const PolitiqueConfidentialite = lazy(
	() => import('./components/routes/Politique-confidentialite'),
);
const PlanDuSite = lazy(() => import('./components/routes/Site-Map'));

// Page V2
const QuiSuisJe = lazy(() => import('./components/routes/Qui-suis-je'));
const Geobiologie = lazy(() => import('./components/routes/Geogiologie'));
const GeoBioExplorateurInvisible = lazy(
	() => import('./components/routes/Initiations/GeoBioExplorateurInvisible'),
);
const Actualites = lazy(() => import('./components/routes/Actualites'));
const MonApproche = lazy(() => import('./components/routes/MonApproche'));

// Explorations
const Explorations = lazy(() => import('./components/routes/Explorations'));
const Exploration = lazy(() => import('./components/fragments/Exploration'));

const Contact = lazy(() => import('./components/routes/Contact'));
const ContactWrapper = lazy(() => import('./components/routes/ContactWrapper'));

// Articles
const Articles = lazy(() => import('./components/routes/Articles'));
const Article = lazy(() => import('./components/fragments/Article'));

// Autres
const Error404 = lazy(() => import('./components/routes/Error404'));
const ScrollButton = lazy(() => import('./components/tools/Scrollbutton'));

const App = () => {
	return (
		<div className='App'>
			<JsonLd data={LocalBusinessLd} />
			<BrowserRouter>
				<header className='flex flex-wrap'>
					<Header />
				</header>
				{/* <div className='App-cp danger'>
					<a href='/agenda' className='annonce'>
						⚠️ Mise à jour : les modules 1 et 2 prévus le 6 septembre sont
						reportés au 11 octobre à Plaisir. ⚠️
					</a>
				</div> */}
				<div className='App-body'>
					<main className='content'>
						<Routes>
							{/* Menu V1 */}
							<Route path='/' element={<QuiSuisJe />} />
							<Route path='/accueil' element={<QuiSuisJe />} />
							<Route index element={<QuiSuisJe />} />

							<Route path='geobiologie' element={<Geobiologie />} />

							{/* Page V2 */}
							<Route path='mon-approche' element={<MonApproche />} />
							<Route
								path='initiations/geobiologie/explorateur-de-l-invisible'
								element={<GeoBioExplorateurInvisible />}
							/>
							<Route path='agenda' element={<Actualites />} />

							<Route path='explorations' element={<Explorations />} />
							<Route
								path='etudes-geobiologie/:region/:slug'
								element={<Exploration />}
							/>

							<Route path='contact' element={<Contact />} />
							<Route
								path='/contact/sujet/:sujet'
								element={<ContactWrapper />}
							/>
							<Route
								path='/contact/sujet/:sujet'
								element={<ContactWrapper />}
							/>

							<Route
								path='politique-de-confidentialite'
								element={<PolitiqueConfidentialite />}
							/>
							<Route path='erreur-404' element={<Error404 />} />
							<Route path='plan-du-site' element={<PlanDuSite />} />

							{/* Ressources */}
							<Route path='articles' element={<Articles />} />
							<Route path='articles/:slug' element={<Article />} />

							<Route path='*' element={<Navigate replace to='/erreur-404' />} />
						</Routes>
						<ScrollButton />
					</main>
					<aside className='content'>
						<PanneauLateral />
					</aside>
				</div>
				<section className='article-footer'>
					<FooterMenu />
				</section>
			</BrowserRouter>
		</div>
	);
};

export default App;
