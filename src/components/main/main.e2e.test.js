import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});


const movie = {
  title: ``,
  genre: ``,
  released: 0,
};
const titles = Array(20).fill(``);
const onMovieTitleClick = jest.fn();

describe(`<Main/>`, () => {
  it(`fires cb when movie title is clicked`, () => {
    const component = shallow(<Main
      movie={movie}
      titles={titles}
      onMovieTitleClick={onMovieTitleClick}
    />);

    const titleLinks = component.find(`.small-movie-card__link`);
    titleLinks.forEach((link) => link.simulate(`click`));

    expect(onMovieTitleClick).toHaveBeenCalledTimes(20);
  });
});
