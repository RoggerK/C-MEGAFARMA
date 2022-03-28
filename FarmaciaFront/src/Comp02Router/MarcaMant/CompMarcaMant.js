import React, { Component } from 'react';
import DataJsonListarMarca from "../DataJason/DataJsonListarMarca.json";

class CompMarcaMant extends Component {
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
                      <th scope="col">Nombre</th>
                      <th scope="col">Accion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DataJsonListarMarca.map((marca, indice) => {
                      return (
                        <tr>
                          <th scope="row" key={marca.id}>
                            {marca.id}
                          </th>
                          <td> {marca.nombre} </td>
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
export default CompMarcaMant;