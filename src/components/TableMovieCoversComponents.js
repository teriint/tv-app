import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../components/Movie/Movie';
import MovieDetail from '../components/MovieDetail/MovieDetail';
import HistoryNavigation from '../components/HistoryNavigation/HistoryNavigation';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import MovieDetailContainers from '../containers/MovieDetailContainers';

export class TableMovieCovers extends React.Component {
    state = {
        currentPostId: null,
        show: true
    }

    postSelectedHandler = (id) => {
        console.log(id);
        this.setState({ currentPostId: id, show: false });
    }

    changeContentSearch = () => {
        this.setState({ currentPostId: null, show: false });
    }

    changeContentMovie = () => {
        this.setState((prevState) => {
            if (!prevState.show) {
                return { show: !prevState.show, currentPostId: null };
            } else {
                return { show: prevState.show };
            }
        });
    }

    render() {
        const { posts, error } = this.props

        let tableMovies = <p style={{ textAlign: 'center' }}>Подождите пока загружаются данные...</p>;
        if (!error) {
            tableMovies = posts.map(post => {
                return <Movie
                    key={post.id}
                    name={post.name}
                    summary={post.summary}
                    image={post.image}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        } else {
            tableMovies = <p>Во время выполнения запроса произошла ошибка :( Устраните проблему и обновите страницу.</p>
        }

        let hairLvl = null;

        hairLvl = this.state.show ? <section className="MoviePosts">  {tableMovies} </section> : null;

        return (
            <div>
                <NavigationPanel show={this.state.show} clicked={() => this.changeContentSearch()} />
                {posts.map(post => {
                    if (post.id === this.state.currentPostId) {
                        return <HistoryNavigation
                            key={post.id}
                            name={post.name}
                            clicked={() => this.changeContentMovie()} />;
                    } else {
                        return <span key={post.id} className="HistoryNavigation">Главная</span>;
                    }
                })}

                {hairLvl}
                <section>
                    {posts.map(post => {
                        if (post.id === this.state.currentPostId) {
                            console.log(this.state.currentPostId);
                            console.log(post.id);
                            return <MovieDetailContainers key={post.id}
                            id={post.id} />;
                        } else {
                            return null;
                        }
                    })}

                </section>
            </div>
        );
    }
}

TableMovieCovers.propTypes = {
    posts: PropTypes.array.isRequired,
    selectedPostId: PropTypes.number.isRequired,
    error: PropTypes.bool.isRequired,
    show: PropTypes.bool.isRequired,
    handleLoadMovies: PropTypes.func.isRequired
}