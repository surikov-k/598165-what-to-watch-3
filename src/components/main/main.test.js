import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

const movie = {
  title: ``,
  genre: ``,
  released: 0,
};
const titles = Array(20).fill(``);
const onMovieTitleClick = jest.fn();

describe(`<Main/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<Main
        movie={movie}
        titles={titles}
        onMovieTitleClick={onMovieTitleClick}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
