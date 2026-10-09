import { JSX } from 'react/jsx-runtime';
import '../../../scss/fragments/Cta.scss';

export interface iCta {
	link: string;
	ctaLinkClassName?: string;
	title: string;
	ctaText?: string | JSX.Element;
	linkType?: string;
	target?: string;
}

export type CtaClassNameProps = {
	className?: string | null;
	ctaText?: string | JSX.Element;
	title?: string;
};

const Cta = ({
	link,
	ctaLinkClassName,
	title,
	ctaText,
	linkType,
	target,
}: iCta) => {
	return (
		<a
			type={linkType || 'text/html'}
			href={link}
			className={`cta ${ctaLinkClassName || 'cta-tertiary'}`}
			title={title}
			target={target || '_self'}
		>
			{ctaText || 'En savoir plus'}
		</a>
	);
};

export default Cta;
