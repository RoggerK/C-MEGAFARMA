import React, { Component } from "react";

class CompCabecera extends Component {
    render() {
        return (
            <nav class="navbar fixed-top navbar-expand-sm navbar-dark bg-primary p-1">
            <div class="container">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcabecera" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button> 
              <div class="collapse navbar-collapse" id="navbarcabecera"><br/>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                  <img width="200" class="bg-light" src="https://scontent.flim13-1.fna.fbcdn.net/v/t1.15752-9/258881021_656319679026647_5542019220402454485_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFYwfnZvPH317fiPuYKWwA9TyDLsT9YvgVPIMuxP1i-BeAV0oWR5tcFxYH4e_r3a2BEUbIglo5WD767hjvsFi7N&_nc_ohc=-LCHFf51--gAX8ESJrh&_nc_ht=scontent.flim13-1.fna&oh=03_AVLEOzwEdQjlgEXiTb49xOHLPQbKG3nNIoHC31DsN2ZlKA&oe=6245CA82" alt=""/>

               </li>
               </ul>
                <a class="nav-link active text-light fs-4" href="#">Laboratorios</a>
                <a class="nav-link active text-light fs-4" href="#">Nosotros</a>
              </div>
            </div>
          </nav>
        );
    }

}

export default CompCabecera;