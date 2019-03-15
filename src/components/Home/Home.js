import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRandomCat, toggleFavorite } from '../../actions/cats';
import './Home.css';

class Home extends Component {
  handleRefreshClick = () => {
    this.props.fetchRandomCat();
  };
  handleFavoriteClick = () => {
    this.props.addFavorite(this.props.randomCat);
  };

  componentDidMount() {
    this.props.fetchRandomCat();
  }

  render() {
    const { randomCat, favoriteCats } = this.props;
    const isFavorite = favoriteCats.includes(randomCat);

    return (
      <div className="home-container">
        <h1>
          <span className="text">Everyone needs a daily dose of cats in their life...</span>
          <span
            className="action-icon button primary refresh noselect"
            title="Refresh photo"
            onClick={this.handleRefreshClick}
          >
              <i className="material-icons">refresh</i>
              <span>refresh</span>
            </span>
          <span
            className="action-icon button primary noselect"
            title={isFavorite ? 'Add to favorites' : 'Remove from favorites'}
            onClick={this.handleFavoriteClick}
          >
              <i className="material-icons">{isFavorite ? 'star' : 'star_border'}</i>
              <span>{isFavorite ? 'unfavorite' : 'favorite'}</span>
            </span>
        </h1>
        <img src={randomCat} alt="Cat Loading..."/>
      </div>
    );
  }
}

Home.propTypes = {
  randomCat: PropTypes.string,
  favoriteCats: PropTypes.array,
};

const mapStateToProps = ({ cats }) => ({
  randomCat: cats.randomCat,
  favoriteCats: cats.favoriteCats,
});

const mapDispatchToProps = dispatch => ({
  fetchRandomCat: () => dispatch(fetchRandomCat()),
  addFavorite: (cat) => dispatch(toggleFavorite(cat)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);