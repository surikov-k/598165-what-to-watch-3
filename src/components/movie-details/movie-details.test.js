import React from 'react';
import renderer from 'react-test-renderer';

import MovieDetails from './movie-details';

const movie = {
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

const simular = [
  {
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
  },
];

describe(`<MovieDetails />`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<MovieDetails
        movie={movie}
        simular={simular}
        onClick={() => {}}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
