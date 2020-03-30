import React from 'react';

import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import {movieType} from '../../types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MovieDetails from '../movie-details/movie-details.jsx';


class App extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      activeMovie: -1,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-movie">
            <MovieDetails
              movie={this.props.movies[0]}
              simular={this.props.movies.slice(0, 4)}
              onClick={(id) => this.setState({activeMovie: id})}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      movies,
      promo,
    } = this.props;

    const {activeMovie} = this.state;

    if (activeMovie === -1) {
      return (
        <Main
          movies={movies}
          promo={promo}
          onClick={(id) => this.setState({activeMovie: id})}
        />
      );
    } else {
      return (
        <MovieDetails
          movie={movies[activeMovie]}
          simular={movies.slice(0, 4)}
          onClick={(id) => this.setState({activeMovie: id})}
        />
      );
    }
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  promo: PropTypes.shape(movieType).isRequired,
};

export default App;
