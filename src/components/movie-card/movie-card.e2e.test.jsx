import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MovieCard from './movie-card.jsx';

configure({adapter: new Adapter()});

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

const onMouseEnter = jest.fn();
const onClick = jest.fn();

describe(`<MovieCard/>`, () => {
  it(`call the callback with proper data when a mouse is over the card`, () => {
    const card = shallow(<MovieCard
      movie={movie}
      onClick={() => {}}
      onMouseEnter={onMouseEnter}
    />);
    card.simulate(`mouseenter`);
    expect(onMouseEnter).toHaveBeenCalledWith(movie);
  });

  it(`returns movie id when header or preview is clicked`, () => {
    const card = shallow(<MovieCard
      movie={movie}
      onClick={onClick}
      onMouseEnter={() => {}}
    />);
    const header = card.find(`.small-movie-card__title`);
    header.simulate(`click`, {preventDefault: () => {}});
    expect(onClick).toHaveBeenCalledWith(0);
  });
});
