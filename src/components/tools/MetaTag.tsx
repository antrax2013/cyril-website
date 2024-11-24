import { Helmet } from 'react-helmet';

interface iMetaTag {
	title: string;
	description: string;
	resume: string;
	forceTitle?: boolean;
}

interface iMeta {
	name?: string;
	content: string;
	property?: string;
	itemprop?: string;
}

const MetaTag = ({ title, description, resume, forceTitle }: iMetaTag) => {
	const _title: string =
		forceTitle === true
			? title
			: `${title} - ${import.meta.env.VITE_META_MAIN_TITLE_LIGTH || ''}`;

	const meta = [
		{
			name: `description`,
			content: description,
		},
		{
			//Open tags pour Faceboock et messenger
			property: `og:title`,
			content: _title,
		},
		{
			property: `og:description`,
			content: description,
		},
		{
			property: `twitter:card`,
			content: resume,
		},
		{
			property: `twitter:title`,
			content: _title,
		},
		{
			property: `twitter:description`,
			content: description,
		},
		{
			itemprop: `description`,
			content: description,
		},
	] as iMeta[];

	return <Helmet title={_title.toString()} meta={meta} />;
};

export default MetaTag;
