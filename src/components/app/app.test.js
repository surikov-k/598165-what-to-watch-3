import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';

const movie = {
  title: ``,
  genre: ``,
  released: 0,
};
const titles = Array(20).fill(``);
const onMovieTitleClick = jest.fn();

describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const component = renderer
      .create(<App
        movie={movie}
        titles={titles}
        onMovieTitleClick={onMovieTitleClick}
      />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
