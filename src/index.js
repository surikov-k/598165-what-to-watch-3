import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {getMovies} from './mocks/films';

const movies = getMovies(8);
const [promo] = getMovies(1);

ReactDOM.render(<App
  movies={movies}
  promo={promo}
/>, document.getElementById(`root`)
);
