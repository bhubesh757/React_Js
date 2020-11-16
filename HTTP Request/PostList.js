import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts : [],
             errorMsg : '' 
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts : response.data})
        })
        .catch(error => {
            console.log(error);
            this.setState({errorMsg :'Error Retreiving Data'})
        })
    }
    
    render() {
        const{posts} = this.state
        return (
            <div>
                List Of Posts
                {
                    posts.length ?
                    posts.map(post => <div key = {post.id}> {post.title}</div>):
                    null
                }
            </div>
        )
    }
}

export default PostList


// Get Request fromm the Api Json PlaceHolder