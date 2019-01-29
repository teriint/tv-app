import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getShowById } from '../actions/MovieDetailActions'
import { MovieDetail } from '../components/MovieDetailComponents';

class MovieDetailContainers extends Component {

    componentDidMount() {
        const { getShowById } = this.props
        getShowById(this.props.id)
    }

    render() {
        const { movieDetail } = this.props
        return (
            <div>
                <MovieDetail
                    id={this.props.id}
                    loadedPost={movieDetail.loadedPost}
                    error={movieDetail.error}
                    show={movieDetail.show}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        movieDetail: store.movieDetail,
    }
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({
        getShowById
    }, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetailContainers)