import React, { Component } from 'react';
import axios from 'axios';

import Episode from '../../components/Episode/Episode';

import './MovieDetail.css';

import defaultImage from '../Episode/Episode';

class MovieDetail extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/shows/'+this.props.id+'?embed=episodes' )
                    .then( response => {
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    render () {
        let post = null;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost && this.props.id) {
            post = (
                <div className="MovieDetail">
                    <h1>{this.state.loadedPost.name}</h1>
                    <div className="row">
                        <div className="col-3">
                            <img  src={this.props.img ? this.props.img.medium : defaultImage} alt={this.props.name} />
                        </div>
                        <div className="col-8">
                            <p><strong>Описание:</strong> {this.state.loadedPost.summary}</p>
                            <p><strong>Язык:</strong> {this.state.loadedPost.language}</p>
                            <p><strong>Жанр:</strong> {this.state.loadedPost.genres.map(genre => {
                                return (<span key={genre} >{genre} </span>);
                            })}
                            </p>
                            <p><strong>Статус:</strong> {this.state.loadedPost.status}</p>
                            <p><strong>Дата выхода:</strong> {this.state.loadedPost.premiered}</p>
                            <p><strong>Расписание показа:</strong> по {this.state.loadedPost.schedule.days[0]} в {this.state.loadedPost.schedule.time} </p>
                            <p><strong>Рейтинг:</strong> {this.state.loadedPost.rating.average}</p>
                        </div>
                    </div>
                 
                    <div className="ListEpisode">
                        {this.state.loadedPost._embedded.episodes.map(episode => {
                            return <Episode 
                                key={episode.id} 
                                name={episode.name} 
                                summary={episode.summary}
                                image={episode.image}
                                season={episode.season}
                                number={episode.number}
                                srcImg={episode.url} />;
                        })}
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default MovieDetail;