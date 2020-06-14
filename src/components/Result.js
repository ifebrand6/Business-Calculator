import React from 'react';
import anchorme from "anchorme";

function Result(props) {
    const adviseLinks = ()=>{
        
        const result = props.result
        const balanceLink = <span>www.gettingahead.com</span>
        const lossLink = <span>www.bootsales.com"</span>
        const profitLink = <span>www.whattodoafteragreatsales.com</span>
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
    let ssd = anchorme('dfdd.com')
    // console.log(typeof(ssd))
    return (
        <div id="result">
        <div id="error_message" hidden>
                {'error_message'}   
            </div>
            <p id="result_output" hidden>
                {props.result}
            </p>
            <p id="betterOutput">
                {resultOutput}
            </p>
            <div id="advise_links">
            {adviseLink}
            <p>{ssd}</p>
            </div>
        </div>
    )
}
export default Result;