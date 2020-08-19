import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import SobreMi from './componentes/SobreMi';
import Proyectos from './componentes/Proyectos';
// import Servicios from './componentes/Servicios'
import Navegacion from './componentes/Navegacion';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab)

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navegacion/>
        <Switch>
          <Route exact path='/' component={Inicio} />
          <Route exact path='/sobremi' component={SobreMi} />
          <Route exact path='/proyectos' component={Proyectos} />
          <Route exact path='/contacto' component={Contacto} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }

}

export default App;
