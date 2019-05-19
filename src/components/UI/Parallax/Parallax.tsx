import React, { useEffect, useRef, useState } from 'react';
import classes from './Parallax.module.scss';
import imgUrl from '../../../assets/images/banner.png';

const Parallax = () => {
    const wrapperRef = useRef(null);
    const parallaxMobileRef = useRef(null);
    const [bottom, setBottom] = useState(0);
    const onScroll = () => {
        // console.log(
        //     window.innerHeight +
        //         ' ' +
        //         wrapperRef.current.getBoundingClientRect().top +
        //         ' ' +
        //         wrapperRef.current.getBoundingClientRect().height
        // );
        // window.requestAnimationFrame(scrollImage);
        if (
            window.innerHeight - wrapperRef.current.getBoundingClientRect().top >
            window.innerHeight + wrapperRef.current.getBoundingClientRect().height
        ) {
            parallaxMobileRef.current.style.position = 'absolute';
            parallaxMobileRef.current.style.bottom = bottom;
            parallaxMobileRef.current.style.top = 'auto';
        } else if (wrapperRef.current.getBoundingClientRect().top > window.innerHeight) {
            parallaxMobileRef.current.style.position = 'absolute';
            parallaxMobileRef.current.style.bottom = bottom;
            parallaxMobileRef.current.style.top = 'auto';
        } else if (wrapperRef.current.getBoundingClientRect().top < window.innerHeight) {
            parallaxMobileRef.current.style.position = 'fixed';
            parallaxMobileRef.current.style.bottom = 0;
            parallaxMobileRef.current.style.top = 0;
        }
        // parallaxMobileRef.current.style.transform = `translateY(${window.innerHeight - wrapperRef.current.getBoundingClientRect().top}px)`;
    };
    useEffect(() => {
        setBottom(wrapperRef.current.getBoundingClientRect().height);
        window.addEventListener('scroll', onScroll);
        window.requestAnimationFrame(onScroll);
    }, []);
    return (
        <div ref={wrapperRef} className={classes.parallax}>
            <div
                ref={parallaxMobileRef}
                className={classes.ParallaxMobile}
                style={{ backgroundImage: `url(${imgUrl})`, bottom }}
            />
            <div className={classes.tint}>
                <div className={classes.TopAngle} style={{ borderLeftWidth: window.innerWidth }} />
                <div className={classes.BottomAngle} style={{ borderLeftWidth: window.innerWidth }} />
            </div>
        </div>
    );
};

export default Parallax;
