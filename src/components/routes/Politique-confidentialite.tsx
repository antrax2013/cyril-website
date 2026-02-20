import MetaTag from '../tools/MetaTag';

const PolitiqueConfidentialite = () => {
	const head = () => {
		return (
			<MetaTag
				title='Politique de confidentialité'
				description="Notre politique de confidentialité est stricte et dans le respect de la RGPD. Nous ne partageons pas vos données personnelles. Nous ne faisons qu'observer l'utilisation de notre site dans le but d'améliorer sa visibilité."
				resume='Notre politique de confidentialité est stricte et dans le respect de la RGPD. Nous ne partageons pas vos données personnelles.'
			/>
		);
	};

	return (
		<>
			{head()}
			<div className='article'>
				<h1>Politique de confidentialité</h1>
				<h2>
					Avis important concernant le traitement des données en lien avec
					Google Analytics
				</h2>
				<p>
					Ce site utilise Google Analytics, un service d’analyse web fourni par
					Google Ireland Limited. Si l’organe responsable du traitement des
					données recueillies par ce site est basé hors de l’Espace économique
					européen et de la Suisse, alors le traitement des données associées à
					Google Analytics sera effectué par Google LLC (dont le siège est aux
					États-Unis). Google Ireland Limited et Google LLC sont dénommés
					ci-après « Google ».
				</p>
				<p>
					Google Analytics utilise des « cookies », des fichiers textes
					enregistrés sur l’ordinateur du visiteur du site, pour permettre
					l’analyse de l’utilisation du site par ce dernier. Les informations
					générées par le cookie (y compris l’adresse IP tronquée) sur
					l’utilisation du site web sont généralement transmises à et stockées
					par Google.
				</p>
				<p>
					Google Analytics est utilisé exclusivement avec l'extension «
					_anonymizeIp () » sur ce site. L’extension garantit une anonymisation
					de l’adresse IP par troncature et exclut de ce fait toute référence
					personnelle directe. Via cette extension, Google tronque l’adresse IP
					du visiteur du site situé dans un État membre de l’Union européenne ou
					dans un autre État parti à l’accord sur l’Espace économique européen.
					L’adresse IP complète du visiteur du site ne sera transmise aux
					serveurs de Google et tronquée aux Etats-Unis que dans des situations
					exceptionnelles. L’adresse IP, qui est fournie par le navigateur du
					visiteur du site utilisant Google Analytics, ne sera pas recoupée par
					Google avec d’autres données de Google.
				</p>
				<p>
					Au nom de l’opérateur du site, Google utilisera les informations
					collectées pour évaluer l’utilisation du site, compiler des rapports
					sur l’activité du site et fournir d’autres services liés au site web
					et à internet à l’opérateur du site (art. 6, 1. f, RGPD). L’intérêt
					légitime dans le traitement des données se trouve dans l'optimisation
					de ce site, l’analyse de l’utilisation du site et l'adaptation du
					contenu. L’intérêt des utilisateurs est adéquatement protégé par la
					pseudonymisation de leurs données.
				</p>
				<p>
					Google LLC garantit un niveau de protection adéquat des données sur la
					base de clauses contractuelles types européennes. Les données envoyées
					et couplées aux cookies de Google Analytics, comme l'ID de
					l’utilisateur ou les ID publicitaires, seront automatiquement effacés
					après 50 mois. La suppression des données qui ont atteint la date
					limite de conservation est effectuée automatiquement une fois par
					mois.
				</p>
				<p>
					Le visiteur du site peut refuser l’utilisation de cookies en
					sélectionnant le réglage approprié dans le navigateur. Le visiteur du
					site peut aussi empêcher Google de recueillir des informations (y
					compris l’adresse IP) via les cookies et de traiter ces informations
					en téléchargeant et installant ce plug-in dans son navigateur :{' '}
					<a
						href='http://tools.google.com/dlpage/gaoptout'
						target='_blank'
						rel='noopener'
					>
						http://tools.google.com/dlpage/gaoptout.
					</a>
				</p>
				<p>
					Le visiteur du site peut empêcher la collecte des données par Google
					Analytics en cliquant sur ce lien. Un "cookie d'opt-out" sera alors
					placé et permettra au visiteur du site de ne pas être tracké durant sa
					navigation du site.
				</p>
				<p>
					Pour plus d’informations sur le traitement et l’utilisation des
					données par Google, les paramétrages et les possibilités de
					désactivation, veuillez consulter la politique de confidentialité de
					Google{' '}
					<a
						href='https://policies.google.com/privacy'
						target='_blank'
						rel='noopener'
					>
						(https://policies.google.com/privacy)
					</a>{' '}
					ainsi que les paramètres de Google Ads{' '}
					<a
						href='https://adssettings.google.com/authenticated'
						target='_blank'
						rel='noopener'
					>
						(https://adssettings.google.com/authenticated)
					</a>
					.
				</p>
			</div>
		</>
	);
};

export default PolitiqueConfidentialite;
