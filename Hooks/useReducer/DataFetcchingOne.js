import React ,{useState , useEffect} from 'react'
import axios from ' axios'

function DataFetcchingOne() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setloading(false)
            setpost(response.data)
            seterror('')
        })
        .catch(error => {
            setloading('')
            setpost({})
            seterror('something went wrong')
        })
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>

            { loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetcchingOne
