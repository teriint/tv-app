import React, { Component } from 'react';

import Episode from '../components/Episode/Episode';

import '../components/MovieDetail/MovieDetail';

import defaultImage from '../components/Episode/Episode';

export class MovieDetail extends React.Component {
    render() {
        const { loadedPost, error } = this.props

        let post = null;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Идет загрузка...</p>;
        }
        if (loadedPost && this.props.id && !error) {
            post = (
                <div className="MovieDetail">
                    <h1>{loadedPost.name}</h1>
                    <div className="row">
                        <div className="col-3">
                            <img src={loadedPost.image ? loadedPost.image.medium : defaultImage} alt={this.props.name} />
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