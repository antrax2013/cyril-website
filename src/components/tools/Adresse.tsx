interface iAddress {
	title?: string;
	descprition?: string;
	floor?: string;
	streetAddress?: string;
	postalCode?: string;
	addressLocality?: string;
	map?: string;
	latitude?: string;
	longitude?: string;
	id?: string;
}

export const Adresse = ({
	title,
	descprition,
	floor,
	streetAddress,
	postalCode,
	addressLocality: locality,
	map,
	latitude,
	longitude,
}: /*...props*/
iAddress) => {
	return (
		<>
			<section className='section-header'></section>
			<section
				className='section-content'
				itemProp='provider'
				itemScope
				itemType='https://schema.org/HealthClub'
			>
				<div>
					<div className='section-adresse'>
						<span
							className='paragraphe-content'
							itemProp='address'
							itemScope
							itemType='https://schema.org/PostalAddress'
						>
							<ul>
								<ol>
									<b>{title}</b>
									{!!descprition && <p>{descprition}</p>}
								</ol>
								<ol>
									{!!floor && (
										<i>
											{floor} <br />
										</i>
									)}
									<span itemProp='streetAddress'>{streetAddress}</span>
								</ol>
								<ol>
									<span itemProp='postalCode'>{postalCode}</span>{' '}
									<span itemProp='addressLocality'>{locality}</span>
								</ol>
							</ul>
						</span>
					</div>
					{!!latitude && !!longitude && (
						<span
							itemProp='geo'
							itemScope
							itemType='https://schema.org/GeoCoordinates'
						>
							<meta itemProp='latitude' content={latitude} />
							<meta itemProp='longitude' content={longitude} />
						</span>
					)}
					{!!map && (
						<aside className='section-map'>
							<div className='map' itemProp='hasMap'>
								<iframe src={map} loading='lazy'></iframe>
							</div>
						</aside>
					)}
				</div>
			</section>
		</>
	);
};
