import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';

const AddToPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  return (
      <PlaylistAddIcon color="primary" fontSize="large" />
  );
};

export default AddToPlaylistIcon;