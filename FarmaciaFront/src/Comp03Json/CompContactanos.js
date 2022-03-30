import React, { Component } from "react";

class CompContactanos extends Component {
  render() {
    return (
      <div class=" vh-100  d-flex justify-content-center align-items-center fondo-contactenos" id="contactenos">
      <div class="card primero" >
        
          <div class="card-body text-dark login" id="login" >
       
            <h4 class="card-title"></h4>
            <div  class="text-center">
            <img class="card-img-top bg-light card-contactanos"   src="https://scontent.flim13-1.fna.fbcdn.net/v/t1.15752-9/258881021_656319679026647_5542019220402454485_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_eui2=AeFYwfnZvPH317fiPuYKWwA9TyDLsT9YvgVPIMuxP1i-BeAV0oWR5tcFxYH4e_r3a2BEUbIglo5WD767hjvsFi7N&_nc_ohc=-LCHFf51--gAX8ESJrh&_nc_ht=scontent.flim13-1.fna&oh=03_AVLEOzwEdQjlgEXiTb49xOHLPQbKG3nNIoHC31DsN2ZlKA&oe=6245CA82" alt="Card image"/>
          </div>

            <p class="p-contacta"> <h2 class="text-center " >Contactanos!!</h2></p>
            <p class="p-contacta"> <h2 class="text-center " ></h2></p>
            <div >
              
              <div class="input-group mb-3">
                  <span class="input-group-text text-interno"  ><strong>Nombre</strong></span>
                  <input type="text"  class="form-control text-interno" id="usuario" name="user" placeholder="Pablo" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text text-interno"  ><strong>Apellido</strong></span>
                  <input type="text"  class="form-control text-interno" id="password" name="password" placeholder="Ramirez" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text text-interno"  ><strong>Correo</strong></span>
                  <input type="email"  class="form-control text-interno" id="password" name="password" placeholder="un@gmail.com" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                
                <div class="text-center">
                    <button type="submit" class="btn btn-primary p-1 fs-3">Ingresar</button>
                </div>
            </div><br/><br/>
          
            <tbody>
                <tr class="">
                  <div class="text-center">
                  <td><i class="bi bi-facebook fb"></i></td>
                  <td><i class="bi bi-whatsapp wsp"></i></td>
                  <td><i class="bi bi-twitter twitter bg-info text-light"></i> </td>
                  <td><i class="bi bi-tiktok tt"></i></td>
                  </div>
                </tr>
              </tbody>
          </div>
        </div>
        </div>
          
    );
  }
}
export default CompContactanos;
