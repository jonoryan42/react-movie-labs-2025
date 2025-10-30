import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner'
import RemoveFromFavorites from "../components/cardIcons/removeFromFavorites";
import WriteReview from "../components/cardIcons/writeReview";
import RemoveFromMustWatchIcon from "../components/cardIcons/removeFromMustWatch";


const MustWatchPage = () => {
  const {mustWatches: movieIds } = useContext(MoviesContext);

  // Create an array of queries and run in parallel.
  const mustWatchMovieQueries = useQueries({
    queries: movieIds.map((movieId) => {
      return {
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      }
    })
  });
  
  // Check if any of the parallel queries is still loading.
  const isPending = mustWatchMovieQueries.find((m) => m.isPending === true);

  if (isPending) {
    return <Spinner />;
  }

  const movies = mustWatchMovieQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map(g => g.id)
    return q.data
  });

  const toDo = () => true;

   return (
    <PageTemplate
      title="Must Watch Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromMustWatchIcon movie={movie} />
          </>
        );
      }}
    />
  );

};

export default MustWatchPage;