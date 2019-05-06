import React, { FC } from 'react';
import NavigationListItem from './NavigationListItem/NavigationListItem';
import classes from './NavigationList.module.scss';

interface IProps {
    show: boolean;
}

const navigationList: FC<IProps> = props => {
    const ulClass = [classes.NavigationList];
    if (props.show) {
        ulClass.push(classes.OpenNavBar);
    }
    const navItems = ['Home', 'About', 'Work', 'Contact'];
    return (
        <ul className={ulClass.join(' ')}>
            {navItems.map(navItem => (
                <NavigationListItem key={navItem}>{navItem.toUpperCase()}</NavigationListItem>
            ))}
        </ul>
    );
};

export default navigationList;
