import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/contacto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Contacto = () => {
    return (
        <footer className="contacto">
            <article className="project-tile">
                <h2>Contactame</h2>
            </article>
            <div className="work">
                <p>¡Trabajemos juntos!</p>
            </div>
            <div className="iconos">
                <ul className="social-icons">
                    <li><a className='link-iconos' href='https://github.com/tatianaochoab' target="_blank"><FontAwesomeIcon className='iconos' icon={['fab', 'github']} /></a></li>
                    <li><a className='link-iconos' href='https://www.linkedin.com/in/tatiana-ochoa-bautista/' target="_blank"><FontAwesomeIcon className='iconos' icon={['fab', 'linkedin-in']} /></a>
                    </li>
                    <li><a className='link-iconos' href='https://twitter.com/tatianaochoab' target="_blank"><FontAwesomeIcon className='iconos' icon={['fab', 'twitter']} /></a></li>
                    <li><a className='link-iconos' href='https://www.instagram.com/tatianaochoab' target="_blank"><FontAwesomeIcon className='iconos' icon={['fab', 'instagram']} /></a></li>
                </ul>
            </div>
            <div className='derechos'>
                <p>Copyrigth © Tatiana Ochoa Bautista 2020</p>
            </div>
        </footer>
    );
}

export default Contacto;