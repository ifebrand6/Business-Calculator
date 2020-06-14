import React from 'react'
import { Component } from 'react'
import Form from './form'

// class Test extends Component {
//     state = { 
//         element: ''
//      }
//      handleOnchange = (e)=>{
//          this.setState({ element: e.target.value });
//      }
//     render() { 
//         const test = this.state.element
//         return ( 
//             <div>
//                <Form test={test} onChange={this.handleOnchange} />
//             </div>
//          );
//     }
// }
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            element: ''
         }
    }
    handleOnchange = (e)=>{
        this.setState({ element: e.target.value });
    }
    render() { 
        const test = this.state.element
        return ( 
            <div>
            <Form test={test} onChange={this.handleOnchange} />
            </div>
         );
    }
}
 
// export default Test;
 
export default Test;