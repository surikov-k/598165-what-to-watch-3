import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';

const movie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  released: 2014,
};

ReactDOM.render(<App
  movie={movie}
/>,
document.getElementById(`root`)
);
