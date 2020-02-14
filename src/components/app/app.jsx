import React from 'react';
import PropTypes from 'prop-types';

import Main from '../main/main.jsx';

const App = (props) => {
  const {
    movie,
    titles,
  } = props;
  return (
    <Main
      movie={movie}
      titles={titles}
      onMovieTitleClick={(e) => e.preventDefault()}
    />
  );
};

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    released: PropTypes.number,
  }).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
