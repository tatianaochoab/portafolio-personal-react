import React from 'react';
import '../Styles/sobre-mi.css'
import user from '../images/mujer.png'

const SobreMi = () => {
    return(
        <section className="about">
                <article className="project-tile">
                    <h2>¿Quien soy?</h2>
                    <img className='icono-idea' src={user} alt='icono'/>
                </article>
                <article className="informacion">
                    <div className='caracteristica'>
                        <p>
                            Soy una persona apasionada por los restos, mi familia es la mayor motivación para salir adelante; me encanta la lectura, la naturaleza, estar en constante aprendizaje y poder compartir mi conocimiento con los demás. 
                        </p>
                        {/* <img className='interfaz' src={interfaz} alt='icono'/> */}
                    </div>
                    <div className="div-imagen">
                        {/* <img className='habilidades' src={responsive} alt='icono'/>
                        <img className='habilidades' src={html} alt='icono'/>
                        <img className='habilidades' src={css} alt='icono'/>
                        <img className='habilidades' src={js} alt='icono'/> */}
                    </div>
                </article>
            </section>
    );
}

export default SobreMi;