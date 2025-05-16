import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")?.trim() || "";

  // Pass queryTerm to useFetch to fetch filtered results
  const { data: movies = [] } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = queryTerm
      ? `Search results for "${queryTerm}"`
      : "Search";
  }, [queryTerm]);

  return (
    <main className="container">
      <h5 className="text-danger border-bottom py-2">
        {movies.length === 0
          ? `No results found for "${queryTerm}"`
          : `Results for "${queryTerm}"`}
      </h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
};

