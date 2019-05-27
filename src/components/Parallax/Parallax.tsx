import React, { useEffect, useRef, useState } from 'react';
import classes from './Parallax.module.scss';
import imgUrl from '../../assets/images/banner.png';

const Parallax = () => {
    const wrapperRef = useRef(null);
    const parallaxMobileRef = useRef(null);
    const [bottom, setBottom] = useState(0);
    const [resized, setResized] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.matchMedia('only screen and (max-width: 525px)').matches) {
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
            } else {
                parallaxMobileRef.current.style.backgroundAttachment = 'fixed';
            }
        };
        const updateAngles = () => {
            const resize = !resized;
            setResized(resize);
        };
        setBottom(wrapperRef.current.getBoundingClientRect().height);
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', updateAngles);
        onScroll();
        return () => {
            window.removeEventListener('resize', updateAngles);
            window.removeEventListener('scroll', onScroll);
        };
    }, [bottom, resized]);
    return (
        <div ref={wrapperRef} className={classes.parallax}>
            <div
                ref={parallaxMobileRef}
                className={classes.ParallaxMobile}
                style={{ backgroundImage: `url(${imgUrl})` }}
            />
            <div className={classes.tint}>
                <div className={classes.TopAngle} style={{ borderLeftWidth: window.innerWidth }} />
                <div className={classes.BottomAngle} style={{ borderLeftWidth: window.innerWidth }} />
            </div>
        </div>
    );
};

export default Parallax;
