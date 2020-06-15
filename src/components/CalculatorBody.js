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
    resetCalculator = (e) =>{
        this.setState({ 
            typeOfBusinessOperation: 'Select Operation',
            remove_unselected: false,
            remove_selected: true
          });
    }
    render(){
        const unSelected = this.state.remove_unselected ? null : <UnSelected value={this.state.typeOfBusinessOperation} onChange={this.handleOnchange} />
        const selected = this.state.remove_selected ? null :  <IsSelected formType={this.state.typeOfBusinessOperation} onClick={this.resetCalculator}/>
        const headerDescriptionValuator = ()=> {
            const title = this.state.typeOfBusinessOperation
            switch (title) {
                case 'Profit & Loss Calculator':
                    return 'Evalute your business gains' 
                case 'Retail Price':
                    return 'Get the minimuim retail price for your product'
                case 'After Tax Return':
                    return 'Calculate your profit after tax deduction'
                case 'Net Gross Profit (Fiscal Year)':
                    return 'Calculate the profit for the year'
                default:
                    return ''
                }
        }
        const headerValuator = ()=>{
            const title = this.state.typeOfBusinessOperation;
            if (title === 'Select Operation') {
                return 'Business Calculator'
            } else {
                return title
            }
        }
    return(
        <div id="cal_body">
            <div className="row">
                <div className="col-md-12">
                    <div className="center-title">
                        <h2 id="App">{headerValuator()}</h2>
                        <p>{headerDescriptionValuator()}</p>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6">
            <div className="content-box content-box1">
            {unSelected}
            {selected}
            </div>
            </div>
            <div className="col-md-6">
            <SideBar />
            </div>
            </div>
        </div>
    )
}
}
export default CalculatorBody;