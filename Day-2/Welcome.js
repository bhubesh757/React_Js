// import React, { Component } from 'react'

// export class Welcome extends Component {
//     render() {
//         return (
//             <div>
//                 <h1> Welcome {this.props.name} and also known as
//                  {this.props.heroName}</h1>
//             </div>
//         )
//     }
// }

// export default Welcome


// 2 nd Method 

import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        const{name , heroName} = this.props
        return (
            <div>
                <h1> Welcome {name} and also known as
                 {heroName}</h1>
            </div>
        )
    }
}

export default Welcome
