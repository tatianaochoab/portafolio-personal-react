import React from 'react';
import '../Styles/navegacion.css'
import { Link } from 'react-router-dom';


const Navegacion = () => {
    return (
        <nav className='navbar navbar-expand-md navbar-dark navegacion'>
            <h2 className='logo'>Tatiana Ochoa</h2>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExample02' aria-controls='navbarsExample02' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarsExample02'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item'>
                        <Link className='btn draw-border' to='/'>Inicio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='btn draw-border' to='/sobremi'>Sobre mi</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='btn draw-border' to='/proyectos'>Proyectos</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='btn draw-border' to='/servicios'>Servicios</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navegacion;
