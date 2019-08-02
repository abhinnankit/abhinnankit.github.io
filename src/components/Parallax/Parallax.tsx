import React, { useEffect, useRef, useState } from 'react';
import classes from './Parallax.module.scss';
import imgUrl from '../../assets/images/banner.png';

const Parallax = () => {
    const wrapperRef = useRef(null);
    const parallaxMobileRef = useRef(null);
    const [resized, setResized] = useState(false);
    const [crappyBrowser, setCrappyBrowser] = useState(false);

    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');
    const trident = ua.indexOf('Trident/');

    useEffect(() => {
        if (trident > 0 || msie > 0) {
            setCrappyBrowser(true);
        }
        const onScroll = () => {
            if (crappyBrowser || window.matchMedia('only screen and (max-width: 767px)').matches) {
                if (wrapperRef.current.getBoundingClientRect().bottom < 0) {
                    parallaxMobileRef.current.style.position = 'scroll';
                    parallaxMobileRef.current.style.top = 0;
                } else if (wrapperRef.current.getBoundingClientRect().top > window.innerHeight) {
                    parallaxMobileRef.current.style.position = 'scroll';
                    parallaxMobileRef.current.style.top = 0;
                } else if (wrapperRef.current.getBoundingClientRect().top < window.innerHeight) {
                    parallaxMobileRef.current.style.position = 'fixed';
                    parallaxMobileRef.current.style.bottom = 0;
                    parallaxMobileRef.current.style.top = 0;
                }
            } else {
                parallaxMobileRef.current.style.backgroundAttachment = 'fixed';
                window.removeEventListener('scroll', onScroll);
            }
        };
        const updateAngles = () => {
            if (window.matchMedia('only screen and (max-width: 767px)').matches) {
                window.addEventListener('scroll', onScroll);
            }
            const resize = !resized;
            setResized(resize);
        };
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', updateAngles);
        onScroll();
        return () => {
            window.removeEventListener('resize', updateAngles);
            window.removeEventListener('scroll', onScroll);
        };
    }, [resized, msie, trident, crappyBrowser]);
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
