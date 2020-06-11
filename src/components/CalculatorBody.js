import React from 'react';
import SideBar from './SideBar'
import HumainitzeHeader from './HumainitzeHeader'
import IsSelected from './IsSelected'
import UnSelected from './UnSelected';


class CalculatorBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typeOfBusinessOperation: 'good',
            hider: (function() {
                if (this.state.typeOfBusinessOperation !== 'good') {
                    return 'hidden'
                } else {
                    return
                }
            })
                
            }
    }
    handleOnchange = (e) => {
        this.setState({ typeOfBusinessOperation: e.target.value });
    }
    handleClick = (e) => {
        if (e.target.value !== 'good') {
            //unmount Unselected
            //mount selected
        }
    }
    render(){
        const selectedOption = this.state.typeOfBusinessOperation;
    return(
        <div id="cal_body">
            <SideBar />
            <HumainitzeHeader />
            <UnSelected selectedOption={selectedOption} onChange={this.handleOnchange} />
            <IsSelected />
        </div>
    )
}
}

export default CalculatorBody;