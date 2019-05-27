import React, { FC } from 'react';

interface IProps {
    imagesUrl: string;
    active: boolean;
}

const CarouselSlide: FC<IProps> = props => {
    return <img src={props.imagesUrl} alt={''} />;
};

export default CarouselSlide;
