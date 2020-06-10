import React from 'react'
 function Test (props) {
    //  const value = document.getElementById("counter-value").value
    // console.log(value)
    // const go = ()=>{
    //     if (props.counter >= 0){
    //         return 1
    //     }else{
    //        return props.counter
    //         // return <legend id="warn"> you cant go less than </legend>
    //     }}
    //  console.log(props.counter)
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