import React from 'react';
import SideBar from './SideBar'
import IsSelected from './IsSelected'
import UnSelected from './UnSelected'


class CalculatorBody extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typeOfBusinessOperation: 'Select Operation',
            remove_unselected: false,
            remove_selected: true
        }
    }
    handleOnchange = (e) => {
        this.setState({ 
            typeOfBusinessOperation: e.target.value,
            remove_unselected: true,
            remove_selected: false
        });
    }
    // handleSelectedOption = (e) => {
    //     console.log("attempted removing unselected")
    //     this.setState({ remove_unselected: true });
    //     console.log("attempted removing unselected")
    // }
    render(){
        const unSelected = this.state.remove_unselected ? null : <UnSelected value={this.state.typeOfBusinessOperation} onChange={this.handleOnchange} />
        const selected = this.state.remove_selected ? null :  <IsSelected formType={this.state.typeOfBusinessOperation}/>
    return(
        <div id="cal_body">
            {unSelected}
            {selected}
            <SideBar />
        </div>
    )
}
}
export default CalculatorBody;