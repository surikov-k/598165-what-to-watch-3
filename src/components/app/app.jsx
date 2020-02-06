import React from 'react';
import Main from '../main/main.jsx';

const App = (props) => {
  const {
    // eslint-disable-next-line react/prop-types
    movie,
  } = props;
  return (
    <Main
      movie={movie}
    />
  );
};

export default App;
