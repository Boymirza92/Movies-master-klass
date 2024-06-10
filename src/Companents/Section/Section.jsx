import React, { useState, useEffect } from "react";
import "./Section.css";
import axios from "axios";
import CardContainer from "../MoviCard/Card";

const Section = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://jk-tv.netlify.app/cartoons/get_all")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <div className="Section-container">
      {movies.map((movie) => (
        <CardContainer key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Section;
