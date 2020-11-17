import React,{useState , useEffect} from 'react'
import axios from 'axios'
function DataFetching() {
    const [posts, setpost] = useState({})
    const [id, setid] = useState(1)
    const [setidfrombuttonClick, setsetidfrombuttonClick] = useState(1)

    const handleClick = () => {
        setidfrombuttonClick(id)
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res)
            setpost(res.data)
        })
        .catch(err => {
            console.log(err);
        })
        // return () => {
        //     cleanup
        // }
    },[setsetidfrombuttonClick])
    return (
        <div>
            <input type = 'text' value = {id} onChange = {e => setid(e.target.value)}></input>
            <button type = 'button' onClick = {handleClick} > Fetch post</button>
            <div>
                {posts.title}
            </div>
            {/* <ul>
                {
                    posts.map(post => <li
                        key = {post.id}>
                   {post.title} </li>)
                }
            </ul> */}

        </div>
    )
}

export default DataFetching
