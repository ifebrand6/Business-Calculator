import React from 'react'
 function Test (props) {
    return(
        <div>
        <p>first testing</p>
        <h1>a got ahead</h1>
        <div id="increment-btn">increment</div>
        <div id="counter-value">{props.counter}</div>
        <button id="increment-counter" value='1' onClick={props.onClick} >Increment ++</button>
        <button id="decrement-counter"  value='-1' onClick={props.onClick} >Decrement --</button>
    </div>
    );
    
}
export default Test;