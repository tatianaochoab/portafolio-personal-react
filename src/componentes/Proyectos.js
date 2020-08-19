import React from 'react';
import '../Styles/proyectos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pomodoro from'../images/pomodoro.png';
import calculadora from '../images/calculadora.png';
import tecnical from '../images/tecnical.png';
import drum from '../images/drum.png';
import idea from '../images/idea.png';

const Proyectos = () => {
    return (
        <section className="projects">
            <article className="project-tile">
                <h2>Mis proyectos</h2>
                <img className='icono-idea' src={idea} alt='icono'/>
            </article>

            <section id="corousel">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={pomodoro} className="d-block w-100" alt="..."></img>
                            <a
                                href="https://pomodoro-clock.tatianaochoab.now.sh/"
                                className="badge badge-warning d-md-block" target="_blank">Ir al sitio</a>
                        </div>
                        <div className="carousel-item">
                            <img src={calculadora} className="d-block w-100" alt="..."></img>
                            <a
                                href="https://javascript-calculator-ochre.now.sh/"
                                className="badge badge-warning d-md-block" target="_blank">Ir al sitio</a>
                        </div>
                        <div className="carousel-item">
                            <img src={drum} className="d-block w-100" alt="..."></img>
                            <a
                                href="https://drum-machine.tatianaochoab.now.sh/"
                                className="badge badge-warning d-md-block" target="_blank">Ir al sitio</a>
                        </div>
                        <div className="carousel-item">
                            <img src={tecnical} className="d-block w-100" alt="..."></img>
                            <a
                                href="https://tatianaochoab.github.io/technical-documentation-page/"
                                className="badge badge-warning d-md-block" target="_blank">Ir al sitio</a>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                        data-slide="prev">
                        <span className="carousel-control-prev-icon p-3 mb-2 bg-danger text-white"
                            aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                        data-slide="next">
                        <span className="carousel-control-next-icon p-3 mb-2 bg-danger text-white"
                            aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
        </section>
    );
}

export default Proyectos;