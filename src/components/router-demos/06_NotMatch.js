import React from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect} from 'react-router-dom'

const NotMatch=()=>(
    <Router>
        <div>
            <ul>
                <li><Link to="/">Introduction</Link></li>
                <li><Link to="/old/match">Old Match,to be redirected</Link></li>
                <li><Link to="/will/match">Will Match</Link></li>
                <li><Link to="/will/not/match">Will Not Match</Link></li>
                <li><Link to="/also/will/not/match">Also Will Not Match</Link></li>
            </ul>
            
            <Switch>
                <Route exact path="/" component={Introduction}/>
                <Redirect from="/old/match" to="/will/match" />
                <Route path="/will/match" component={Match} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    </Router>
)

const Introduction=()=>(
    <p>一个Switch组件只渲染第一个匹配成功的组件。</p>
);

const Match=()=>(
    <p>Match Success!</p>
);

const NoMatch=({location})=>(
    <p>There is no match for {location.pathname}</p>
);
export default NotMatch;