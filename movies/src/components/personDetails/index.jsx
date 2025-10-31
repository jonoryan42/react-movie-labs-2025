import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import { Link } from "react-router";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const PersonDetails = ({ person }) => {  

  return (
    <>

    <Chip label={`${person.known_for_department}`}/>
      <br></br>
      <br></br>

    <Typography variant="h5" component="h5">
        Biography
      </Typography>
      <br></br>

        <Typography variant="h6" component="p">
        {person.biography}
        </Typography>

        <br></br>
      </>
  );
};
export default PersonDetails ;