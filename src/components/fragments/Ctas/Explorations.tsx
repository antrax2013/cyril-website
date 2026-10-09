import Cta, { CtaClassNameProps } from './Cta';

const CtaExplorations = ({ className, ctaText, title }: CtaClassNameProps) => {
	const textDefault: string = 'Découvrir mes explorations';
	const titleDefault: string = 'Découvrir mes explorations de terrain';
	return (
		<>
			<Cta
				link='/explorations'
				title={title ?? titleDefault}
				ctaLinkClassName={`${className ?? 'cta-primary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaExplorations;
