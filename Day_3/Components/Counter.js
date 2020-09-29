import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }

    // increement(){
    //     this.state.count = this.state.count + 1
    //     console.log(this.state.count);
    // }
    increement(){
        // this.setState({
        //     count : this.state.count + 1
        // } , 
        // () => { console.log('Callback value' ,this.state.count)
        //         }
        // )
        this.setState((prevState ) => ({
            count: prevState.count + 1
        })))
        console.log(this.state.count);
    }

    increementfive(){
        this.increement()
        this.increement()
        this.increement()
        this.increement()
        this.increement()
    }
    
    render() {
        return (
            <div>
               <div> Count - {this.state.count}</div>
               <button onClick = {() => this.increementfive()}> Increement</button>
               </div>
            
        )
    }
}

export default Counter
