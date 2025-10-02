import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.png";

  const handleFavoriteClick = () => {
    alert(`Added "${movie.title}" to favorites!`);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={posterUrl} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={handleFavoriteClick}>♡</button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
