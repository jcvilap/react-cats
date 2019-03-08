import React, { Component } from 'react';

class Details extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>Hello from details {id}</div>
    );
  }
}

export default Details;
