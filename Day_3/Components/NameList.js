import React from 'react'

function NameList() {
    const persons = [
        {
            id : 15,
            name : 'Rock',
            age : 17,
            skill : "Vue js"
        },
        {
            id: 85,
            name : 'Fickru',
            age : 15,
            skill : 'react js'
        },
        {
            id: 45,
            name : 'dani',
            age : 19,
            skill : 'Node js'
        }
    ]
    const PersonList =  persons.map(person => (<h2> 
    i am {person.name}. i am {person.age} years old
    , My skill is {person.skill}
    </h2>))
    return (
        <div>
            {
               PersonList
            }
            
        </div>
    )
}

export default NameList


// 2nd method

// import React from 'react'

// function NameList() {
//     const names = ['rock' , 'kavya' , 'dicken']
      
//     return (
//         <div>
//             {
//                names.map(name => <h2> {name}</h2>)
//             }
            
//         </div>
//     )
// }

// export default NameList


// // 3rd method is 



// import React from 'react'

// function NameList() {
//     const names = ['rock' , 'kavya' , 'dicken']
      
//     return (
//         <div>   
//              <h2>{names[0]}</h2>
//              <h2>{names[1]}</h2>
//              <h2>{names[2]}</h2>
            
//         </div>
//     )
// }

// export default NameList
