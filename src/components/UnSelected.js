import React from 'react';

function UnSelected(props) {
    return (
        <div id="unselected">
        <legend>Select service</legend>
        <BusinessOperationLists {...props} />
    </div>
    )
}

function BusinessOperationLists(props) {
return(
    <select name="select" value={props.value} onChange={props.onChange}>
        <option value="">Select Operation</option>
        <option value="bad" onPointerEnter={()=>{console.log("I have been click")}}>Profit & Loss Calculator</option>
        <option value="bad">Retail Price</option>
        <option value="bad">After Tax Return</option>
        <option value="bad">Net Gross Profit (Fiscal Year)</option>
    </select> 
)
}
export default UnSelected;
