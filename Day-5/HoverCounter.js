import React, { Component } from 'react'
import withCounter from './withCounter'
// import withCounter from './withCounter'

 class HoverCounter extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         count :0
    //     }
    // }

    // increementCount = () => {
    //     this.setState(prevState => {
    //         return { count : prevState.count + 1}
    //     })
    // }

    render() {
        // const { count } = this.state
        const{count , increementCount} = this.props
        return (
            <div>
                <h2 onMouseOver = {this.increementCount}>{this.props.name} Hovered { count } Times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter,10)
