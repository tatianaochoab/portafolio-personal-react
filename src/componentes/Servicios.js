import React from 'react';
import '../Styles/servicios.css';
import servicio from '../images/interfaz.png';
import interfaz from '../images/interfaz-1.png';
import responsive from '../images/responsive.png';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/javascript.png';

const Servicios = () =>{
    return(
        <section className="servicios">
                <article className="project-tile">
                    <h2>Servicios</h2>
                    <img className='icono-idea' src={servicio} alt='icono'/>
                </article>
                <article className="informacion">
                    <div className='caracteristica'>
                        <p>
                            Como desarrolladora Front-End tengo la capacidad de plasmar las elementos de un sitio web con los que se pueden interactuar, y trabajo tanto a nivel de de diseño como de desarrollo. 
                        </p>
                        <img className='interfaz' src={interfaz} alt='icono'/>
                    </div>
                    <div className="div-imagen">
                        <img className='habilidades' src={responsive} alt='icono'/>
                        <img className='habilidades' src={html} alt='icono'/>
                        <img className='habilidades' src={css} alt='icono'/>
                        <img className='habilidades' src={js} alt='icono'/>
                        <ul>
                        <h5>Habilidades profesionales</h5>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>React-Js</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>SASS</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </article>
            </section>
    );
}

export default Servicios;