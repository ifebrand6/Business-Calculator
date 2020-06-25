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
            profit_margin: ''
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
    const result = selling_price - cost_price;
    const retailResult = ((((parseFloat(production_cost) + parseFloat(over_head_cost) + parseFloat(admin_expenses))/parseFloat(num_of_unit_product)) + parseFloat(profit_margin)) * 2)
    console.log(retailResult)

    const resultOutput = this.state.remove_result ? null : <Result result={result} retailResult={retailResult} case_input={case_input} />
    return (
    <div id="iselected">
        <div className="col-md-12">
        <Input case_input={case_input} cost_price={cost_price} selling_price={selling_price} onChange={this.handleOnChange} over_head_cost={over_head_cost} admin_expenses={admin_expenses} production_cost={production_cost} num_of_unit_product={num_of_unit_product} profit_margin={profit_margin}/>
        </div>
        {resultOutput}
        <br/>
        <button className="btn-dark" onClick={this.props.onClick}>Cancel</button>
    </div>
    );
}
}
export default IsSelected;