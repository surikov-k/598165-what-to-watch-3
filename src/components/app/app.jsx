import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';
import {movieType} from '../../types';

const App = (props) => {
  const {
    movies, promo,
  } = props;
  return (
    <Main
      movies={movies}
      promo={promo}
      onMovieTitleClick={() => {}}
    />
  );
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(movieType)).isRequired,
  promo: PropTypes.shape(movieType).isRequired,
};

export default App;
