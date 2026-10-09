import Cta, { CtaClassNameProps } from './Cta';

const CtaReserver = ({ className, ctaText, title }: CtaClassNameProps) => {
	const textDefault: string = 'Réserver';
	const titleDefault: string =
		'Lien pour réserver un ou plusieurs modules pour l’initiation à la Géobiologie - « Explorateur de l’invisible »';
	return (
		<>
			<Cta
				link='/contact?sujet=initiation-géobiologie'
				title={title ?? titleDefault}
				ctaLinkClassName={`${className ?? 'cta-primary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaReserver;
