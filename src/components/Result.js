import React from 'react';

function Result(props) {
    return (
        <div id="result">
        <div id="error_message">
                {'error_message'}
            </div>
            <p id="result_output">
                {props.result}
            </p>
            <div id="advise_links">
                {'advise links'}
            </div>
        </div>
    )
}
export default Result;