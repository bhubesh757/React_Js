import React ,{useState , useEffect} from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTitleOne() {

    const [count, setcount] = useState(0)

   useDocumentTitle(count)
    return (
        <div>
            <button onClick = { () => setcount (count + 1)}>Count  - {count} </button>
        </div>
    )
}

export default DocTitleOne
