import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CompCabecera extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark p-0 fixed-top">
            <div class="container-fluid">
            <a href="#"><img src="https://scontent.flim13-1.fna.fbcdn.net/v/t1.15752-9/258881021_656319679026647_5542019220402454485_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFYwfnZvPH317fiPuYKWwA9TyDLsT9YvgVPIMuxP1i-BeAV0oWR5tcFxYH4e_r3a2BEUbIglo5WD767hjvsFi7N&_nc_ohc=-LCHFf51--gAX8ESJrh&_nc_ht=scontent.flim13-1.fna&oh=03_AVLEOzwEdQjlgEXiTb49xOHLPQbKG3nNIoHC31DsN2ZlKA&oe=6245CA82" class="bg-light" width="150" alt=""/></a>
              <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#nav-superior" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="nav-superior">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 "></ul>
                <Link to="/"><a class=" nav-link text-light" aria-current="page" >Inicio</a></Link>
                <a class="nav-link text-light" href="#laboratorio">Laboratorios</a>
                <a class="nav-link text-light" href="#nosotros">Nosotros</a>
                <a class="nav-link text-light" href="#contactenos">Contactenos</a>
    
                  <div class="dropdown nav-categoria">
                  <a  class="nav-link text-light">
                  Administrar</a>
                  <div id="drop-down" >
                  <Link class="nav-link text-white" to="/marcaMant"><a  class="clinks"> Marca</a></Link>
                      <Link class="nav-link text-white" to="/productoMant"><a class="clinks"> Producto</a></Link>
                      <Link class="nav-link text-white" to="/categoriaMant"><a class="clinks"> Categorias</a></Link>        
                  </div>
                </div>
              </div>
            </div>
          </nav>
        );
    }
}
export default CompCabecera;