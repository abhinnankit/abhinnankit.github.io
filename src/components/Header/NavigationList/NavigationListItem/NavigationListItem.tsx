import React from 'react';
import classes from './NavigationListItem.module.scss';

const navigationListItem = props => {
    return (
        <li className={classes.NavigationListItem}>
            <span className={props.markActive ? classes.active : null} onClick={props.clicked}>
                {props.children}
            </span>
        </li>
    );
};

export default navigationListItem;
