import React, { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const key = import.meta.env.VITE_API_KEY;
  
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${key}&query=${queryTerm}`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        setData(jsonData.results);  // Updating the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchMovies();
  }, [url]);

  return { data };
}
