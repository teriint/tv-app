import React from 'react';

import './HistoryNavigation.css';

const historyNavigation = (props ) => (
    <ul className="HistoryNavigation">
        <li  onClick={props.clicked}>Главная</li>&rarr;
        <li> {props.name ? props.name : null}</li>
    </ul>
);

export default historyNavigation;