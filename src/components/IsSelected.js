import React from 'react';
import Input from './Input'
import Result from './Result'

class IsSelected extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cost_price: 0,
            selling_price: 0,
            result: 0 , //remove this
            error_message: '' 
        }
    }
    handleOnChange = (e)=> {
        const input = e.target.value;
        this.setState({     
            [e.target.name]: input
        });
    }
   
    render(){
    const case_input = this.props.formType;
    const cost_price = this.state.cost_price;
    const selling_price = this.state.selling_price;
    const result = selling_price - cost_price;
    return (
    <div id="iselected">
        <Input case_input={case_input} cost_price={cost_price} selling_price={selling_price} onChange={this.handleOnChange}/>
        <Result result={result} />
    </div>
    );
}
}
export default IsSelected;