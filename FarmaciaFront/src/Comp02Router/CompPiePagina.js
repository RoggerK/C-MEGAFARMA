import React, { Component } from 'react';


class CompPiePagina extends Component {
    render() {
        return (
            <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-primary p-1">
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarpie" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button> 
          <div class="collapse navbar-collapse" id="navbarpie">
            <br/>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <span href="#" class="text-light fs-2">MEGAFARMA &copy;</span>
            </li>
           </ul>
            <span class="btn text-light fs-4">IDAT-2022</span>
             <span class="text-light fs-4">Grupo D </span>
          </div>
        </div>
      </nav>
        );
    }
}
export default CompPiePagina;