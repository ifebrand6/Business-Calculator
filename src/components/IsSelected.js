import React from 'react';
import Input from './Input'
import Result from './Result'

class IsSelected extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cost_price: '',
            selling_price: '',
            result: 0 , //TODO remove this
            error_message: '', //TODO remove this
            remove_result: true,
            // SET RETAIL FORM STATE
            over_head_cost: '',
            admin_expenses: '',
            production_cost: '',
            num_of_unit_product: '',
            profit_margin: '',
            // SET AFTER TAX VALUE
            tax_rate: '',
            after_tax_return: ''
        }
    }
    handleOnChange = (e)=> {
        const input = e.target.value;
        this.setState({     
            [e.target.name]: input,
            remove_result: false
        });
    }
   
    render(){
    const case_input = this.props.formType;
    const cost_price = this.state.cost_price;
    const selling_price = this.state.selling_price;
    const over_head_cost = this.state.over_head_cost;
    const admin_expenses = this.state.admin_expenses;
    const production_cost = this.state.production_cost;
    const num_of_unit_product = this.state.num_of_unit_product;
    const profit_margin = this.state.profit_margin;
    const tax_rate = this.state.tax_rate;
    const after_tax_return = this.state.after_tax_return
    const result = selling_price - cost_price;
    const retailResult = ((((parseFloat(production_cost) + parseFloat(over_head_cost) + parseFloat(admin_expenses))/parseFloat(num_of_unit_product)) + parseFloat(profit_margin)) * 2)
    var taxReturnResult = (((after_tax_return/100)/(1 - (tax_rate/100))) * 100).toFixed(2)

    const resultOutput = this.state.remove_result ? null : <Result result={result} retailResult={retailResult} taxReturnResult={taxReturnResult} case_input={case_input} />
    return (
    <div id="iselected">
        <div className="col-md-12">
        <Input case_input={case_input} cost_price={cost_price} selling_price={selling_price} onChange={this.handleOnChange} over_head_cost={over_head_cost} admin_expenses={admin_expenses} production_cost={production_cost} num_of_unit_product={num_of_unit_product} profit_margin={profit_margin} after_tax_return={after_tax_return} tax_rate={tax_rate}/>
        </div>
        {resultOutput}
        <br/>
        <button className="btn-dark" onClick={this.props.onClick}>Cancel</button>
    </div>
    );
}
}
export default IsSelected;