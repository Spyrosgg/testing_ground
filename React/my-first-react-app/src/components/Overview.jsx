import React,{Component} from "react";


class Overview extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.task}</h2>
            </div>
        );
    }


}

export default Overview