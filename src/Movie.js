import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
    render() {
       return (
         <div>
             <MoviePoster/>
             <h1>Hello this is a movie</h1>
         </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return (
           <img src="https://cdn.empireonline.com/jpg/80/0/0/1000/563/0/north/0/0/0/0/0/t/films/131631/images/fUn5I5f4069vwGFEEvA3HXt9xPP.jpg" />
        );
    }
}

export default Movie;