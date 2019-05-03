import React from 'react';
import NavigationListItem from './NavigationListItem/NavigationListItem';
import classes from './NavigationList.module.scss';

const navigationList = props => {
    const navItems = ['Home', 'About', 'Skills', 'Contact'];
    return (
        <ul className={classes.NavigationList}>
            {navItems.map(navItem => (
                <NavigationListItem key={navItem}>{navItem.toUpperCase()}</NavigationListItem>
            ))}
        </ul>
    );
};

navigationList.propTypes = {};

export default navigationList;
