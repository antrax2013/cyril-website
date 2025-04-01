import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import './scss/OverridePrimeCSS.scss';
import 'primeflex/primeflex.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { lazy } from 'react';

const Contact = lazy(() => import('./components/routes/Contact'));
const Error404 = lazy(() => import('./components/routes/Error404'));
const RitesMunayKi = lazy(
	() => import('./components/routes/Les-9-rites-du-munay-ki')
);
const Geobiologie = lazy(() => import('./components/routes/Geogiologie'));
const PanneauLateral = lazy(() => import('./components/Panneau-lateral'));
const PolitiqueConfidentialite = lazy(
	() => import('./components/routes/Politique-confidentialite')
);
const QuiSuisJe = lazy(() => import('./components/routes/Qui-suis-je'));
const FooterMenu = lazy(() => import('./components/tools/Footer-Menu'));
const ScrollButton = lazy(() => import('./components/tools/Scrollbutton'));
const PlanDuSite = lazy(() => import('./components/routes/Site-Map'));
const Cupule = lazy(() => import('./components/routes/Geobiologie/Cupule'));
const LeLavoirDeLaSourceAuxFees = lazy(
	() =>
		import(
			'./components/routes/Geobiologie/Etudes/Le-lavoir-de-la-source-aux-fees'
		)
);

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<header className='flex flex-wrap'>
					<Header />
				</header>
				<div className='App-cp danger'></div>
				<div className='App-body'>
					<main className='content'>
						<Routes>
							<Route path='/' element={<QuiSuisJe />} />
							<Route path='qui-suis-je' element={<QuiSuisJe />} />
							<Route index element={<QuiSuisJe />} />
							<Route path='geobiologie' element={<Geobiologie />} />
							<Route
								path='les-cupules'
								element={<Navigate replace to='/geologie/les-cupules' />}
							/>
							<Route path='les-9-rites-munay-ki' element={<RitesMunayKi />} />
							<Route path='contact' element={<Contact />} />
							<Route
								path='politique-de-confidentialite'
								element={<PolitiqueConfidentialite />}
							/>
							<Route path='erreur-404' element={<Error404 />} />
							<Route path='plan-du-site' element={<PlanDuSite />} />

							{/* Resources */}
							<Route path='geologie/les-cupules' element={<Cupule />} />
							<Route
								path='etudes-geobiologie/yvelines/le-lavoir-de-la-source-aux-fees'
								element={<LeLavoirDeLaSourceAuxFees />}
							/>

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
