import React from 'react';
import classes from './NavigationListItem.module.scss';

const navigationListItem = (props) => {
    const onNavItemClick = () => {
        props.clicked(props.children);
    };
    return (
        <li className={classes.NavigationListItem}>
            <span className={props.markActive ? classes.active : null} onClick={onNavItemClick}>
                {props.children}
            </span>
        </li>
    );
};

export default navigationListItem;
