import React, { Component } from 'react';
import Test from './Test'

class Display extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
        
    }
    setcounter = (e)=> {
        let counter = this.state.counter;
        this.setState({
            counter: counter + parseFloat(e.target.value)
        });
    }
    render(){
        let counter = this.state.counter
         return(
      <Test counter={counter} onClick={this.setcounter}/>
    )
};
   
}

export default  Display;