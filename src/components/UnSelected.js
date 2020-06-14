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
        <option>Select Operation</option>
        <option>Profit & Loss Calculator</option>
        <option>Retail Price</option>
        <option>After Tax Return</option>
        <option>Net Gross Profit (Fiscal Year)</option>
    </select> 
)
}
export default UnSelected;
