import React from 'react';

function Input(props) {
    const forValuator = ()=> {
        switch (props.case_input) {
            case 'Profit & Loss Calculator':
                return proift_and_loss_form 
            case 'Retail Price':
                return retail_price_form
            case 'After Tax Return':
                return notAvailable
            case 'Net Gross Profit (Fiscal Year)':
                return notAvailable
            default:
                return null
            }
    }
    const proift_and_loss_form =    <div  id="gain_form" >
    <div className="form-group">
        <input type="number" className="form-control" placeholder="Enter Cost price *" id='cost_price' name="cost_price" value={props.cost_price} onChange={props.onChange}/>
    </div>
    <div className="form-group">
        <input type="number" className="form-control" placeholder="`
         Selling Price *" id='selling_price' name="selling_price" value={props.selling_price}  onChange={props.onChange}/>
    </div>
</div>

    const retail_price_form = <div id="retail_price_form">
        <fieldset>
        <label htmlFor="Production Price">Production Cost Unit Price</label>
        <input type="number" className="form-control" placeholder="Enter Production Cost Unit Price *" id='production_cost' name="production_cost" value={props.production_cost} onChange={props.onChange}/>
        </fieldset>
        <fieldset>
        <label htmlFor="Production Price">OverHead Cost </label>
        <input type="number" className="form-control" placeholder="Enter OverHead Cost *" id='over_head_cost' name="over_head_cost" value={props.over_head_cost} onChange={props.onChange}/>
        </fieldset>
        <fieldset>
        <label htmlFor="Production Price">Administration Expenses</label>
        <input type="number" className="form-control" placeholder={props.admin_expenses}  id='admin_expenses' name="admin_expenses" value={props.admin_expenses} onChange={props.onChange}/>
        </fieldset>
        <fieldset>
        <label htmlFor="Production Price">Number of Unit produce</label>
        <input type="number" className="form-control" placeholder="Enter Number of Unit produce *" id='num_of_unit_product' name="num_of_unit_product" value={props.num_of_unit_product} onChange={props.onChange}/>
        </fieldset>
        <fieldset>
        <label htmlFor="Production Price"> Profit Margin</label>
        <input type="number" className="form-control" placeholder="Enter Profit Margin *" id='profit_margin' name="profit_margin" value={props.profit_margin} onChange={props.onChange}/>
        </fieldset>
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
// total_overload: '',
// admin_expenses: '',
// production_cost: '',
// num_of_unit_product: '',
// profit_margin: 0