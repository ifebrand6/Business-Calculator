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
        const current = (counter + input)
        console.log('this is current value = '+current + '>>> this is the input value = '+input + ' >> this is the state value = '+counter)
        if (current >= 0) {
            this.setState(() => {
                return { counter: (input + counter)}
        }); 
        } else {
            return e.preventDefault()
        }
    }
    render(){
        const counter = this.state.counter;
         return(
      <Test counter={counter} onClick={this.setcounter}/>
    )
};
   
}

export default  Display;