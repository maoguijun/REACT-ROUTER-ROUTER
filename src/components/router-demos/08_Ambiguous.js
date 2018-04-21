import React from 'react'
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom'

const Ambiguous=()=>(
    <Router>
        <div>
            <ul>
                <li><Link to='/about'>About(static)</Link></li>
                <li><Link to='/company'>Company(static)</Link></li>
                <li><Link to='/kim'>Kim(dynamic)</Link></li>
                <li><Link to='/chris'>Chris(dynamic)</Link></li>
            </ul>

            <Switch>
                <Route path="/about" component={About} />
                <Route path="/company" component={Company} />
                <Route path="/:user" component={User} />
            </Switch>
        </div>
    </Router>
)

const About=()=>(
    <p>About Page!</p>
)

const Company=()=>(
    <p>Company Page!</p>
)

const User=({match})=>(
    <p>User:{match.params.user}</p>
)
export default Ambiguous;