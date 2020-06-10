import React from 'react';
import SideBar from './SideBar'
import HumainitzeHeader from './HumainitzeHeader'
import UnSelected from './UnSelected'
import IsSelected from './IsSelected'


function CalculatorBody(props) {
    return(
        <div id="cal_body">
            <SideBar />
            <HumainitzeHeader />
            <UnSelected />
            <IsSelected />
        </div>
    )
}
export default CalculatorBody;