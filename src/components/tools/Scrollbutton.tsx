import { useState } from 'react';
import { Button } from 'primereact/button';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false);
	const pivotPixel = 150;

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > pivotPixel) {
			setVisible(true);
		} else if (scrolled <= pivotPixel) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div className='ScrollButton'>
			<Button
				onClick={scrollToTop}
				title='Cliquez sur ce bouton pour remonter en ahut de la page.'
				className='bottom-right-fixed p-button-raised p-button-secondary p-button-text'
				icon='pi pi-arrow-up'
				style={{ display: visible ? 'inline' : 'none' }}
			/>
		</div>
	);
};

export default ScrollButton;
