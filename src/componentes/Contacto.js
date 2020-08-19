import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Styles/contacto.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import user from '../images/mujer.png';

const Contacto = () => {
    return (
        <section className="contacto">
            <article className="project-tile">
                <h2>Contáctame</h2>
                <img className='icono-idea' src={user} alt='icono' />
            </article>
            <div className="work">
                <p>¡Trabajemos juntos!</p>
            </div>
            <div className="phrase">
                <p>"Aprende las reglas como un profesional, para
                que puedas romperlas como un artista".
                <br/>
                -Pablo Picasso-</p>
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
        </section>
    );
}

export default Contacto;