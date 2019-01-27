import React from 'react';

import './Movie.css';

const defaultImage = "https://static.tvmaze.com/images/no-img/no-img-landscape-text.png";

const movie = (props) => (
    <article className="Movie" onClick={props.clicked}>
        <img src={props.image ? props.image.medium : defaultImage} alt={props.name} title={props.summary ? props.summary.substring(0, 180)+'...' : null} />
        <h1>{props.name}</h1>
    </article>
);

export default movie;