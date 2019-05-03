import React from 'react';
import NavigationListItem from './NavigationListItem/NavigationListItem';

const navigationList = props => {
    const navItems = ['Home', 'About', 'Skills', 'Contact'];
    return (
        <ul>
            {navItems.map(navItem => (
                <NavigationListItem key={navItem}>{navItem.toUpperCase()}</NavigationListItem>
            ))}
        </ul>
    );
};

navigationList.propTypes = {};

export default navigationList;
