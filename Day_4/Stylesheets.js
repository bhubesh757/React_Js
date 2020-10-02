// import React from 'react'
// import "./myStyle.css"

// function Stylesheets() {
//     return (
//         <div>
//             <h1 className = 'primary'>Stylesheets</h1>
//         </div>
//     )
// }

// export default Stylesheets




// By using the props

import React from 'react'
import "./myStyle.css"

function Stylesheets(props) {
    let className = props.primary ? 'primary' :''
    return (
        <div>
            <h1 className = {`${className} font-xl`}>Bhubesh </h1>
        </div>
    )
}

export default Stylesheets




// in app.js use primary = {true } to print the color