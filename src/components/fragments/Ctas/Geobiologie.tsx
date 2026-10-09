import Cta, { CtaClassNameProps } from './Cta';

const CtaGeobiologie = ({ className, ctaText, title }: CtaClassNameProps) => {
	const textDefault: string = 'Découvrir la géobiologie';
	return (
		<>
			<Cta
				link='/geobiologie'
				title={title ?? textDefault}
				ctaLinkClassName={`${className ?? 'cta-primary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaGeobiologie;
