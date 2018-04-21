import React from 'react'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'


const routes = [
    { path: '/home',
      exact: true,
      sidebar: () => <div>home sidebar!</div>,
      main: () => <h2>Home Page!</h2>
    },
    { path: '/about',
      sidebar: () => <div>about sidebar!</div>,
      main: () => <h2>About Page!</h2>
    },
    { path: '/concat',
      sidebar: () => <div>concat sidebar!</div>,
      main: () => <h2>Concat Page!</h2>
    }
  ]
const SideBar=()=>(
    <Router>
      <div style={{display:'flex'}}>
        <div>
          <ul>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/concat'>Concat</Link></li>
          </ul>

          {
            routes.map((route,i)=>(
              <Route path={route.path} component={route.sidebar} key={i} exact={route.exact} />
            ))
          }
        </div>

        <div>
        {
          routes.map((route,i)=>(
            <Route path={route.path} component={route.main} key={i} exact={route.exact} />
          ))
        }
        </div>
      </div>
    </Router>
)

export default SideBar;