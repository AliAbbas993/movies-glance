import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const OscarStatsView = ({ movies }) => {

  if (!movies?.length){ 
    return (
      <div className="text-center mt-4">
        <p className="text-muted">Loading data...</p>
      </div>
    )
  };

  // Extract nominations and wins per year
  const stats = movies?.reduce((acc, movie) => {
    const year = movie?.Year;
    if (!acc[year]) acc[year] = { nomination: 0, wins: 0 };
    acc[year].nomination += movie.nomination || 0;
    acc[year].wins += movie.wins || 0;
    return acc;
  }, {});

  let years = Object.keys(stats)
  let nominations = years?.map((year) => stats[year].nomination);
  let wins = years?.map((year) => stats[year].wins);

  const data = {
    labels: years,
    datasets: [
      {
        label: "Nominations",
        data: nominations,
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
      {
        label: "Wins",
        data: wins,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <>
      <h2 className="text-center my-2 blockTitle">Oscar Statistics</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          {data && <Bar key={`chart-${years.length}`} data={data} />}
        </div>
      </div>
    </>
  );
};

export default OscarStatsView;