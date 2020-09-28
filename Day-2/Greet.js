// import React from 'react'

// const Greet =  props => 
// {
//  console.log(props);
// return (<div>
//     <h1> 
//         Hello {props.name} and also called as {props.heroName}
//     </h1>
//     {props.children}
    
//       </div>
// )
// }


// export default Greet

// Destrcting the props and the functional components
import React from 'react'

const Greet =  ({ name  , heroName }) => 
{
return (<div>
    <h1> 
        Hello {name} and also called as {heroName}
    </h1>
      </div>
)
}


export default Greet


// import React from 'react'

// const Greet =  props => 
// {
//     const {name , heroName} = props
// return (<div>
//     <h1> 
//         Hello {name} and also called as {heroName}
//     </h1>
//       </div>
// )
// }


// export default Greet

// 3rd method