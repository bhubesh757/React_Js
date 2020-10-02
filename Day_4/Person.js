import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2> 
    i am {person.name}. i am {person.age} years old
    , and my skill is {person.skill} and i am good in my skill so i can work any where
    </h2>
        </div>
    )
}

export default Person
