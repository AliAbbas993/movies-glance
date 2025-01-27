import React from "react";

const TopPerformanceView = ({ movies }) => {
  if (!movies.length) return <p>Loading data...</p>;

  // Sort movies by the number of wins (descending order)
  const sortedMovies = [...movies].sort((a, b) => b.wins - a.wins).slice(0, 10);

  return (
    <div className="w-100 table-responsive">
      <h2 className="blockTitle">Top Performers</h2>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Movie Title</th>
            <th>Nominations</th>
            <th>Wins</th>
            <th>Release Year</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {sortedMovies.map((movie, index) => (
            <tr key={movie.Title}>
              <td>{index + 1}</td>
              <td>{movie.Title}</td>
              <td>{movie.nomination}</td>
              <td>{movie.wins}</td>
              <td>{movie.Year}</td>
              <td>{movie.Language}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopPerformanceView;