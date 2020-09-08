import React, { Component } from 'react'


    export class counter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                count : 0
                 
            }
        }
            Increementcount = ()=>{
                this.setState({count:this.state.count + 1});
        };
    render() {
        let {count} = this.state;
        return (
            <div>
                <button onMouseEnter = {this.Increementcount}> increemented to {count} </button>
            </div>
        )
    }
}

export default counter
