import React, { Component } from "react";
import CompCabecera from "./CompCabecera";
import CompPiePagina from "./CompPiePagina";
import CompCuerpo from "./CompCuerpo";
import CompCuerpoLaboratorio from "./CompCuerpoLaboratorio"
class HomePage extends Component {

    render() {
        return (            
            <div>
               <CompCabecera/><br/><br/>
                <main role="main" >
                    <div>
                    <CompCuerpo/>
                    <CompCuerpoLaboratorio/>
                    </div>
                </main>
                <CompPiePagina />

            </div>
        );
    }
}

export default HomePage;