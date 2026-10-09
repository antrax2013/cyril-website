import Cta, { CtaClassNameProps } from './Cta';

const CtaMonApproche = ({ className, ctaText, title }: CtaClassNameProps) => {
	const textDefault: string = 'Découvrir mon approche';
	return (
		<>
			<Cta
				link='/mon-approche'
				title={title ?? textDefault}
				ctaLinkClassName={`${className ?? 'cta-tertiary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaMonApproche;
