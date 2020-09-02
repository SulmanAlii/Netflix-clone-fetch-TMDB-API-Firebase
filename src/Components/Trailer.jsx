import React, { useState, useEffect } from 'react';
import { request } from './request';
import axios from "./axios";
import CommentSection from './CommentSection';



const Trailer = () => {

    const [InitialMovie, SetMovies] = useState([]);
  
    useEffect(() => {
      async function getData() {
        const d = await axios.get("https://api.themoviedb.org/3" + request.fetchTrending);
        SetMovies(d.data.results);
        return d;
      }
      getData();
    }, [request]);
  
  
    console.log(InitialMovie);


    return (
        <>
            

            {InitialMovie.map((CurrentMovieValue, index) => {
              return [
                <React.Fragment key={index}>
                <CommentSection
                  key={index}
                  alt={CurrentMovieValue.name}
                  name={CurrentMovieValue.name}
                  originalTitle={CurrentMovieValue.original_title}
                  movieid={CurrentMovieValue.id}
                  />
                  </React.Fragment>
              ];
            })}
        </>
    )
}


export default Trailer;