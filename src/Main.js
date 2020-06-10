import React from 'react';

function Layout(props) {
    const case_input = 'case_input'
    return(
        <div id="main" >
        <h1>Business calculator v.1</h1>
         <div id="sidebar">{'ads from ajax '}</div>
            <section id="humanitize">{'humanize images base on day'}</section>
            <div id="cal_body">
                <div id="unselected">
                    <legend>Select service</legend>
                    <select name="" id="">
                        <option value="">{'map count array of options'}</option>
                    </select>
                </div>
                <div id="iselected">
                    <div id={case_input}>
                        <form action="">
                            <input type="text" defaultValue={'d'}/>
                            <br/>
                        </form>
                        <div id="error_message">
                            {'error_message'}
                        </div>
                        <div id="result">
                            <p id="result_output">
                                {'result output'}
                            </p>
                            <div id="advise_links">
                                {'advise links'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Layout;