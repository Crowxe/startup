import React from 'react';
import ReactDOM from 'react-dom';

import eventEmitter from './eventEmitter.js';
import Actor from './actor.js';
import Movie from './movie.js';
import Logger from './logger.js';
import EditMovie from './compEditMovie.js';
import CreateMovie from './compCreateMovie.js';
import ShowList from './compShowList.js';


class Movies extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: Array()
    }
  }

  handleAddMovie(movie){
    var movies = this.state.movies;
    let id = 1;

    if (movies.length != 0){
      id = movies[movies.length-1].id + 1;
    }
    movie.setId(id);
    movies.push(Object.assign({},movie));

    this.setState({
      movies: movies
    });
  }

  handleEditMovie(editmovie){
    var idx = null;
    var movies = this.state.movies;

    movies.forEach(function(movie,idxm){
      if (movie.id == editmovie.id){
        idx = idxm;
      }

    });

    if (idx != null){
      movies[idx] = editmovie;
    }

    this.setState({
      movies: movies,
    });
  }

  handleRemoveMovie(removemovie){
      var idx = null;
      var movies = this.state.movies;

      movies.forEach(function(movie,idxm){
        if (movie.id == removemovie){
          idx = idxm;
        }
      });

      if (idx != null){
        movies.splice(idx,1);
      }

      this.setState({
        movies: movies,
      });
    }

  render(){
    return(
      <div>
        <ShowList
          items={this.state.movies}
          onClick={removemovie => this.handleRemoveMovie(removemovie)}/>
        <CreateMovie onClick={movie => this.handleAddMovie(movie)} />
        <EditMovie
          movies={this.state.movies}
          onClick={editmovie => this.handleEditMovie(editmovie)} />

      </div>
    )
  }
}

class MovieApp extends React.Component {

  render(){
    return(
      <div>
        <Movies />
      </div>
    )
  }
}


ReactDOM.render(
  <MovieApp />,
  document.getElementById('root')
);
