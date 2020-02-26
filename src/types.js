import PropTypes from 'prop-types';

export const movieType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  director: PropTypes.arrayOf(PropTypes.string).isRequired,
  cast: PropTypes.arrayOf(PropTypes.string).isRequired,
  previewSrc: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};
