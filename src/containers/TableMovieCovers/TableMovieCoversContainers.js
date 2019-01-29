import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import './TableMovieCovers.css';
import { getShows } from '../../actions/TableMovieCoversActions'
import { TableMovieCovers } from '../../components/TableMovieCoversComponents';

class TableMovieCoversContainers extends Component {

    componentDidMount() {
        const { getShows } = this.props
        getShows()
    }

    render() {
        const { movies } = this.props

        return (
            <div>
                <TableMovieCovers
                    posts={movies.posts}
                    show={movies.show}
                    selectedPostId={movies.selectedPostId}
                    error={movies.error}
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

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        getShows
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableMovieCoversContainers)