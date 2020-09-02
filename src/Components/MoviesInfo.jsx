import React, { useEffect, useState } from "react";
import "../css/MoviesInfo.css";
import axios from "./axios";
import { Api_key } from "./request";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import CommentSection from './CommentSection';



const base_url = "https://image.tmdb.org/t/p/original/";

const MoviesInfo = (props) => {
  const [MovieImg, SetMovieInfo] = useState([]);
  const [TrailerURL, setTrailerYoutube] = useState("");
  const [MovieTitle, setMovieTitle] = useState("");
  

  const movieId = props.match.params.movieid;

  useEffect(() => {
    async function getData() {
      const d = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${Api_key}&language=en-US`
      );
      SetMovieInfo(d.data);
      setMovieTitle(d.data);
      
      return d;
    }
    getData();
  }, [movieId]);

  
/*Set page title toby movie*/
  document.title = MovieTitle.title;

/*END movie Title */
  

/*  SHOW MOVIE MOVIE TRAILER */
  movieTrailer(MovieImg?.name || MovieImg?.original_title || "netflix")
    .then((url) => {
      const UrlParams = new URLSearchParams(new URL(url).search);
      setTrailerYoutube(UrlParams.get("v"));
    })
    .catch((error) => {
      console.log(error);
    });

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
/* END MOVIE TRAILER */

  return (
    <>
      <div className="ManDiv" >
        <div className="ImgDiv">
          <img src={`${base_url}${MovieImg.poster_path}`} alt={ MovieImg.name}/>
          <h5 className="rate">{MovieImg.vote_average}</h5>
        </div>
        <div className="right">
          <h1>{MovieImg.title}</h1>
          <h3>{MovieImg.overview}</h3>
          <div className="miniTitle">
            <span>Status:<h5>{MovieImg.status}</h5></span>
            <span >Popularity:<h5 className="popularity">{MovieImg.popularity}</h5></span>
            <span >Release_date:<h5 className="popularity">{MovieImg.release_date}</h5></span>
          
          </div>
        </div>
      </div>
      <div className="trailer">
        <div className="trailerSection">
        <h5 className="TrailerTitle">TRAILER</h5>
          {<Youtube className="youtube" videoId={TrailerURL} opts={options} />}
          </div>
      </div>
      <CommentSection movieid={MovieImg.original_title}/>


     
    </>
  );
};

export default MoviesInfo;
