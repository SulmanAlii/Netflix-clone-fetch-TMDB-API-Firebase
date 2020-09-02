import React from 'react';
import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import MoviesInfo from './Components/MoviesInfo';
import { BrowserRouter,Switch,Route } from "react-router-dom";
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Banner />
      <Switch>
          <Route  exact path="/" component={MovieList}/>
          <Route exact path="/movie/:movieid"  component={MoviesInfo} />
          <Route  exact component={ErrorPage}/>
        </Switch>
        <Footer />
      
      
      </div>
      </BrowserRouter>
  );
}

export default App;
