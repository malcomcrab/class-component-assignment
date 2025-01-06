import { Component } from "react";

class Count extends Component {
    constructor(props){
        super(props)
    }




render() {
    return(
        <>
         <p>Total Tasks: {this.props.word}</p>
        </>
    )
}
}

export default Count 