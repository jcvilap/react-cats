import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import routes from '../../routes/index';
import './App.css';
import Navbar from '../Navbar/Navbar';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div className="app-container">
          <Navbar/>
          {routes}
        </div>
      </ConnectedRouter>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default App;