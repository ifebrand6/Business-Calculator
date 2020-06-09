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
        const input = parseFloat(e.target.value) 
        this.setState(() => {
            if (input < 0) {
                return { counter: 0}
            }else {
                return { counter: (counter + input)}
            }
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