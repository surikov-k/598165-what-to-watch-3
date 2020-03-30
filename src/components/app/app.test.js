import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const promo = {
  id: 0,
  title: ``,
  genre: ``,
  release: 0,
  rating: 0,
  description: [``],
  director: [``],
  cast: [``],
  preview: ``,
  poster: ``,
  background: ``,
};
const movies = [{
  id: 0,
  title: ``,
  genre: ``,
  release: 0,
  rating: 0,
  description: [``],
  director: [``],
  cast: [``],
  preview: ``,
  poster: ``,
  background: ``,
}];
const onClick = jest.fn();

describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<App
        promo={promo}
        movies={movies}
        onClick={onClick}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
