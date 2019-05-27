import React, { FC, useState } from 'react';
import classes from './Carousel.module.scss';
import { ReactComponent as LeftArrow } from '../../../../assets/images/svg/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../../assets/images/svg/right_arrow.svg';
import CarouselSlide from './CarouselSlide/CarouselSlide';

interface IProps {
    carImgUrls: string[];
}

const Carousel: FC<IProps> = React.memo(props => {
    const [carImgUrls, setCarImgUrls] = useState(props.carImgUrls);
    const onRightArrowHandler = () => {
        const tempImgUrls = [...carImgUrls];
        tempImgUrls.unshift(tempImgUrls.pop());
        setCarImgUrls(tempImgUrls);
    };
    const onLeftArrowHandler = () => {
        const tempImgUrls = [...carImgUrls];
        tempImgUrls.push(tempImgUrls.shift());
        setCarImgUrls(tempImgUrls);
    };
    return (
        <div className={classes.Carousel}>
            <div className={classes.CarouselSlideWrapper}>
                {carImgUrls.slice().map((carImgUrl, index) => (
                    <CarouselSlide key={carImgUrl} imagesUrl={carImgUrl} imgIndex={index} />
                ))}
            </div>
            <span className={classes.Prev} onClick={onLeftArrowHandler}>
                <LeftArrow className="svg-inline--fa fa-chevron-left fa-w-8" />
            </span>
            <span className={classes.Next} onClick={onRightArrowHandler}>
                <RightArrow className="svg-inline--fa fa-chevron-right fa-w-8" />
            </span>
        </div>
    );
});

export default Carousel;
