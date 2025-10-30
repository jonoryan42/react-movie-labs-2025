import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";


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

  const mustWatches = upcomingMovies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatches', JSON.stringify(mustWatches))

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");


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