import { Button } from 'primereact/button';
import openInNewTab from './tools/OpenInNewTab';

const PanneauLateral = () => {
	return (
		<>
			<div className='events'>
				<h2>Prochains événements</h2>
				<div className='event'>
					<h3>
						<a
							href='/geobiologie#invisible'
							title='Cliquez sur ce lien pour découvrir plus d’informations sur l’initiation Explorateur de l’invisible'
						>
							Initiation Géobiologie - Explorateur de l'invisible
						</a>
					</h3>
					<ul>
						<ol>
							<a
								href='https://fb.me/e/5G749Ffpi'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur session du 19/01/2025 du Module 1 : La découverte.'
								target='_blank'
							>
								19/01/2025 - Module 1 : La découverte.
							</a>
						</ol>
						{/* <ol>XX/XX/2025 - Module 2 : Les premières recherches.</ol>
							<ol>XX/XX/2025 - Module 3 : Failles & veines d’eau.</ol>
							<ol>XX/XX/2025 - Module 4 : Réseaux géomagnétiques.</ol> */}
					</ul>
					<h3>
						<a
							href='/geobiologie#invisible'
							title='Cliquez sur ce lien pour découvrir plus d’informations sur l’initiation Explorateur de l’invisible'
						>
							Conférence - Introduction à la Géobiologie
						</a>
					</h3>
					<ul>
						<ol>
							<a
								href='https://fb.me/e/5hpKrEZ5d'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur les conférences du salon Art & bien-être 2025'
								target='_blank'
							>
								08-09/02/2025 - Salon Art & Bien-être 2025
							</a>
						</ol>
						<ol>
							<a
								href='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcyril.cophignon%2Fposts%2Fpfbid0X3A9oNubtgWVqaCYGPPFpdCsYsz1GSN8FtU4F9jQN4Ke1jtkXRbB1RfiX6MgSiGUl'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur la conférence du 22/12/2024 à 15H00 lors des portes ouvertes de coffret d’Alumine à Plaisir'
								target='_blank'
							>
								22/12/2024 - Portes ouvertes coffret d'Alumine.
							</a>
						</ol>
						<ol>
							<a
								href='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcyril.cophignon%2Fposts%2Fpfbid0X3A9oNubtgWVqaCYGPPFpdCsYsz1GSN8FtU4F9jQN4Ke1jtkXRbB1RfiX6MgSiGUl'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur la conférence du 21/12/2024 à 15H00 lors des portes ouvertes de coffret d’Alumine à Plaisir'
								target='_blank'
							>
								21/12/2024 - Portes ouvertes coffret d'Alumine.
							</a>
						</ol>
						<ol>
							<a
								href='https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcyril.cophignon%2Fposts%2Fpfbid0X3A9oNubtgWVqaCYGPPFpdCsYsz1GSN8FtU4F9jQN4Ke1jtkXRbB1RfiX6MgSiGUl'
								title='Cliquez sur ce lien pour découvrir plus d’informations sur la conférence du 15/12/2024 à 15H00 lors des portes ouvertes de coffret d’Alumine à Plaisir'
								target='_blank'
							>
								15/12/2024 - Portes ouvertes coffret d'Alumine.
							</a>
						</ol>
					</ul>
				</div>
			</div>
			<div>
				<p className='social-networks'>
					<Button
						className='facebook p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLFB || '');
						}}
					>
						<i className='pi pi-facebook px-2'></i>
						<span className='facebook'>Facebook&nbsp;</span>
					</Button>
					<Button
						className='whatsapp p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLWhatsApp || '');
						}}
					>
						<i className='pi pi-whatsapp px-2'></i>
						<span className='WhatsApp'>WhatsApp</span>
					</Button>{' '}
					<Button
						className='instagram p-0'
						onClick={() => {
							openInNewTab(import.meta.env.VITE_URLInsta || '');
						}}
					>
						<i className='pi pi-instagram px-2'></i>
						<span className='Instagram'>Instagram</span>
					</Button>{' '}
				</p>
			</div>
		</>
	);
};

export default PanneauLateral;
