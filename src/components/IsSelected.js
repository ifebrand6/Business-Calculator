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
            remove_result: true
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
    const result = selling_price - cost_price;
    const resultOutput = this.state.remove_result ? null : <Result result={result} />
    return (
    <div id="iselected">
        <div className="col-md-12">
        <Input case_input={case_input} cost_price={cost_price} selling_price={selling_price} onChange={this.handleOnChange}/>
        </div>
        {resultOutput}
        <br/>
        <button className="btn-dark" onClick={this.props.onClick}>Cancel</button>
    </div>
    );
}
}
export default IsSelected;