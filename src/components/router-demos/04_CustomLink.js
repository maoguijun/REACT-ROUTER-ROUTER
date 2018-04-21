import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const CustomLink=()=>(
    <Router>
        <div>
            <Menu activeOnlyWhenExact={true} to='/fish' label="fish" />
            <Menu to='/tomato' label="tomato"/>
            <hr />
            <Route path="/fish" component={Fish}  />
            <Route path="/tomato" component={Tomato} />
        </div>

    </Router>
)
const Menu=({label,to,activeOnlyWhenExact})=>(
    <Route path={to} exact={activeOnlyWhenExact}  children={({match})=>(
        <div className={match?'active':''}>{match?'>':''}<Link to={to}>{label}</Link></div>
    )} />
)

const Fish=()=>(
    <h3>Fish Delicious!</h3>
)

const Tomato =()=>(
    <h3>Tomato Awful!</h3>
)
export default CustomLink;