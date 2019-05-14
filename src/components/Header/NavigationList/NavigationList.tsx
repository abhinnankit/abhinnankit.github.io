import React, { FC } from 'react';
import NavigationListItem from './NavigationListItem/NavigationListItem';
import classes from './NavigationList.module.scss';

interface IProps {
    show: boolean;
    clicked(e: string): void;
}

const navigationList: FC<IProps> = props => {
    const ulClass = [classes.NavigationList, 'header-bg-color'];
    if (props.show) {
        ulClass.push(classes.OpenNavBar);
    }
    const navItems = ['Home', 'About', 'Work', 'Contact'];
    return (
        <ul className={ulClass.join(' ')}>
            {navItems.map(navItem => (
                // tslint:disable-next-line:jsx-no-lambda
                <NavigationListItem key={navItem} clicked={() => props.clicked(navItem)}>
                    {navItem.toUpperCase()}
                </NavigationListItem>
            ))}
        </ul>
    );
};

export default navigationList;
