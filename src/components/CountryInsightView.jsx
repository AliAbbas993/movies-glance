import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const CountryInsightsView = ({ movies }) => {
  if (!movies.length) return <p>Loading data...</p>;

  // Group movies by country and language
  const countryCount = movies.reduce((acc, movie) => {
    const country = movie.Country || "Unknown";
    acc[country] = (acc[country] || 0) + 1;
    return acc;
  }, {});

  const languageCount = movies.reduce((acc, movie) => {
    const language = movie.Language || "Unknown";
    acc[language] = (acc[language] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the pie charts
  const countryData = {
    labels: Object.keys(countryCount),
    datasets: [
      {
        data: Object.values(countryCount),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const languageData = {
    labels: Object.keys(languageCount),
    datasets: [
      {
        data: Object.values(languageCount),
        backgroundColor: [
          "#4BC0C0",
          "#FF6384",
          "#9966FF",
          "#FFCE56",
          "#36A2EB",
          "#FF9F40",
        ],
        hoverBackgroundColor: [
          "#4BC0C0",
          "#FF6384",
          "#9966FF",
          "#FFCE56",
          "#36A2EB",
          "#FF9F40",
        ],
      },
    ],
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-around p-0 m-0">
        <div className="col-12 col-md-6 my-1">
          <h3 className="blockTitle">Movies by Country</h3>
          <Pie data={countryData} />
        </div>
        <div className="col-12 col-md-6 my-1">
          <h3 className="blockTitle">Movies by Language</h3>
          <Pie data={languageData} />
        </div>
      </div>
    </>
  );
};

export default CountryInsightsView;