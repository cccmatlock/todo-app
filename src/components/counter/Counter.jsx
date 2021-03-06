import React, { Component } from 'react';
import './Counter.css'



class Counter extends Component {

    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        return (
            <div className="Counter" >
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <span className="count">{this.state.counter}</span>
            </div>
        );
    }

    increment(by) {
        //console.log(`increment from parent - ${by}`)
        this.setState({
            counter: this.state.counter + by
        });
    }


}


class CounterButton extends Component {

    // Define the initial state in a constructor
    // state => counter 0       

    constructor() {
        super();                // Error 1

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
    }

    render() {
        //render = () => {
        //let style = { fontSize: "50px", padding: "15px 30px" }
        return (
            <div className="counter" >
                <button onClick={this.increment} >+{this.props.by}</button>
            </div >
        );
    }

    increment() {
        this.setState({
            counter: this.state.counter + this.props.by
        });

        this.props.incrementMethod(this.props.by);
    }

}

CounterButton.defaultProps = {
    by: 1
}

export default Counter;