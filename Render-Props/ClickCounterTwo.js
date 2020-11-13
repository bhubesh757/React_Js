import React, { Component } from 'react'

export class ClickCounterTwo extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          count:0
    //     }
    // }
    // increementCount = () =>{
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }
    
    render() {
        const {count , increementCount} = this.props
        return (
           <button onClick = {increementCount}>
               Clicked {count} times
           </button>
        )
    }
}

export default ClickCounterTwo



// Render Props