import { useParams } from 'react-router-dom';
import Contact from './Contact';

const ContactWrapper = () => {
	const { sujet } = useParams(); // pour /contact/sujet/xxx

	return <Contact sujetFromPath={sujet} />;
};

export default ContactWrapper;
