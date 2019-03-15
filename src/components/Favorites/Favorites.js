import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Favorites.css';

const options = { gutter: 10, transitionDuration: '0.2s' };

class Favorites extends Component {
  render() {
    const { favoriteCats } = this.props;

    return (
      <Masonry className="favorite-container" options={options}>
        {favoriteCats.map(cat => <img key={cat} src={cat} alt="Cat Loading..."/>)}
      </Masonry>
    );
  }
}

Favorites.propTypes = {
  favoriteCats: PropTypes.array,
};

const mapStateToProps = ({ cats }) => ({
  favoriteCats: cats.favoriteCats,
});

export default connect(mapStateToProps)(Favorites);