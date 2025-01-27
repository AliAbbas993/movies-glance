import axios from "axios";

const API_URL = "https://dummyjson.com/c/d576-d408-467b-9fe4";

export const fetchMoviesData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};