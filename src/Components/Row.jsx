import React, { useState, useEffect } from "react";
import axios from "./axios";
import "../css/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import EachMovie from "./EachMovie";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, VerticalRow }) => {


  const [InitialMovie, SetMovies] = useState([]);
  const [TrailerURL, setTrailerYoutube] = useState("");

  useEffect(() => {
    async function getData() {
      const d = await axios.get("https://api.themoviedb.org/3" + fetchUrl);
      SetMovies(d.data.results);
      return d;
    }
    getData();
  }, [fetchUrl]);


  // console.log(InitialMovie);

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // const handleClick = (CurrentMovieValue) => {
  //   if (TrailerURL) {
  //     setTrailerYoutube("");
  //   } else {
  //     movieTrailer(CurrentMovieValue?.name || CurrentMovieValue?.original_title || "netflix")
  //       .then((url) => {
  //         const UrlParams = new URLSearchParams(new URL(url).search);
  //         setTrailerYoutube(UrlParams.get("v"));
  //         console.log({ movieTrailer });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };




  return (
    <>
        <div className="row">
          <h2>{title}</h2>
        <div className="row_images">
            {InitialMovie.map((CurrentMovieValue, index) => {
              return [
                <React.Fragment key={index}>
                <EachMovie
                  className={`row_img ${VerticalRow && "large_imagesRow"}`}
                  key={index}
                  src={`${base_url}${CurrentMovieValue.poster_path}`}
                  alt={CurrentMovieValue.name}
                  name={CurrentMovieValue.name}
                  originalTitle={CurrentMovieValue.original_title}
                    movieid={CurrentMovieValue.id}
                    title={CurrentMovieValue.name}
                  />
                  </React.Fragment>
              ];
            })}
          </div>
          {TrailerURL && <Youtube videoId={TrailerURL} opts={options} />}
        </div>

    </>
  );
};

export default Row;
