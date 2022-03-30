import React, { Component } from "react";

class CompCarusel extends Component {
  render() {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" id="nav-1er-img">
           
            <div class="carousel-caption d-none d-md-block ">
              <img src="https://media.discordapp.net/attachments/935382445803597854/958498394756755526/LOGOFARMACIA.png"  class="logo2 " alt=""/>
              <h2>Mejores en calidad y precio</h2>
            </div>
          </div>
          <div class="carousel-item" id="nav-2da-img">
            <div class="carousel-caption d-none d-md-block">
              <h2>Contamos con todo lo necesario para mejorar tu calidad de vida</h2>
            </div>
          </div>
          <div class="carousel-item" id="nav-3era-img">
            <div class="carousel-caption d-none d-md-block">
              <h2>Contactanos!!, estamos para ti</h2>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    );
  }
}
export default CompCarusel;
