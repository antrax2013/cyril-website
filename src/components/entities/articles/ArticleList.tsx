import LireUnLieu from '../../routes/Articles/lire-un-lieu';

import ApprendreALireUnLieuThumbnail from '../../../assets/articles/apprendre-a-lire-un-lieu/apprendre-a-lire-un-lieu-img-thumbnail.jpg';
import CupuleThumbnail from '../../../assets/cupules/cupules-thumbnail.jpg';
import MunayKiThumbnail from '../../../assets/munay-ki/munay-ki-thunbnail.jpg';
import ComAnnimalThumbnail from '../../../assets/la-communication-animale/com-animale-thumbnail.jpg';
import EntretienTambourThumbnail from '../../../assets/ressources/entretien-tambours/entretien-tambour-thumbnail.jpg';
import PortesOuvertesBBNov2026Thumbnail from '../../../assets/articles/po-blowball-nov-2026/Portes ouvertes vers le bien-être.jpg';

import { iCard } from '../../fragments/CardList/ICard';
import Cupule from '../../routes/Geobiologie/Cupule';
import Les9RitesMunayKi from '../../routes/Les-9-rites-du-munay-ki';
import MessageAnimal from '../../routes/Message-animal';
import EntretienTambourChamanique from '../../routes/Ressources/entretien-tambour-chamanique';
import PortesOuvertesBBNov2026 from '../../routes/Articles/portes-ouvertes-blowball-guyancourt-novembre-2026';

export const ArticleList: iCard[] = (
	[
		{
			slug: 'portes-ouvertes-blowball-guyancourt-novembre-2026',
			h1: 'Portes ouvertes Blowball à Guyancourt - 22 novembre 2026',
			date: new Date('2026-10-24'),
			tags: [
				'Géobiologie',
				'Portes ouvertes',
				'Cabinet Blowball',
				'Conférence',
				'Saint-Sauveur',
			],
			thumbnail: {
				path: PortesOuvertesBBNov2026Thumbnail,
				className: 'img',
				alt: 'Une jeune femme observant un paysage et se questionnant.',
			},
			content: <PortesOuvertesBBNov2026 />,
			type: 'Evénement',
		},
		{
			slug: 'lire-un-lieu',
			h1: 'Lire un lieu : d’une découverte à l’autre',
			date: new Date('2026-10-22'),
			tags: [
				'Géobiologie',
				'Exploration',
				'Lecture de lieu',
				'Explorateur de l’invisible',
				'Cycle initiation',
			],
			thumbnail: {
				path: ApprendreALireUnLieuThumbnail,
				className: 'img',
				alt: 'Une jeune femme observant un paysage et se questionnant.',
			},
			content: <LireUnLieu />,
			type: 'Article',
		},
		{
			slug: 'entretien-tambour-chamanique-peau',
			h1: 'Prendre soin de votre tambour en période de fortes chaleurs et d’air sec',
			date: new Date('2026-06-08'),
			tags: ['Chamanisme', 'Tambour', 'Entretien', 'Conseils'],
			thumbnail: {
				path: EntretienTambourThumbnail,
				className: 'img',
				alt: 'Un monsieur en train de prendre soin de son tambour en peau.',
			},
			content: <EntretienTambourChamanique />,
			type: 'Article',
		},
		{
			slug: 'les-cupules',
			h1: 'Les cupules',
			date: new Date('2025-02-19'),
			tags: ['Géobiologie', 'Exploration', 'Géologie'],
			thumbnail: {
				path: CupuleThumbnail,
				className: 'img',
				alt: 'Un main toucnaht des cupules avec respect.',
			},
			content: <Cupule />,
			type: 'Article',
		},
		{
			slug: 'les-9-rites-munay-ki',
			h1: 'Les 9 rites Munay-Ki',
			date: new Date('2024-11-24'),
			tags: ['Munay-Ki', 'Andes', 'Transmission', 'Subtil'],
			thumbnail: {
				path: MunayKiThumbnail,
				className: 'img',
				alt: 'Un instant de transmission et de partage entre deux humains entourés des quatre esprits gardiens des andes: le serpent, le jaguar, le colibris et le condor.',
			},
			content: <Les9RitesMunayKi />,
			type: 'Article',
		},
		{
			slug: 'la-communication-animale',
			h1: 'La communication animale',
			date: new Date('2025-11-05'),
			tags: ['Communication animale', 'Annimaux', 'Subtil'],
			thumbnail: {
				path: ComAnnimalThumbnail,
				className: 'img',
				alt: 'Une dame en compagnie de son chien et de son chat, partageant un moment complice avec eux.',
			},
			content: <MessageAnimal />,
			type: 'Article',
		},
	] as iCard[]
).sort((a, b) => b.date.getTime() - a.date.getTime());
