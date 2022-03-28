import React, { Component } from "react";
import DataJsonListarProductos from "../DataJason/DataJsonListarProductos.json";

class CompProductoMant extends Component {
  render() {
    return (
      <div class="container">
        <br /> <br />
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Imagen</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                {DataJsonListarProductos.map((producto, indice) => {
                  return (
                    <tr>
                      <th scope="row" key={producto.id}>
                        {producto.id}
                      </th>
                      <td>
                        <img src={producto.urlimg} width="80px" height="80px" />
                      </td>
                      <td> {producto.nombre} </td>
                      <td> {producto.prcUN} </td>
                      <td>
                        <botton class="btn btn-success rounded-circle">
                          <i class="bi bi-pencil-fill text-white fs-5"></i>
                        </botton>
                        <botton class="btn btn-warning rounded-circle">
                          <i class="bi bi-trash3-fill text-danger fs-5"></i>
                        </botton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default CompProductoMant;
