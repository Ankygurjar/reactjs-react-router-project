import React, {Component} from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import '../App.css'

class Nav extends Component{
  render(){
    return(
      <Router>
        <div className="container">
          <ul className="topLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
          <div className="searchBar">
            <form>
              <input type="text" placeholder="Your Query" className="inputSearch" />
              <input type="submit" className="buttonSearch" value="Submit"/>
            </form>
          </div>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact}/>
      </Router>
    )
  }
}

export default Nav
