import React from 'react';
import renderer from 'react-test-renderer';

import MovieCard from './movie-card.jsx';

const movie = {
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

describe(`<MovieCard/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer.
      create(<MovieCard
        movie={movie}
        onMouseEnter={() => {}}
        onMovieTitleClick={() => {}}
      />).
      toJSON();

    expect(component).toMatchSnapshot();
  });
});
