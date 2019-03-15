import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/authentication';
import './Navbar.css';

class Navbar extends Component {
  handleSignOut = () => {
    this.props.signOut();
  };

  render() {
    const { userName, isAuthenticated } = this.props;

    return (
      isAuthenticated &&
      <nav className="navbar">
        <div className="navbar-container">
          <span className="title">Cats</span>
          <ul>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/favorites" className="nav-item">Favorites</Link>
          </ul>
          <div className="sign-out-container">
            {userName && <span>Hi {userName}!</span>}
            <button className="sign-out secondary" onClick={this.handleSignOut}>sing out</button>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  userName: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = ({ cats, auth }) => ({
  userName: auth.credentials.userName,
  isAuthenticated: auth.isAuthenticated,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);