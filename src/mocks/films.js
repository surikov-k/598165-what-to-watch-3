const MOVIE_EPOCH_BEGAN = `1900-1-1`;

const TITLES = [
  `Fantastic Beasts: The Crimes of Grindelwald`,
  `Bohemian Rhapsody`,
  `Macbeth`,
  `Aviator`,
  `We need to talk about Kevin`,
  `What We Do in the Shadows`,
  `Revenant`,
  `Johnny English`,
  `Shutter Island`,
  `Pulp Fiction`,
  `No Country for Old Men`,
  `Snatch`,
  `Moonrise Kingdom`,
  `Seven Years in Tibet`,
  `Midnight Special`,
  `War of the Worlds`,
  `Dardjeeling Limited`,
  `Orlando`,
  `Mindhunter`,
  `Midnight Special`,
];

const PEOPLES = [
  `Wes Andreson`,
  `Bill Murray`,
  `Edward Norton`,
  `Jude Law`,
  `Willem Dafoe`,
];

const DESCRIPTIONS = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatem ducimus accusamus numquam omnis, eos rerum non reiciendis ipsum id quo architecto distinctio quisquam ratione! Commodi sapiente possimus dolor accusantium? Illo iusto nam amet voluptates!`,
  `Adipisci quia alias quis ipsam cumque eos, labore doloremque aperiam voluptates. Hic excepturi perspiciatis consequatur eaque laudantium eius iure, aspernatur, itaque deleniti sit perferendis corrupti, natus dolor!`,
  `Quasi deleniti doloremque ullam aliquam quo delectus officiis modi expedita, neque hic obcaecati! Necessitatibus quam ipsum, mollitia similique nam voluptas porro nihil voluptatibus dolorem maxime alias ullam, voluptate totam perspiciatis quod, adipisci ut. Eum iure repudiandae nihil assumenda eos nam nulla totam eaque, tenetur asperiores temporibus aspernatur et fugit, dolorem ex enim incidunt?`,
  `Quo corporis minus delectus hic cum, id eaque voluptates molestiae quaerat numquam incidunt dolores ab nobis voluptatum nostrum laudantium officiis. Optio, recusandae sapiente?`,
  `Id, laudantium!`,
  `Ratione, cupiditate eveniet iste illum quas quia numquam?`,
  `Iure, molestias cupiditate rem laboriosam voluptatibus aperiam sequi illum mollitia.`,
  `Placeat at quas minima tempora architecto eius omnis alias dignissimos vitae fuga?`,
  `Optio possimus asperiores commodi provident reiciendis suscipit libero vitae error facilis repellat tenetur quas magnam, quae earum nesciunt perferendis pariatur inventore iste consequatur molestias fuga!`,
  `Voluptatibus odio minima debitis cum`,
];

const GENRES = [
  `Drama`,
  `Horror`,
  `Romance`,
  `Comedy`,
  `History`,
  `Musical`,
  `Western`,
];

const PREVIEWS = [
  `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  `img/bohemian-rhapsody.jpg`,
  `img/macbeth.jpg`,
  `img/aviator.jpg`,
  `img/we-need-to-talk-about-kevin.jpg`,
  `img/what-we-do-in-the-shadows.jpg`,
  `img/revenant.jpg`,
  `img/johnny-english.jpg`,
  `img/shutter-island.jpg`,
  `img/pulp-fiction.jpg`,
  `img/no-country-for-old-men.jpg`,
  `img/snatch.jpg`,
  `img/moonrise-kingdom.jpg`,
  `img/seven-years-in-tibet.jpg`,
  `img/midnight-special.jpg`,
  `img/war-of-the-worlds.jpg`,
  `img/dardjeeling-limited.jpg`,
  `img/orlando.jpg`,
  `img/mindhunter.jpg`,
  `img/midnight-special.jpg`,
];

// const POSTERS = [
//   `img/the-grand-budapest-hotel-poster.jpg`,
// ];

// const BACKGROUNDS = [
//   `img/bg-the-grand-budapest-hotel.jpg`,
// ];


const getRandomFromArray = (array) => {
  const idx = Math.round(Math.random() * (array.length - 1));
  return array[idx];
};

const shuffleArray = (array) => {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const getRandomInt = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1) + a);
};

const getRandomDate = (inception) => {
  const start = new Date(inception);
  const end = new Date();
  return new Date(getRandomInt(start.getTime(), end.getTime())).getFullYear();
};

export const getMovies = (amount) => {
  const moviesTitles = shuffleArray(TITLES);
  const previews = shuffleArray(PREVIEWS);
  return new Array(amount)
    .fill({})
    .map((_, i) => ({
      id: i,
      title: moviesTitles[i],
      genre: shuffleArray(GENRES).slice(0, getRandomInt(1, 2)).join(`, `),
      release: getRandomDate(MOVIE_EPOCH_BEGAN),
      rating: Number(parseFloat(Math.random() * 10).toFixed(1)),
      description: shuffleArray(DESCRIPTIONS).slice(0, getRandomInt(1, 3)),
      director: shuffleArray(PEOPLES).slice(0, getRandomInt(1, 2)),
      cast: shuffleArray(PEOPLES).slice(0, getRandomFromArray(2, 5)),
      preview: previews[i],
      poster: previews[i],
      background: previews[i],
    }));
};
