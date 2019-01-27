import React from 'react';

import './Episode.css';

export const defaultImage = "https://static.tvmaze.com/images/no-img/no-img-landscape-text.png";

const episode = (props) => (
 
    <article className="Episode" >
        <h1>{props.name} ({props.season} сезон, {props.number} серия) </h1>
       <a href={props.srcImg}> <img  src={props.image ? props.image.medium : defaultImage} alt={props.name} title={props.summary ? props.summary.substring(0, 180)+'...' : null} /> </a> 
    </article>

);

export default episode;