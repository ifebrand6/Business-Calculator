import React from 'react';
import Input from './Input'
import Result from './Result'

function IsSelected(props) {
    const case_input = 'case_input'
    return (
    <div id="iselected">
        <Input case_input={case_input}/>
        <Result />
    </div>
    );
}
export default IsSelected;