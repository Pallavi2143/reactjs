import React,{Component} from "react";

class Counter extends Component{
constructor(){
    super();
    this.state = {
        count : 0
    }
    // this.increment = this.increment.bind(this)
}

increment=()=>{
    this.setState({count : this.state.count + 1})
}
decrement=()=>{
    this.setState({count : this.state.count - 1})
}
    render(){
        return (
            <>
            <center>
              <h1>{this.state.count}</h1>
                <button className="btn btn-primary m-3 p-3" onClick={this.increment}>+</button>
                <button className="btn btn-primary m-3 p-3" onClick={this.decrement}>-</button>
            </center>
            </>
        )
    }
}
export default Counter;