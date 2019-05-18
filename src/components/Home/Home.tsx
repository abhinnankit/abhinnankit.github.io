import React from 'react';
import classes from './Home.module.scss';
import banner from '../../assets/images/banner.jpg';

const home = () => {
    return <div className={classes.Home} style={{ backgroundImage: `url(${banner})` }} />;
};

export default home;
