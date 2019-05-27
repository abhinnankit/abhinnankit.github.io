import React, { FC, useEffect, useRef, useState } from 'react';
import classes from './Carousel.module.scss';
import { ReactComponent as LeftArrow } from '../../../../assets/images/svg/left_arrow.svg';
import { ReactComponent as RightArrow } from '../../../../assets/images/svg/right_arrow.svg';
import CarouselSlide from './CarouselSlide/CarouselSlide';

interface IProps {
    carImgUrls: string[];
}

const Carousel: FC<IProps> = props => {
    const slideWrapperRef = useRef(null);
    const [carImgUrls, setCarImgUrls] = useState(props.carImgUrls);
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const carouselSlideWrapperClasses = [classes.CarouselSlideWrapper];
    const onRightArrowHandler = () => {
        setMoveForward(true);
    };
    const shiftElementsForwards = () => {
        const tempImgUrls = [...carImgUrls];
        tempImgUrls.unshift(tempImgUrls.pop());
        slideWrapperRef.current.removeEventListener('webkitAnimationEnd', shiftElementsForwards);
        slideWrapperRef.current.removeEventListener('animationEnd', shiftElementsForwards);
        setMoveForward(false);
        setCarImgUrls(tempImgUrls);
    };
    const onLeftArrowHandler = () => {
        setMoveBackward(true);
    };
    const shiftElementBackwards = () => {
        const tempImgUrls = [...carImgUrls];
        tempImgUrls.push(tempImgUrls.shift());
        slideWrapperRef.current.removeEventListener('webkitAnimationEnd', shiftElementBackwards);
        slideWrapperRef.current.removeEventListener('animationEnd', shiftElementBackwards);
        setMoveBackward(false);
        setCarImgUrls(tempImgUrls);
    };
    useEffect(() => {
        if (moveForward) {
            slideWrapperRef.current.addEventListener('webkitAnimationEnd', shiftElementsForwards);
            slideWrapperRef.current.addEventListener('animationEnd', shiftElementsForwards);
        }
        if (moveBackward) {
            slideWrapperRef.current.addEventListener('webkitAnimationEnd', shiftElementBackwards);
            slideWrapperRef.current.addEventListener('animationEnd', shiftElementBackwards);
        }
    });
    if (moveForward) {
        carouselSlideWrapperClasses.push(classes.Forwards);
    }
    if (moveBackward) {
        carouselSlideWrapperClasses.push(classes.Backwards);
    }
    return (
        <div className={classes.Carousel}>
            <div ref={slideWrapperRef} className={carouselSlideWrapperClasses.join(' ')}>
                {carImgUrls.slice().map(carImgUrl => (
                    <CarouselSlide key={carImgUrl} imagesUrl={carImgUrl} />
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
};

export default Carousel;
