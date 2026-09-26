import Cta, { CtaClassNameProps } from './Cta';

const CtaExplorateurInv = ({
	className,
	ctaText,
	title,
}: CtaClassNameProps) => {
	const textDefault: string = 'Découvrir le cycle';
	const titleDefault: string =
		'En savoir plus sur l’initiation à la Géobiologie - Explorateur de l’invisible';
	return (
		<>
			<Cta
				link='/initiations/geobiologie/explorateur-de-l-invisible'
				title={title ?? titleDefault}
				ctaLinkClassName={`${className ?? 'cta-primary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaExplorateurInv;
