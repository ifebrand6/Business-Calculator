import React from 'react';

function Input(props) {
    const forValuator = ()=> {
        switch (props.case_input) {
            case 'Profit & Loss Calculator':
                return proift_and_loss_form 
            break;
            case 'Retail Price':
                return notAvailable
                break;
            case 'After Tax Return':
                return notAvailable
                break;
            case 'Net Gross Profit (Fiscal Year)':
                return notAvailable
                break;
            default:
                return null
            }
    }
    const proift_and_loss_form =  <form action="" id="gain_form">  <input id='cost_price' name="cost_price" value={props.cost_price} onChange={props.onChange}/>  <input id='selling_price' name="selling_price" value={props.selling_price}  onChange={props.onChange}/> </form>
    const notAvailable =  <div id="promise_form"><h3>Oops! this feature is still under construction try again.</h3></div>
    const renderForm = forValuator();
    return(
        <div id={props.case_input}>
            {renderForm}
            <br/>
    </div>
    )
}
export default Input;