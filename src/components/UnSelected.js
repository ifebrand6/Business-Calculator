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
        <select name="select" value={props.value} onChange={props.handler}>
            <option value="good">good</option>
            <option value="bad">bad</option>
        </select>
    )
}
export default UnSelected;
