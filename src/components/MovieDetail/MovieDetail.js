import React, { Component } from 'react';
import axios from '../../axios';

import Episode from '../../components/Episode/Episode';

import './MovieDetail.css';

import defaultImage from '../Episode/Episode';

class MovieDetail extends Component {
    state = {
        loadedPost: null
    }

    componentDidUpdate () {
        // if ( this.props.id ) {
        //     if ( !loadedPost || (loadedPost && loadedPost.id !== this.props.id) ) {
        //         axios.get( '/shows/'+this.props.id+'?embed=episodes' )
        //             .then( response => {
        //                 this.setState( { loadedPost: response.data } );
        //             } );
        //     }
        // }
        const { getShowById } = this.props
        console.log(this.props.id);
        getShowById(this.props.id)
    }

    render () {
        const {loadedPost, error, show } = this.props

        let post = null;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( loadedPost && this.props.id) {
            post = (
                <div className="MovieDetail">
                    <h1>{loadedPost.name}</h1>
                    <div className="row">
                        <div className="col-3">
                            <img  src={this.props.img ? this.props.img.medium : defaultImage} alt={this.props.name} />
                        </div>
                        <div className="col-8">
                            <p><strong>Описание:</strong> {loadedPost.summary}</p>
                            <p><strong>Язык:</strong> {loadedPost.language}</p>
                            <p><strong>Жанр:</strong> {loadedPost.genres.map(genre => {
                                return (<span key={genre} >{genre} </span>);
                            })}
                            </p>
                            <p><strong>Статус:</strong> {loadedPost.status}</p>
                            <p><strong>Дата выхода:</strong> {loadedPost.premiered}</p>
                            <p><strong>Расписание показа:</strong> по {loadedPost.schedule.days[0]} в {loadedPost.schedule.time} </p>
                            <p><strong>Рейтинг:</strong> {loadedPost.rating.average}</p>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="ListEpisode">
                        {loadedPost._embedded.episodes.map(episode => {
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