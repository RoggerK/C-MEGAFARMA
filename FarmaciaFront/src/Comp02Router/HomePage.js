import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CompCabecera from "./CompCabecera";
import CompCarusel from "./CompCarusel"
import CompPiePagina from "./CompPiePagina";
import CompCuerpo from "./CompCuerpo";
import CompContactanos from "./CompContactanos";
import CompCuerpoLaboratorio from "./CompCuerpoLaboratorio";
import CompCabeceraMant from "./CompCabeceraMant";
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
                <dic>
                <CompCabecera/>
                <CompCarusel/>
                </dic>
                <div>
                    <CompCuerpo/>
                    <CompCuerpoLaboratorio/><br/><br/>
                    </div>
                    <CompContactanos/>
                    <CompPiePagina />
                    </div>
  );
}

function ProductoMant() {
  return (
    <div>
      <CompCabeceraMant />
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
      <CompCabeceraMant />
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
      <CompCabeceraMant />
      <div>
          <CompMarcaMant />
      </div>
      <CompPiePagina />
    </div>
  );
}
