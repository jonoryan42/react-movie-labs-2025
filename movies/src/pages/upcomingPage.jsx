import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from "react-router";
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';


const UpcomingPage = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['discover'],
    queryFn: getUpcomingMovies,
  })

    if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const upcomingMovies = data.results;

     return (
      <PageTemplate
        title="Upcoming Movies"
        movies={upcomingMovies}
        // action={() => null}
        action={(movie) => <AddToPlaylistIcon movie={movie} />}
      />
  );
};
export default UpcomingPage;