import React, { Component } from 'react'

 class User extends Component {
    render() {
        return (
            <div>
                {/* {this.props.name()} */}
                {this.props.render()}
            </div>
        )
    }
}

export default User


// Render props

// the term render prop refers to a technique for sharing a code between the react componenets using a prop
// whose value is a Function()


// we can also pass render instead of name in the above code

// It stills prints in the console;

// this is passesd in app.js

{/* <User name = 'Bhubesh'/> */}
    {/* <User name = {()=> 'Bhubesh'} /> */}
    {/* <User render = {() => "bhubesh"} /> */}