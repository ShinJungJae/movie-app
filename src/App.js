import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
  },
  {
    title: "Full Metal Jacker",
    poster: "http://athenacinema.com/wp-content/uploads/2013/12/FMJ.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://movieswithaplottwist.com/wp-content/uploads/2016/04/old-boy-movie-poster.jpg"
  },
  {
    title: "Star Wars",
    poster: "https://gemr.com/wp-content/uploads/2017/12/resize.jpeg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
