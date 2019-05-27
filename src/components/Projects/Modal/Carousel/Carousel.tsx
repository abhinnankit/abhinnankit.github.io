import React from 'react';
import classes from './Carousel.module.scss';

const Carousel = () => {
    return (
        <div className={classes.Carousel}>
            <button className={classes.Prev}>&#10094;</button>
            <button className={classes.Next}>&#10095;</button>
        </div>
    );
};

export default Carousel;
