import React from 'react';
import SideBar from './SideBar'
import HumainitzeHeader from './HumainitzeHeader'
import IsSelected from './IsSelected'
import UnSelected from './UnSelected'


class CalculatorBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typeOfBusinessOperation: 'good'
        }
    }
    handleOnchange = (e) => {
        this.setState({ typeOfBusinessOperation: e.target.value });
        console.log(this.state.typeOfBusinessOperation)
    }
    render(){
    return(
        <div id="cal_body">
            <SideBar />
            <HumainitzeHeader />
            <UnSelected value={this.state.typeOfBusinessOperation} onChange={this.handleOnchange}/>
            <IsSelected />
        </div>
    )
}
}
export default CalculatorBody;