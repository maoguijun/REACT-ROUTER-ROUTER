import React from 'react'
import {BrowserRouter as Router,Route,Link } from 'react-router-dom'

const RouterBasic=()=>(
  <Router>
    <div>
      <ul>
        <li><Link to='/'>首页</Link></li>
        <li><Link to='/mgj'>毛贵军</Link></li>
        <li><Link to='/zhh'>周红红</Link></li>
      </ul>
      <hr />

      <Route exact path='/' component={Home} />
      <Route  path='/mgj' component={Mgj} />
      <Route  path='/zhh' component={Zhh} />
    </div>
  </Router>
)

const Home=()=><h3>首页</h3>
const Zhh=()=><h3>徒弟</h3>
const Mgj=({match})=>(
  <div>
    <h3>师父</h3>
    <ul>
      <li><Link to={`${match.url}/毛贵军`} >姓名</Link></li>
      <li><Link to={`${match.url}/男`} >性别</Link></li>
      <li><Link to={`${match.url}/前端工程师`} >工作</Link></li>
    </ul>
    <hr />
    
    <Route path={`${match.url}/:id`} component={Content} />
  </div>
)
const Content=({match})=>(
  <h3>{match.params.id}</h3>
)
export default RouterBasic;