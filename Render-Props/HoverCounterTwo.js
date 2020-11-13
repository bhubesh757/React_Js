import React, { Component } from 'react'

export class HoverCounterTwo extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count : 0
//         }
//     }

//    increementCount = () => {
//        this.setState( prevState => {
//            return {count : prevState.count + 1}
//        })
//    }
    
    render() {
        // const {count} = this.state
        const {count , increementCount} = this.props
        return (
            <h2 onMouseOver = {increementCount}>
                Hovered {count} Times
            </h2>
        )
    }
}

export default HoverCounterTwo


// what i did is removed this keyword from the h2 tag before the increement count