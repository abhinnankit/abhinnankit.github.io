import React from 'react';
import classes from './NavigationListItem.module.scss';

const navigationListItem = props => {
    return (
        <li className={classes.NavigationListItem}>
            <a href="/">{props.children}</a>
        </li>
    );
};

export default navigationListItem;
