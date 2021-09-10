import { Component } from "react";
import Historia from "./components/Historia";
import Opcion from "./components/Opcion"
import Recordatorio from "./components/Recordatorio";
import data from "./components/data.json"





export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      contador: 0,
      seleccionPrevia: "",
      historial : [],
    };
  }
  
  setearEstado = (seleccionPrevia, contador) => {
    this.setState({
      contador: this.state.contador + contador,
      seleccionPrevia: seleccionPrevia,
      historial : [...this.state.historial, seleccionPrevia]
      
    });
  }



  handleClick = (e) => {
    const id = e.target.id;
    let historial = []
    if (this.state.contador >= 7) {
      alert("Fin.");
    } else if (id === "A" && this.state.seleccionPrevia !== "A") {
      historial = [...this.state.historial, "A"]
      this.setState({
        contador: this.state.contador + 1,
        seleccionPrevia: "A",
        historial : historial
        
      });
    } else if (id === "A" && this.state.seleccionPrevia === "A") {
      historial = [...this.state.historial, "A"]
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia : "A",
        historial : historial

      });
    } else if (id === "B" && this.state.seleccionPrevia === "A") {
      historial = [...this.state.historial, "B"]
      this.setState({
        contador: this.state.contador + 3,
        seleccionPrevia: "B",
        historial : historial
        
      });
    } else if (id === "B") {
      historial = [...this.state.historial, "B"]
      this.setState({
        contador: this.state.contador + 2,
        seleccionPrevia: "B",
        historial : historial
        
      });
    }
    
    
    console.log( "**** : historial",this.state.historial)
    console.log( "**** : state",this.state)
  };

  render() {


    return (
        <div className="layout">
          <Historia data={data[this.state.contador].historia}/>
          <div className="opciones">
            <Opcion id="A" opciones={data[this.state.contador].opciones.a} onClick={this.handleClick}/>
            <Opcion id="B" opciones={data[this.state.contador].opciones.b} onClick={this.handleClick}/>
          </div>
          <Recordatorio seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial}/>
        </div>
    );
  }
}
