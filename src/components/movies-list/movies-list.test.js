import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

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

describe(`<MoviesList/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer.
      create(<MoviesList
        movies={movies}
        onMouseEnter={() => {}}
        onClick={() => {}}
      />).
      toJSON();
    expect(component).toMatchSnapshot();
  });
});
