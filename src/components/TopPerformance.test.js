import { render, screen } from "@testing-library/react";
import TopPerformanceView from "./TopPerformanceView";

// Sample movies data for testing
const movies = [
  { Title: "Movie A", nomination: 3, wins: 2 },
  { Title: "Movie B", nomination: 5, wins: 3 },
  { Title: "Movie C", nomination: 2, wins: 1 },
];

test("renders top performers table correctly", () => {
  render(<TopPerformanceView movies={movies} />);

  // Check if table is rendered
  expect(screen.getByText(/Top Performers/i)).toBeInTheDocument();
  
  // Check if the table displays correct movie data
  expect(screen.getByText("Movie B")).toBeInTheDocument();
  expect(screen.getByText("3")).toBeInTheDocument(); // Nominations
  expect(screen.getByText("3")).toBeInTheDocument(); // Wins
});