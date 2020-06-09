import React from 'react';
import ReactDOM from 'react-dom'
import Button from '../Buttons'
it("renders the elemenet safely", ()=> {
    const div = document.createElement('div')
    ReactDOM.render(<Button></Button>,div)
})