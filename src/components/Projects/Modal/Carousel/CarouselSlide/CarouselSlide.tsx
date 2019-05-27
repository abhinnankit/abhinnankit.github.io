import React, { FC } from 'react';
import classes from './CarouselSlide.module.scss';

interface IProps {
    imagesUrl: string;
}

const CarouselSlide: FC<IProps> = props => {
    return <img className={classes.CarouselImage} src={props.imagesUrl} alt={''} />;
};

export default CarouselSlide;
