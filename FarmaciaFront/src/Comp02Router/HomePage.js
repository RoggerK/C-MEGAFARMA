import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import CompCuerpo from "./CompCuerpo";
import CompCuerpoLaboratorio from "./CompCuerpoLaboratorio";

//Producto
import CompProductoMant from "./ProductoMant/CompProductoMant"
//Categoria
import CompCategoriaMant from "./CategoriaMant/CompCategoriaMant"
//Marca
import CompMarcaMant from "./MarcaMant/CompMarcaMant"

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <main role="main">
            <Routes>
              <Route path="/productoMant" element={<ProductoMant />} />
              <Route path="/categoriaMant" element={<CategoriaMant />} />
              <Route path="/marcaMant" element={<MarcaMant />} />

              <Route path="/" element={<Inicio />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default HomePage;

function Inicio() {
  return (
    <div>
      <CompCabecera />
      <div>
          <CompCuerpo />
          <CompCuerpoLaboratorio />
      </div>
      <CompPiePagina />
    </div>
  );
}

function ProductoMant() {
  return (
    <div>
      <CompCabecera />
      <div>
        <CompProductoMant />
      </div>
      <CompPiePagina />
    </div>
  );
}

function CategoriaMant() {
  return (
    <div>
      <CompCabecera />
      <div>
          <CompCategoriaMant />
      </div>
      <CompPiePagina />
    </div>
  );
}

function MarcaMant() {
  return (
    <div>
      <CompCabecera />
      <div>
          <CompMarcaMant />
      </div>
      <CompPiePagina />
    </div>
  );
}
