import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.up = this.up.bind(this)
        this.down = this.down.bind(this)
        this.state = {
            number : 0
        }
    }

    up(){
        this.setState({
            number: ++ this.state.number
        })
    }

    down(){
        this.setState({
            number: -- this.state.number
        })
    }



    render(){
        return(
            <div>
                <h3>Hello Class World</h3>
                <h1> Counter = {this.state.number} </h1>
                <button onClick={this.up}>Increment</button>
                <br/>
                <br/>
                <button onClick={this.down}>Decrement</button>
                <hr></hr>

               
            </div>
        )
    }

}

export default Counter;