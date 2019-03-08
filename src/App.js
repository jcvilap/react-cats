import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './components/Login';
import Cats from './components/Cats';
import Detail from './components/CatDetails';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cats/cat1">About</Link>
              </li>
            </ul>
          </nav>
          <Route path="/cats/:id" component={Detail}/>
          <Route path="/login" component={Login}/>
          <Route path="/cats" component={Cats}/>
        </div>
      </Router>
    );
  }
}

export default App;
