import React from 'react'
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom'

const PreventNav=()=>(
    <Router>
        <div>
            <Link to='/form'>Form表单</Link>
            <hr/>
            <Route path='/form' component={Form} />
        </div>
    </Router>
)

class Form extends React.Component{
    state={
        isBlocking:false
    }
    render(){
        const { isBlocking } =this.state;
        return (
            <form onSubmit={event=>{
                event.preventDefault();
                event.target.reset();
                this.setState({isBlocking:false})
            }}>
                <p>isBlocking?{isBlocking?'click the button to block nav':'Nope!'}</p>
                <input type='text' placeholder="enter something" onChange={(event)=>{
                    this.setState({isBlocking:event.target.value.length>0})
                }}/>
                <button>Submit to stop blocking!</button>

            </form>
        )
    }

}
export default PreventNav;