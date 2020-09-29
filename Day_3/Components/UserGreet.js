import React, { Component } from 'react'

 class UserGreet extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {

// short Circuit operator
        return this.state.isLoggedIn && <div> Welcome Bhubesh</div>

    // return  this.state.isLoggedIn ? (
    //         <div> Welcome Bhubesh</div>
    //     ):(                                                                        // Ternary conditional operator
    //     <div> Welcome Guest</div>
    // )
        }  

    //     let message 
    //     if(this.state.isLoggedIn){
    //         message = <div> Welcome Bhubesh</div>
    //     }else{                                                             //Elemeent Variables
    //         message = <div> Welcome Guest</div>
    //     }
    //     return < div>{message}</div>
    // }
    //     if (this.state.isLoggedIn){
    //         return( 
    //             <div>
    //                 Welcome Bhubesh
    //             </div>
    //         )
        // }
    //     else{
    //         return
    //         (
    //             <div>
    //                 Welcome Guest
    //             </div>
    //         )
        // }
        // return (
        //     <div> 
        //         <div>
        //         Welcome Bhubesh
        //         </div>
        //         <div> Welcome Guests</div>
        //     </div>
            
        // )
}

export default UserGreet
