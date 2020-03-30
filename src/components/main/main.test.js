import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const promo = {
  id: 0,
  title: ``,
  genre: ``,
  release: 0,
  rating: 0,
  description: [``],
  director: [``],
  cast: [``],
  previewSrc: ``,
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
  previewSrc: ``,
  poster: ``,
  background: ``,
}];

const onMovieTitleClick = jest.fn();

describe(`<Main/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Main
        promo={promo}
        movies={movies}
        onClick={onMovieTitleClick}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
