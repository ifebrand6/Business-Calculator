import React from 'react';

function Result(props) {
    const ResultValuator = ()=> {
        switch (props.case_input) {
            case 'Profit & Loss Calculator':
                return gainResult 
            case 'Retail Price':
                return retailPriceResult
            case 'After Tax Return':
                return taxReturnResult
            case 'Net Gross Profit (Fiscal Year)':
                return notAvailable
            default:
                return null
            }
    }

    const gainCalculator = {
        renderAdviseLinks:  function  (){
        
            const result = props.result
            const balanceLink = <span><a href="http://www.gettingahead.com<" target="_blank" rel="noopener noreferrer">www.gettingahead.com</a></span>
            const lossLink = <span><a href="http://www.gettingahead.com" target="_blank" rel="noopener noreferrer">www.bootsales.com</a></span>
            const profitLink = <span><a href="http://www.whattodoafteragreatsales.com" target="_blank" rel="noopener noreferrer">www.whattodoafteragreatsales.com</a></span>

            if (result > 0) {
                return profitLink
                } else if (result <= -1) {
                return lossLink
                } else  if (result === 0){
                return balanceLink
                }
        },
        renderResult:  function(){
            const result = props.result;
            var converter = require('number-to-words');

            function removeMinusFromOutput(gainResult) {
                if (gainResult < 0) {
                    return (-1 * gainResult)
                } else {
                    return gainResult
                }
            }
            const resultInWords = converter.toWords(removeMinusFromOutput(result));
            const balanceMessage = <span>you donot make any profit</span>
            const lossMessage = <span>your made a loss of {resultInWords} naira</span>
            const profitMessage = <span>you made profit {resultInWords} naira</span>

            if (result >= 1) {
                return profitMessage
                } else if (result <= -1) {
                return lossMessage
                } else  if (result === 0){
                return balanceMessage
                }
        }

    }
 
    const gainResult =  <div className="insurance-type d-flex align-items-center">
    <img src="images/tick.png" alt="#" />
    <div className="insurance-type_title">
        <div id="error_message" hidden>
            {'error_message'}   
        </div>
        <p id="result_output" hidden>
            {props.result}
        </p>
        <h6 id="betterOutput">{gainCalculator.renderResult()}</h6>
        <p>Click on the link below to seek for more advise</p>
        <p id="advise_links">{gainCalculator.renderAdviseLinks()}</p>
    </div>
</div>

const retailPriceResult = <div>
    <p id="result_output">
    {props.retailResult}
    </p>
</div>

const taxReturnResult = <div>
    <p id="result_output">
        {props.taxReturnResult}
    </p>
</div>

const notAvailable = <div>not available</div>


   
    return (
        <div>
            {ResultValuator()}
        </div>
    )
}
export default Result;