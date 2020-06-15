import React from 'react';

function Result(props) {
    const adviseLinks = ()=>{
        
        const result = props.result
        const balanceLink = <span><a href="http://www.gettingahead.com<" target="_blank" rel="noopener noreferrer">www.gettingahead.com</a></span>
        const lossLink = <span><a href="http://www.gettingahead.com" target="_blank" rel="noopener noreferrer">www.bootsales.com</a></span>
        const profitLink = <span><a href="http://www.whattodoafteragreatsales.co" target="_blank" rel="noopener noreferrer">www.whattodoafteragreatsales.co</a></span>
        if (result > 0) {
            return profitLink
            } else if (result <= -1) {
            return lossLink
            } else  if (result === 0){
            return balanceLink
            }
    }
    const resultOutputs  = ()=>{
        const result = props.result;
        var converter = require('number-to-words');
        function removeMinus(num) {
            if (num < 0) {
                return (-1 * num)
            } else {
                return num
            }
        }
        const outputnumber = removeMinus(result)
        const resultInNum = converter.toWords(outputnumber);
        const balanceMessage = <span>you donot make any profit</span>
        const lossMessage = <span>your made a loss of {resultInNum} naira</span>
        const profitMessage = <span>you made profit {resultInNum} naira</span>

        if (result >= 1) {
            return profitMessage
            } else if (result <= -1) {
            return lossMessage
            } else  if (result === 0){
            return balanceMessage
            }
    }
    const resultOutput= resultOutputs()
    const adviseLink = adviseLinks()
    return (
        <div className="insurance-type d-flex align-items-center">
        <img src="images/tick.png" alt="#" />
        <div className="insurance-type_title">
            <div id="error_message" hidden>
                {'error_message'}   
            </div>
            <p id="result_output" hidden>
                {props.result}
            </p>
            <h6 id="betterOutput">{resultOutput}</h6>
            <p>Click on the link below to seek for more advise</p>
            <p id="advise_links">{adviseLink}</p>
        </div>
    </div>
    )
}
export default Result;