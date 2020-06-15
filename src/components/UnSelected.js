import React from 'react';

function UnSelected(props) {
    return (
        <div id="unselected">
        <BusinessOperationLists {...props} />
    </div>
    )
}

function BusinessOperationLists(props) {
return(
    <div className="col-md-12">
    <div className="form-group">
    <select name="select" value={props.value} onChange={props.onChange} className="form-control" >
        <option className="form-control">Select Operation</option>
        <option className="form-control">Profit & Loss Calculator</option>
        <option className="form-control">Retail Price</option>
        <option className="form-control">After Tax Return</option>
        <option className="form-control">Net Gross Profit (Fiscal Year)</option>
    </select> 
</div>
</div>
)
}
export default UnSelected;
