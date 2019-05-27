import React, { FC } from 'react';
import classes from './CarouselSlide.module.scss';

interface IProps {
    imagesUrl: string;
    imgIndex: number;
}

const CarouselSlide: FC<IProps> = props => {
    const imgClasses = [classes.CarouselImage];
    if (props.imgIndex !== 1) {
        imgClasses.push(classes.invisible);
    }
    return <img className={imgClasses.join(' ')} src={props.imagesUrl} alt={''} />;
};

export default CarouselSlide;
