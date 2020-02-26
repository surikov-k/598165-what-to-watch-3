import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});


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
  it(`fires cb when movie title is clicked`, () => {
    const component = mount(<Main
      promo={promo}
      movies={movies}
      onMovieTitleClick={onMovieTitleClick}
    />);

    const titleLinks = component.find(`.small-movie-card__link`);
    titleLinks.forEach((link) => link.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(titleLinks.length);
  });
});
