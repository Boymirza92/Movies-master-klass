import React from "react";
import { Card, CardImg } from "reactstrap";
import "./Cart.css";
const CardContainer = ({ movie }) => {
  return (
    <Card id="card1">
      <CardImg id="img" src={movie.backdropPath} />
      
    </Card>
  );
};

export default CardContainer;
