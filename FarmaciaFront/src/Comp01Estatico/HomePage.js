import React, { Component } from "react";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";

class HomePage extends Component {

    render() {
        return (
            <div>
                <CompCabecera/>
                <main role="main" >
                    Hola está es mi primera pagina
                </main>
                <CompPiePagina />
            </div>
        );
    }
}

export default HomePage;