import React from 'react'

function Columns() {

    let items = []
    return (
        <React.Fragment>
            {/* {

                items.map( items =>(
                    <React.Fragment key = {items.id}>
                        <h1>
                            Title
                        </h1>
                        <p>
                            {items.title}
                        </p>
                        </React.Fragment>
                ))
            } */}
            <td>
                Name
            </td>
            <td>
                Bhubesh
            </td>
        </React.Fragment>
    )
}

export default Columns
