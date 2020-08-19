import React from 'react';
import '../Styles/sobre-mi.css';
import love from '../images/love.png';

const SobreMi = () => {
    return (
        <section className="about">
            <article className="project-tile">
                <h2>¿Quién soy?</h2>
                <img className='icono-idea' src={love} alt='icono' />
            </article>
            <article className="informacion">
                <div className='caracteristica'>
                    <p>
                        Soy una persona que le gustan los retos, mi familia es la mayor motivación para salir adelante; me encanta la lectura, la naturaleza, estar en constante aprendizaje y poder compartir mis conocimiento con los demás.
                    </p>
                    <p>
                        Me apasionada la tecnología; busco aplicar mis conocimientos como desarrolladora Front-End para poder crear aplicaciones funcionales e interactivas, atendiendo las necesidades de los usuarios. Considero que mi fuerte es la maquetación donde puedo poner en práctica toda mi creatividad, claro está, obedeciendo los requerimientos propuestos para cada proyecto.
                        Mi objetivo es poder avanzar y escalar en esta carrera, adquiriendo nuevos conocimientos y aprendiendo día a día de las nuevas tecnologías.
                    </p>
                </div>
            </article>
        </section>
    );
}

export default SobreMi;