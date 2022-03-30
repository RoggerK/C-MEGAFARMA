import React, { Component } from "react";

class ComCuerpo extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-12 col-md-4 text-center">
          <div class="container">
            <div class="card cabecera-derecha">
              <div class="card-header">Administracion</div>
              <button class="btn btn-outline-primary">
                <img 
                  src="img/Iconos/productos.png"
                  width="20px"
                 
                  alt=""
                />
                <strong>Productos</strong>
              </button>
              <button class="btn btn-outline-primary">
                <img class="icono"
                  src="img/Iconos/categorias.png"
                  width="20px"
               
                  alt=""
                />
                <strong>Categoria</strong>
              </button>
              <button class="btn btn-outline-primary">
                <img class="icono"
                  src="img/Iconos/primerosauxilios.png"
                  width="20px"
                 
                  alt=""
                />
                <strong>Marca</strong>
              </button>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 text-center"><br/><br/>
          <img  
            class=" doctora imagen-central rounded"
            
            src="https://st.depositphotos.com/2059701/2039/v/950/depositphotos_20392581-stock-illustration-pharmacist.jpg"
            alt=""
          />
        </div>

        <div class="col-12 col-md-4 text-center">
          <div class="container">
            <div class="card cabecera-izquierda">
              <div class="card-header">Bienvenido!!</div>
              <div class="dropdown ">
                <button
                  class="info1 btn  col-12 dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mision
                </button>
                <div
                  class="info dropdown-menu p-4 text-muted"
                  
                >
                  <p>
                    Contribuir al desarrollo farmaceutico del país, ofreciendo
                    productos de cálidad y a buen precio promoviendo el uso de
                    medicinas para cuidar a nuestro pueblo.
                  </p>
                </div>
              </div>
              <div class="dropdown">
                <button
                  class="info1 btn  col-12 dropdown-toggle"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Vision
                </button>
                <div
                  class="info dropdown-menu p-4 text-muted"
                  
                >
                  <p>
                    Ser la empresa farmaceutica por excelencia para el pueblo,
                    brindando un servicio de calidad a nuestros clientes para
                    que en un futuro próximo, poder llegar a más lugares del
                    país.
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
