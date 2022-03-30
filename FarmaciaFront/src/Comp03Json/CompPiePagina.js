import React, { Component } from 'react';


class CompPiePagina extends Component {
    render() {
        return (
          <nav
          class="navbar pie fixed-bottom navbar-expand-sm navbar-dark p-1 fixed-bottom">
          <div class="container">
            <button
              class="navbar-toggler"
    
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#nav-inferior"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nav-inferior">
              <br />
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <span href="#" class="text-light">Megafarma</span>
                </li>
              </ul>
              <span class="btn text-light">IDAT-2022</span>
              <span class="text-light">Grupo D &copy;</span>
            </div>
          </div>
        </nav>
        );
    }
}
export default CompPiePagina;