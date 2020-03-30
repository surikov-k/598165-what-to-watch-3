import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onClick, onMouseEnter,
  } = props;
  const {title, preview} = movie;

  const _onClickHandler = (e) => {
    e.preventDefault();
    onClick(movie.id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={() => onMouseEnter(movie)}
    >
      <div className="small-movie-card__image" onClick={_onClickHandler}>
        <img
          src={preview}
          alt={title}
          width="280"
          height="175"
        />

      </div>
      <h3 className="small-movie-card__title" onClick={_onClickHandler}>
        <a
          className="small-movie-card__link"
          href=""
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
};

export default MovieCard;
