import React, { MouseEvent, FC } from 'react';
import classes from './HamburgerMenu.module.scss';

interface IProps {
    clicked(e: MouseEvent<HTMLElement>): void;
}

const hamburgerMenu: FC<IProps> = props => {
    return (
        <div className={classes.HamburgerMenu} onClick={props.clicked}>
            <div className={classes.bar} />
            <div className={classes.bar} />
            <div className={classes.bar} />
        </div>
    );
};

export default hamburgerMenu;
