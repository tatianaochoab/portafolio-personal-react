import React from 'react';
import '../Styles/inicio.css';
import tatiana from '../images/tatiana-1.jpg';


const Inicio = () => {
    return (
        <section className="welcome-section">
            <article className="welcome">
                <span className="section-hola">
                    <h1>Hola!!</h1>
                </span>
                <span className="section-nombre">
                    <h1>Soy, Tatiana Ochoa</h1>
                    <p>Desarrolladora Front-End en formación</p>
                </span>
            </article>
            <div className="photo"><img src={tatiana} alt="foto"/></div>
        </section>
    );
}

export default Inicio;