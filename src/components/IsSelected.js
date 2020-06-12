import React from 'react';
import Input from './Input'
import Result from './Result'

class IsSelected extends React.Component {
    render(){
    const case_input = this.props.formType
    return (
    <div id="iselected">
        <Input case_input={case_input}/>
        <Result />
    </div>
    );
}
}
export default IsSelected;