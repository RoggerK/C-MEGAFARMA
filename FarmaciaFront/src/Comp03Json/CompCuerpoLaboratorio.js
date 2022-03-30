import React, { Component } from "react";

class ComCuerpoLaboratorio extends Component {
    render() {
        return (
          <div id="laboratorio"><br/><br/><br/>
          <div class="text-center">
          <span class="badge rounded-pill bg-primary fs-1 " id="">Laboratorios</span>
        </div><br/><br/>
          <div class="container">
            <div class="row">
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                <a href="https://www.latam.abbott/products.html" target="_blank"><figure>
                    <img
                      src="img/Laboratorio/abbot.jpeg"
                      alt=""
                    />
                    <div class="capa">
                      <h2><strong>Abbot</strong></h2>
                    </div>
                  </figure></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                  <a target="_blank" href="https://www.bayer.com/es/co/andina-y-cac-home"><figure>
                    <img
                      src="img/Laboratorio/bayer.png"
                      alt=""
                    />
                    <div class="capa">
                      <h2><strong>Bayer</strong></h2>
                    </div>
                  </figure></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                  <a href="http://www.brisafarma.com/" target="_blank"><figure>
                    <img
                      src="img/Laboratorio/brisafarma.png"
                      alt=""
                    />
                    <div class="capa">
                      <h2><strong>Brisafarma</strong></h2>
                    </div>
                  </figure></a>
                </div>
              </div>
            
          <br/><br/> 
          
         
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                  <a href="http://www.deutschepharma.com.pe/site/index.php" target="_blank"> <figure>
                    <img
                      src="img/Laboratorio/deuschefarma.gif"
                      alt=""
                    />
                    <div class="capa">
                      <h2><strong>Deutsche Pharma</strong></h2>
                    </div>
                  </figure></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                  <a href="http://www.hersil.com.pe/" target="_blank"><figure>
                    <img
                      src="img/Laboratorio/hersil.png"
                      alt=""
                    />
                    <div class="capa">
                      <h2><strong>Hersil</strong></h2>
                    </div>
                  </figure></a>
                </div>
              </div>
              <div class="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div class="contenedor" id="productos">
                  <a href="https://www.jnjperu.com/johnson-johnson" target="_blank"><figure>
                    <img
                      src="img/Laboratorio/jhonsons.jpg"
                      alt=""
                    />
                    <div class="capa">
                      <h2 class="johons"><strong>Johonson</strong></h2>
                      <p class="johons fs-3"><strong>y</strong></p>
                      <p class="johons fs-2"><strong>Johonson</strong></p>
                    </div>
                  </figure></a>
                </div>
              </div>
              </div>
              </div>
        </div>
        );
    }

}

export default ComCuerpoLaboratorio;