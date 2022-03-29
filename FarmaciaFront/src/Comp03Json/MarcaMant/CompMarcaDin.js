import React from "react";
import DataJsonListarProductos from "../DataJason/DataJsonListarProductos.json";

const CompMarcaDin = (props) => {
  const lstproductos = DataJsonListarProductos.filter(
    (x) => x.idmarca.toString() === props.idmar.toString()
  );

  return (
    <div>
      <br /> <br />
      <div class="card bg-warning">
        <div class="card-body">
          <div class="container">
            <div class="row">
              {lstproductos.map((prod, index) => {
                return (
                  <div class="col-4">
                    <div class="card border border-2 border-primary">
                      <img
                        src={prod.urlimg}
                        class="card-img-top"
                        alt="..."
                        height="180px"
                      />
                      <div class="card-body bg-primary text-white">
                        <h5 class="card-title"> {prod.nombre} </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br /> <br />
      <br /> <br />
    </div>
  );
};

export default CompMarcaDin;
