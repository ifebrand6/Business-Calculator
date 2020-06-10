import React from 'react';

function Input(props) {
    return(
        <div id={props.case_input}>
        <form action="">
            <input type="text" defaultValue={'d'}/>
            <br/>
        </form>
    </div>
    )
}
export default Input;