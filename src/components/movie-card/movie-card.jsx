import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onMovieTitleClick, onMouseEnter,
  } = props;
  const {title, previewSrc} = movie;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(movie)}
    >
      <div className="small-movie-card__image">
        <img src={previewSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a
          className="small-movie-card__link"
          href=""
          onClick={(e) => {
            e.preventDefault();
            onMovieTitleClick(title);
          }}
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onMovieTitleClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default MovieCard;
