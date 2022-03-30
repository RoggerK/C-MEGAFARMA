import React, { Component } from "react";

class ComCuerpo extends Component {
  render() {
    return (
    <div>
     <div class="container" id="nosotros">
     <br/><br/><br/>
      <div class="text-center">
        <span class="badge rounded-pill bg-primary floro titulo-floro fs-2">Bienvenido!!</span>
        <p class="floro">Megafarma inicio como un proyecto familiar , luego de mucho trabajo y scarificio losgramos salir adelante, desde hace mucho nos hemos encargado de ser los mejores de nuestra zona , nuestros clientes no tiene queja alguna sobre nuestros productos y nos ayudan a mejorar , concemas sobre nosotros y se parte de esta gran familia que quiere mejorar la familia de miles de peruanos.</p>
      </div>
      </div> 
      <div class="container sombra-floro">
        <div class="row sombra-floro">
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 ">
          <img class="img-floro  float-start" src="img/red_blu.jpg" alt="Card image"/>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 ">
          <div class="card ">
          <div class="card-body">
            <span class="card-title fs-3 p-1">Misión</span>
            <p class="card-text">Contribuir
              al desarrollo farmaceutico del país, ofreciendo productos de
              cálidad y a buen precio promoviendo el uso de medicinas para
              cuidar a nuestro pueblo.</p>
            <span class=" fs-3 p-1">Visión</span>
            <p>Ser la
              empresa farmaceutica por excelencia para el pueblo, brindando un
              servicio de calidad a nuestros clientes para que en un futuro
              próximo, poder llegar a más lugares del país.</p>
            <span class="fs-3 p-1">Objetivos</span>
            <p>
              <ul>
               <li>Amplificar nuestros puntos en distintos lugares abarcando mayor area y dando empleo.</li>
               <li>Agilizar la atención , para a tender a mayor afluencia de clientes. </li>
               <li>Terminar la inaguracion de 2 proximos locales.</li>
               <li>Ser tu primera opcion en cuanto a salud.</li>
              </ul>
            </p>
            

          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default ComCuerpo;
