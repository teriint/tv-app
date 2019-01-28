import React, { Component } from 'react';

import axios from '../../axios';

import './TableMovieCovers.css';
import { connect } from 'react-redux'
import { handleLoadMovies } from '../../actions/TableMovieCoversActions'

import {TableMovieCovers} from '../../components/TableMovieCoversComponents';

class TableMovieCoversContainers extends Component {
    

    componentDidMount () {
        axios.get( '/shows' )
        .then( response => {
            const posts = response.data.slice(0, 50);
            const updatedPosts = posts.map(post => {
                return {
                    ...post
                }
            });
            this.props.handleLoadMovies(updatedPosts);
            })
        .catch(error => {
            this.props.handleLoadMovies();
        });
    }

    render () {
        const { movies } = this.props
       
        return (
            <div>
                <TableMovieCovers
                    posts={movies.posts}
                    show={movies.show}
                    selectedPostId={movies.selectedPostId}
                    error={movies.error}
                    handleLoadMovies={handleLoadMovies}
                    />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
      movies: store.movies,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        handleLoadMovies: arr => dispatch(handleLoadMovies(arr)),
        // postSelectedHandler: id => dispatch(postSelectedHandler(id)),
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TableMovieCoversContainers)