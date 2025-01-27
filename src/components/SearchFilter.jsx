import React, { useState } from "react";

const SearchFilter = ({ movies, setFilteredMovies, setSelectedMovie }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  // Extract unique years and languages from the dataset
  const years = [...new Set(movies.map((movie) => movie.Year))];
  const languages = [...new Set(movies.map((movie) => movie.Language))];

  const handleFilter = () => {
    let filtered = movies;

    if (searchQuery) {
      filtered = filtered.filter((movie) =>
        movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedYear) {
      filtered = filtered.filter((movie) => movie.Year === selectedYear);
    }

    if (selectedLanguage) {
      filtered = filtered.filter((movie) => movie.Language === selectedLanguage);
    }

    setFilteredMovies(filtered);
  };

  const handleMovieSelect = (e) => {
    const movieId = e.target.value;
    const movie = movies.find((m) => m.imdbID === movieId);
    setSelectedMovie(movie);
  };

  return (
    <div className="col p-1 my-1">
      <div className="d-flex flex-wrap justify-around mb-0 boxRadius">
        {/* Search Bar */}
        <div class="mb-1 col-12 col-md-3 p-0 px-1">
          <label for="exampleFormControlInput1" className="form-label w-100 text-start fs-10 fw-lighter">Search by Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Search by movie title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleFilter}
          />
        </div>

        {/* Filter by Year */}
        <div class="mb-1 col-12 col-md-3 p-0 px-1">
          <label for="exampleFormControlInput1" className="form-label w-100 text-start fs-10 fw-lighter">Year Filter</label>
          <select
            value={selectedYear}
            className="form-control"
            onChange={(e) => {
              debugger
              console.log(typeof(e.target.value));
              setSelectedYear(JSON.parse(e.target.value));
              handleFilter();
            }}
          >
            <option className="option" value="" disabled>Filter by Year</option>
            {years.map((year) => (
              <option className="option" key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Filter by Language */}
        <div class="mb-1 col-12 col-md-3 p-0 px-1">
          <label for="exampleFormControlInput1" className="form-label w-100 text-start fs-10 fw-lighter">Language Filter</label>
          <select
            value={selectedLanguage}
            className="form-control"
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
              handleFilter();
            }}
          >
            <option className="option" value="" disabled>Filter by Language</option>
            {languages.map((language) => (
              <option className="option" key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>

        <div class="mb-1 col-12 col-md-3 p-0 px-1">
          <label for="exampleFormControlInput1" className="form-label w-100 text-start fs-10 fw-lighter">Select a Movie</label>
          <select className="form-control" onChange={handleMovieSelect}>
            <option className="option" value="" disabled>Select a Movie</option>
            {movies.map((movie) => (
              <option className="option" key={movie.imdbID} value={movie.imdbID}>
                {movie.Title}
              </option>
            ))}
          </select>
        </div>
        
      </div>
    </div>
  );
};

export default SearchFilter;