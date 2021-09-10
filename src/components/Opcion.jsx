import React from "react";

export default class Opcion extends React.Component {
  
    render() {
    return (
      <div className="opcion">
        <button onClick={this.props.onClick}id={this.props.id} className="botones">
            {this.props.id}
        </button>
        <h2>{this.props.opciones}</h2>
      </div>
    );
  }
}
