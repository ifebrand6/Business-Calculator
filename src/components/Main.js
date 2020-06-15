import React from 'react';
import CalculatorBody from './CalculatorBody'
import HumainitzeHeader from './HumainitzeHeader';

function Main(props) {
    return(
        <div id="main" >
            <h1>Business calculator v.1</h1>
            <HumainitzeHeader/>
            <CalculatorBody />
        </div>
       
          
    )
}
export default Main;