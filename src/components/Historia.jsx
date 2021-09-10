import React from "react";

export default class Historia extends React.Component{
    render(){
        return(
            <h1 className="historia">{this.props.data}</h1>
        )
    }
}