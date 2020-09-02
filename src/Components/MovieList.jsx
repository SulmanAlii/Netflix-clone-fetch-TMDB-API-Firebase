import React from "react";
import request from './request';
import Row from './Row';

const MovieList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        VerticalRow
      />
      <Row title="Trending" fetchUrl={request.fetchTrending}/>
      <Row title="Upcoming Movies" fetchUrl={request.fetchUpcoming} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="WEEKLY TRENDING" fetchUrl={request.fetchWeeklyTrending} />
      
      
    </>
  );
};

export default MovieList;
