import React from 'react';
import classes from './Carousel.module.scss';
import { ReactComponent as LeftArrow } from '../../../../assets/images/svg/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../../assets/images/svg/right_arrow.svg';

const Carousel = () => {
    return (
        <div className={classes.Carousel}>
            <span className={classes.Prev}>
                <LeftArrow className="svg-inline--fa fa-chevron-left fa-w-8" />
            </span>
            <span className={classes.Next}>
                <RightArrow className="svg-inline--fa fa-chevron-right fa-w-8" />
            </span>
        </div>
    );
};

export default Carousel;
