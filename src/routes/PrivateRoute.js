import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';


class PrivateRoute extends Component {
  render() {
    const { component: Component, isAuthenticated, ...otherProps } = this.props;

    return (
      <Route
        {...otherProps}
        render={
          (props) => (
            isAuthenticated ?
              <Component {...props} /> :
              <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRoute);