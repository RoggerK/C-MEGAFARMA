import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import CompCuerpo from "./CompCuerpo";
import CompCuerpoLaboratorio from "./CompCuerpoLaboratorio";

//Producto
import CompProductoMant from "./ProductoMant/CompProductoMant";
import CompProductoDin from "./ProductoMant/CompProductoDin";

//Categoria
import CompCategoriaMant from "./CategoriaMant/CompCategoriaMant";
import CompCategoriaDin from "./CategoriaMant/CompCategoriaDin";

//Marca
import CompMarcaMant from "./MarcaMant/CompMarcaMant";
import CompMarcaDin from "./MarcaMant/CompMarcaDin";

class HomePage extends Component {
  render() {
    return (
      <Router>
        <div>
          <main role="main">
            <Routes>
              <Route path="/productoMant/:idpro" element={<ProductoMant />} />
              <Route path="/categoriaMant/:idcat" element={<CategoriaMant />} />
              <Route path="/marcaMant/:idmar" element={<MarcaMant />} />

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
  const { idpro } = useParams();
  return (
    <div>
      <CompCabecera />
      <div>
        <CompProductoMant />
        <CompProductoDin idpro={idpro} />
      </div>
      <CompPiePagina />
    </div>
  );
}

function CategoriaMant() {
  const { idcat } = useParams();
  return (
    <div>
      <CompCabecera />
      <div>
        <CompCategoriaMant />
        <CompCategoriaDin idcat={idcat} />
      </div>
      <CompPiePagina />
    </div>
  );
}

function MarcaMant() {
  const { idmar } = useParams();
  return (
    <div>
      <CompCabecera />
      <div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-lg-4">
              <CompMarcaMant />
            </div>
            <div class="col-12 col-lg-8">
              <CompMarcaDin idmar={idmar} />
            </div>
          </div>
        </div>
      </div>
      <CompPiePagina />
    </div>
  );
}
