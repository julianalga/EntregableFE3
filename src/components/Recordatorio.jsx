import React from "react";

export default class Recordatorio extends React.Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas:</h4>
        <ul>
            {
            this.props.historial.map((value, index) => {
              return (
                <li className="elemento"key={index}>{value}</li>
              )
            })
            }
        </ul>
      </div>
    );
  }
}
