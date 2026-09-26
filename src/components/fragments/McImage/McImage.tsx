export interface iImage {
	path: string;
	className: string;
	alt: string;
	title?: string;
}

const McImage = ({ path, className, alt, title }: iImage) => {
	return (
		<img
			src={path}
			className={className}
			alt={alt}
			title={title}
			loading='lazy'
		/>
	);
};

export default McImage;
