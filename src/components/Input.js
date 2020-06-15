import React from 'react';

function Input(props) {
    const forValuator = ()=> {
        switch (props.case_input) {
            case 'Profit & Loss Calculator':
                return proift_and_loss_form 
            case 'Retail Price':
                return notAvailable
            case 'After Tax Return':
                return notAvailable
            case 'Net Gross Profit (Fiscal Year)':
                return notAvailable
            default:
                return null
            }
    }
    const proift_and_loss_form =    <div  id={props.case_input} >
    <div className="form-group">
        <input type="number" className="form-control" placeholder="Enter Cost price *" id='cost_price' name="cost_price" value={props.cost_price} onChange={props.onChange}/>
    </div>
    <div className="form-group">
        <input type="number" className="form-control" placeholder="`Enter Selling Price *" id='selling_price' name="selling_price" value={props.selling_price}  onChange={props.onChange}/>
    </div>
</div>
    const notAvailable =  <div id="promise_form"><h3>Oops! this feature is still under construction try again.</h3> <br/><img src="images/inprogress/mp4" alt=""/></div>
    const renderForm = forValuator();
    return(
        <div id={props.case_input}>
            {renderForm}
            <br/>
    </div>
    )
}
export default Input;