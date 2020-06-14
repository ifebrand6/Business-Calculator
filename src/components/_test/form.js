import React from 'react'

function Form(props) {
    return(
        <div>
            <Input {...props}/>
        </div>
    )
}
function Input(props) {
    return(
        <section>
            <input type="text" onChange={props.onChange}/>
            <p>{props.test}</p>
        </section>
    )
}
export default Form