import React, { Component } from "react";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import CompCuerpo from "./CompCuerpo";
import CompCarusel from "./CompCarusel"
import CompCuerpoLaboratorio from "./CompCuerpoLaboratorio"
import CompContactanos from "./CompContactanos";
class HomePage extends Component {

    render() {
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
}

export default HomePage;