import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

const UrlParams = ()=>(
    <Router>
        <div>
            <h3>高三7班花名册</h3>
            <ul>
                <li><Link to='/Mike'>Mike</Link></li>
                <li><Link to='/Lili'>Lili</Link></li>
                <li><Link to='/Linda'>Linda</Link></li>
                <li><Link to='/Jhon'>Jhon</Link></li>
                <li><Link to='/Spider'>Spider</Link></li>
                <li><Link to='/Hanson'>Hanson</Link></li>
            </ul>

            <Route path='/:id' component={Name} />
        </div>
    </Router>
)

const Name=({match})=>(
    <h3>{match.params.id}</h3>
)

export default UrlParams;