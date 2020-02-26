import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';

import MovieCard from '../movie-card/movie-card.jsx';

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovie: null,
    };
    this.movies = this.props.movies;
    this.onMovieTitleClick = this.props.onMovieTitleClick;
    this._mouseEnterHandler = this._mouseEnterHandler.bind(this);
  }
  render() {
    return (
      <Fragment>
        <div className="catalog__movies-list">
          {
            this.movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onMovieTitleClick={this.onMovieTitleClick}
                  onMouseEnter={this._mouseEnterHandler}
                />
              );
            })
          }
        </div>

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </Fragment>
    );
  }
  _mouseEnterHandler(movie) {
    this.setState((state) => {
      Object.assign(state, {activeMovie: movie});
    });
  }
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
};
export default MoviesList;
