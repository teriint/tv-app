import React, { Component } from 'react';

import axios from '../../axios';

import Movie from '../../components/Movie/Movie';
import MovieDetail from '../../components/MovieDetail/MovieDetail';
import HistoryNavigation from '../../components/HistoryNavigation/HistoryNavigation';
import NavigationPanel from '../../components/NavigationPanel/NavigationPanel';

import './TableMovieCovers.css';

class TableMovieCovers extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
        show: true,

    }

    componentDidMount () {
        axios.get( '/shows' )
            .then( response => {
                const posts = response.data.slice(0, 50);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post
                    }
                });
                this.setState({posts: updatedPosts});
            } )
            .catch(error => {
                this.setState({error: true});
            });
    }

    changeContentMovie = () => {
        this.setState( ( prevState ) => {
            if (!prevState.show) {
                return { show: !prevState.show, selectedPostId: null };
            } else {
                return { show: prevState.show };
            }
        } );
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id, show: false});
    }

    render () {
 
        let posts = <p style={{textAlign: 'center'}}>Подождите пока загружаются данные...</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <Movie 
                    key={post.id} 
                    name={post.name} 
                    summary={post.summary}
                    image={post.image}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }


        let hairLvl = null;

        hairLvl = this.state.show ? <section className="MoviePosts">  {posts} </section> : null;
      
        return (
            <div>
                <NavigationPanel show={this.state.show} clicked={() => this.changeContentMovie()}/>
                {this.state.posts.map(post =>  {
                    if ( post.id === this.state.selectedPostId ) {
                        return <HistoryNavigation key={post.id}
                            name={post.name}  
                            clicked={() => this.changeContentMovie()} />;
                    } else {
                        return <span key={post.id} className="HistoryNavigation">Главная</span>;
                    }
                })}
                {hairLvl}
                <section>
                {this.state.posts.map(post =>  {
                    if ( post.id === this.state.selectedPostId ) {
                        return <MovieDetail key={post.id}
                            id={this.state.selectedPostId}
                            img={post.image} />;
                    } else {
                        return <MovieDetail key={post.id}
                            img={post.image} />;
                    }
                })}
      
                </section> 
            </div>
        );
    }
}

export default TableMovieCovers;