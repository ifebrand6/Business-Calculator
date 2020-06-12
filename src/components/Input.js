import React from 'react';

function Input(props) {
    const caseF = ()=> {if (1 < 10) {
         return case1
    }}
    const case1 =  <input type="text" defaultValue={'d'}/>
    const renderForm = caseF()
    return(
        <div id={props.case_input}>
        <form action="">
            {renderForm}
            <br/>
        </form>
    </div>
    )
}
export default Input;