import React from 'react';
import classes from './HamburgerMenu.module.scss';

const hamburgerMenu = () => {
    return (
        <div className={classes.HamburgerMenu}>
            <div className={classes.bar} />
            <div className={classes.bar} />
            <div className={classes.bar} />
        </div>
    );
};

export default hamburgerMenu;
