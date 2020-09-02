import React, { useState, useEffect } from "react";
import request from "./request";
import axios from "./axios";
import "../css/Banner.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const Banner = () => {
  const [Banner, setBanner] = useState([]);
  const [TrailerURL, setTrailerYoutube] = useState("");
  const [showTrailer, setshowTrailer] = useState(true);

  useEffect(() => {
    async function getBannerImg() {
      const ban = await axios.get(request.fetchActionMovies);
      setBanner(
        ban.data.results[
          Math.floor(Math.random() * ban.data.results.length - 1)
        ]
      );
      return ban;
    }
    getBannerImg();
  }, []);

  /* SHOW TRAILER */
  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
    };
    
/* BUTTON CLICK TO SHOW TRAILER */
    const handleClick = () => {
        setshowTrailer(!showTrailer)
        if (!setshowTrailer()){
            movieTrailer(Banner?.title || Banner?.original_title || Banner?.name || " ")
                .then((url) => {
                    const UrlParams = new URLSearchParams(new URL(url).search);
                    setTrailerYoutube(UrlParams.get("v"));
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            return false;
        }
    };
    
    const closeTrailer = () => {
        setshowTrailer(true);
    }

  /* END SHOW TRAILER */

  function StringLenght(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
          {showTrailer ? 
              <header
                  className="MainBanner"
                  style={{
                      backgroundSize: "cover",
                      backgroundImage: `url( 
                        "https://image.tmdb.org/t/p/original/${Banner?.backdrop_path}")`,
                      backgroundPosition: "center center",
                  }}
              >
                  <div className="MainBannerContent">
                      <h1 className="MovieTitleBanner">
                          {" "}
                          {Banner?.title || Banner?.name || Banner?.original_name}
                      </h1>
                      <h2 className="MovieTextBanner">
                          {StringLenght(Banner?.overview, 150)}
                      </h2>
                      <button className="buttonBanner" onClick={handleClick}>Trailer</button>
                  </div>
                  <div className="BannerLinear"></div>
                
                 
              </header>  : <div className="closetrailer"> <div><button onClick={closeTrailer}>Close</button></div>  <Youtube videoId={TrailerURL} opts={options} />   </div>}
    </>
  );
};

export default Banner;
