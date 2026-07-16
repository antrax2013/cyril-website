// // import { Helmet } from 'react-helmet';
// import { Helmet } from 'react-helmet-async';

// interface iMetaTag {
// 	title: string;
// 	description: string;
// 	resume: string;
// 	forceTitle?: boolean;
// }

// interface iMeta {
// 	name?: string;
// 	content: string;
// 	property?: string;
// 	itemprop?: string;
// }

// const MetaTag = ({ title, description, resume }: iMetaTag) => {
// 	var checkTitleTooLong = title.length > 70;
// 	if (checkTitleTooLong) throw new Error(`title too long ${title}`);

// 	const meta = [
// 		{
// 			name: `description`,
// 			content: description,
// 		},
// 		{
// 			//Open tags pour Faceboock et messenger
// 			property: `og:title`,
// 			content: title,
// 		},
// 		{
// 			property: `og:description`,
// 			content: description,
// 		},
// 		{
// 			property: `twitter:card`,
// 			content: resume,
// 		},
// 		{
// 			property: `twitter:title`,
// 			content: title,
// 		},
// 		{
// 			property: `twitter:description`,
// 			content: description,
// 		},
// 		{
// 			itemprop: `description`,
// 			content: description,
// 		},
// 	] as iMeta[];

// 	return <Helmet title={title.toString()} meta={meta} />;
// };

// export default MetaTag;
