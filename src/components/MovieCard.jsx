import React from "react";

const MovieDetailsCard = ({ selectedMovie }) => {
  if (!selectedMovie) {
    return <p>Please select a movie to see details.</p>;
  }

  return (
    <div style={cardStyle}>
      <h2 className="blockTitle">{selectedMovie.Title}</h2>
      <p><strong>Year:</strong> {selectedMovie.Year}</p>
      <p><strong>Language:</strong> {selectedMovie.Language || "N/A"}</p>
      <p><strong>Country:</strong> {selectedMovie.Country || "N/A"}</p>
      <p><strong>Nominations:</strong> {selectedMovie.nomination || 0}</p>
      <p><strong>Wins:</strong> {selectedMovie.wins || 0}</p>
      <p><strong>Genre:</strong> {selectedMovie.Genre || "-"}</p>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "1rem",
  backgroundColor: "#fff",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "400px",
  margin: "1rem auto",
  textAlign: "left",
};

export default MovieDetailsCard;