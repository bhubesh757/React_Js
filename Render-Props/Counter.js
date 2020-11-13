import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increementCount = () =>{
        this.setState(prevState => {
            return {count : prevState.count + 1}
        })
    }
    render() {
        return (
            <div>
                {this.props.render(this.state.count , this.increementCount)}
            </div>
        )
    }
}

export default Counter



// just i commented the rconst