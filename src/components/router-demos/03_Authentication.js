import React, { PropTypes } from 'react'
import {BrowserRouter as Router,Route,Link,Redirect,withRouter} from 'react-router-dom'

const Authentication =()=>(
    <Router>
        <div>
            <Header />
            <ul>
                <li><Link to='/public'>Public Page</Link></li>
                <li><Link to='/protected'>protected Page</Link></li>
            </ul>
            
            <Route path='/public' component={Public} />
            <Route path='/login' component={Login} />
            <PrivateRoute path='/protected' component={Protected} />
        </div>
    </Router>
)

const Public=()=>(
    <p>This is a public page. You can see without logined!</p>
)
const Protected=()=>(
    <p>This is a protected pagr. You must login in and see this page.</p>
)

const confirm={
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true;
        setTimeout(cb,100);
    },
    signout(cb){
        this.isAuthenticated=false;
        setTimeout(cb,100);
    }
}

const Header=withRouter(({history})=>(
    confirm.isAuthenticated?(
        <p>Welcome!<button onClick={()=>{
            confirm.signout(()=>history.push('/'))
        }}>sign out</button></p>
    ):(
        <p>You have not logined!</p>
    )
))
const PrivateRoute=({component:Component,...rest})=>(
    <Route {...rest} render={props=>
        confirm.isAuthenticated?(
            <Component {...props} />
        ):(
            <Redirect to={{pathname:'/login',state:{from:props.location}}} />
        )

    } />
)

class Login extends React.Component{
    state={
        flag:false
    }
    login=()=>{
        confirm.authenticate(()=>{
            this.setState({flag:true})
        })
    }
    render(){
        const {from}=this.props.location.state||{from:{pathname:'/'}};
        const {flag}=this.state;
        if(flag){
            return (
                <Redirect to={from} />
            )
        }
        return (
            <div>
                <p>You must login in to watch the page at {from.pathname}.</p>
                <button onClick={this.login}>login in</button>
            </div>
        )
    }
}
export default Authentication;