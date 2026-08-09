// Composant d'injection JSON-LD
export function JsonLdEvents() {
	const eventsData = [
		{
			'@context': 'https://schema.org',
			'@type': 'Event',
			name: "Initiation Géobiologie : Cycle Explorateur de l'Invisible (Modules 1 & 2)",
			description:
				"Apprenez à décoder les énergies des lieux, détecter les veines d'eau souterraines et les cheminées cosmo-telluriques.",
			startDate: '2026-09-06T09:00:00+02:00',
			endDate: '2026-09-06T18:30:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: "Coffret d'Alumine - Espace Vibrations - Plaisir (78)",
				address: {
					'@type': 'PostalAddress',
					streetAddress: '5, rue Edmond Rostand',
					addressLocality: 'Plaisir',
					postalCode: '78370',
					addressRegion: 'Yvelines',
					addressCountry: 'FR',
				},
			},
			organizer: {
				'@type': 'Person',
				name: 'Cyril COPHIGNON',
				url: 'https://cyril.cophignon.net/',
			},
			offers: {
				'@type': 'Offer',
				price: '120.00',
				priceCurrency: 'EUR',
				availability: 'https://schema.org/InStock',
				validFrom: '2026-01-01T00:00:00+02:00',
				url: 'https://cyril.cophignon.net/contact?sujet=initiation-g%C3%A9obiologie',
			},
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Event',
			name: 'Sortie Géobiologie Terrain : Exploration de la Fontaine Saint-Martin',
			description:
				'Journée d’application pratique sur le terrain : analyse des phénomènes géobiologiques, présences subtiles, mémoires et structures énergétiques.',
			startDate: '2026-10-18T09:00:00+02:00',
			endDate: '2026-10-18T17:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Fontaine Saint-Martin',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Jouars-Pontchartrain',
					postalCode: '78760',
					addressRegion: 'Yvelines',
					addressCountry: 'FR',
				},
			},
			organizer: {
				'@type': 'Person',
				name: 'Cyril COPHIGNON',
				url: 'https://cyril.cophignon.net/',
			},
			offers: {
				'@type': 'Offer',
				price: '60.00',
				priceCurrency: 'EUR',
				availability: 'https://schema.org/InStock',
				url: 'https://cyril.cophignon.net/contact?sujet=sortie-g%C3%A9obiologie',
			},
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Event',
			name: 'Ğmarché & Conférence Monnaie Libre Ğ1 (June)',
			description:
				"Marché local en monnaie libre, atelier bien-être et conférence citoyenne 'Changer la monnaie pour changer notre rapport au monde'.",
			startDate: '2026-08-30T10:00:00+02:00',
			endDate: '2026-08-30T18:00:00+02:00',
			eventStatus: 'https://schema.org/EventScheduled',
			eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
			location: {
				'@type': 'Place',
				name: 'Jouars-Pontchartrain (Lieu précis)',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Jouars-Pontchartrain',
					postalCode: '78760',
					addressRegion: 'Yvelines',
					addressCountry: 'FR',
				},
			},
			organizer: {
				'@type': 'Person',
				name: 'Cyril COPHIGNON',
				url: 'https://cyril.cophignon.net/',
			},
			offers: {
				'@type': 'Offer',
				price: '0.00',
				priceCurrency: 'EUR',
				availability: 'https://schema.org/InStock',
				url: 'https://is.gd/june78',
			},
		},
	];

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsData) }}
		/>
	);
}
