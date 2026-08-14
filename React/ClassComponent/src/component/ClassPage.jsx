import { Component } from "react";
class ClassPage extends Component{
    render(){
        return(
            <div>i am class based component {this.props.title}</div>
        )
    }
}
export default ClassPage