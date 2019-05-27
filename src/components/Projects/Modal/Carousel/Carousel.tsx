import React, { FC } from 'react';
import classes from './Carousel.module.scss';
import { ReactComponent as LeftArrow } from '../../../../assets/images/svg/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../../assets/images/svg/right_arrow.svg';
import CarouselSlide from './CarouselSlide/CarouselSlide';

interface IProps {
    carImgUrls: string[];
}

const Carousel: FC<IProps> = React.memo(props => {
    const carImgUrls = props.carImgUrls.slice();
    return (
        <div className={classes.Carousel}>
            <div className={classes.CarouselSlideWrapper}>
                {carImgUrls.map(carImgUrl => (
                    <CarouselSlide key={carImgUrl} imagesUrl={carImgUrl} />
                ))}
            </div>
            <span className={classes.Prev}>
                <LeftArrow className="svg-inline--fa fa-chevron-left fa-w-8" />
            </span>
            <span className={classes.Next}>
                <RightArrow className="svg-inline--fa fa-chevron-right fa-w-8" />
            </span>
        </div>
    );
});

export default Carousel;
