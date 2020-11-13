import React, { Component } from 'react'
import withCounter from './components/Day-5/withCounter'

 class ClickCounter extends Component {

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         count :0
    //     }
    // }

    // increementCount = () => {
    //     this.setState(prevState => {
    //         return { count : prevState.count + 1}
    //     })2
    // }
    render() {

        // const { count } = this.state;
        const{count , increementCount} = this.props

        return (
            <div>
                <button onClick = {increementCount}> {this.props.name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)
