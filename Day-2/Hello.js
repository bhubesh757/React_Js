import React from 'react'


const Hello = () => {
    // return(
    //     <div>
    //         <p>Hello Bhubesh</p>
    //     </div>
    // )
    return React.createElement('div', null ,
    {id:'hey' , className : 'class'},
    React.createElement('h1' ,null , 'hello Bhubesh'))
}

export default Hello