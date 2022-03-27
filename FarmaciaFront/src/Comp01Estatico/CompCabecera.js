import React, { Component } from 'react';

class CompCabecera extends Component {

    render() {
        return (<nav class="navbar navbar-expand-lg navbar-light  fixed-top" style="opacity: 0.9;" >
            <div class="container-fluid">
                <img width="150" style="margin-left: 43px;" class="bg-light" src="https://scontent.flim13-1.fna.fbcdn.net/v/t1.15752-9/258881021_656319679026647_5542019220402454485_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFYwfnZvPH317fiPuYKWwA9TyDLsT9YvgVPIMuxP1i-BeAV0oWR5tcFxYH4e_r3a2BEUbIglo5WD767hjvsFi7N&_nc_ohc=-LCHFf51--gAX8ESJrh&_nc_ht=scontent.flim13-1.fna&oh=03_AVLEOzwEdQjlgEXiTb49xOHLPQbKG3nNIoHC31DsN2ZlKA&oe=6245CA82" alt="" />
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-light" style="margin-left: 170px;" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-light" style="margin-left: 170px;" aria-current="page" href="#productos">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active text-light" style="margin-left: 170px;" aria-current="page" href="#informacion">Acerca de Nosotros</a>
                    </li>
                </ul><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>)
    }
}

export default CompCabecera;