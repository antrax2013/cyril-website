import Cta, { CtaClassNameProps } from './Cta';

const CtaAgenda = ({ className, ctaText, title }: CtaClassNameProps) => {
	const textDefault: string = 'Voir les prochaines dates';
	return (
		<>
			<Cta
				link='/agenda'
				title={title ?? textDefault}
				ctaLinkClassName={`${className ?? 'cta-secondary'}`}
				ctaText={ctaText ?? textDefault}
			/>
		</>
	);
};
export default CtaAgenda;
