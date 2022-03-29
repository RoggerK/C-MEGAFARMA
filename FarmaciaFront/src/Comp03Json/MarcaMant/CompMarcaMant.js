import React, { Component } from "react";
import DataJsonListarMarca from "../DataJason/DataJsonListarMarca.json";
//import from "../DataJason/DataJsonListarProductos.json";
import { Link } from "react-router-dom";

class CompMarcaMant extends Component {
  render() {
    return (
      <div>
        <br /> <br />
        <div class="card">
          <div class="card-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Accion</th>
                </tr>
              </thead>
              <tbody>
                {DataJsonListarMarca.map((marca, indice) => {
                  return (
                    <tr>
                      <th scope="row"> {marca.id} </th>
                      <td>
                        <Link
                          class="nav-link text-dark"
                          to={`/marcaMant/${marca.id}`}
                        >
                          {marca.nombre}
                        </Link>
                      </td>
                      <td>
                        <botton
                          class="btn btn-success rounded-circle"
                          key={marca.id}
                        >
                          <Link to={`/marcaMant/${marca.id}`}>
                            <i class="bi bi-pencil-fill text-white fs-5"></i>
                          </Link>
                        </botton>
                        <br/> <br/>
                        <botton
                          class="btn btn-warning rounded-circle"
                          key={marca.id}
                        >
                          <Link to={`/marcaMant/${marca.id}`}>
                            <i class="bi bi-trash3-fill text-danger fs-5"></i>
                          </Link>
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
export default CompMarcaMant;
