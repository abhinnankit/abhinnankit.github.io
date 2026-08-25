import React, { useCallback, useEffect, useRef, useState } from 'react';
import classes from './Home.module.scss';
import Particles from '@tsparticles/react';
import type { ISourceOptions } from '@tsparticles/engine';
import { ReactTyped } from 'react-typed';

const Home = () => {
    const message = ["I'm a <i>full-stack</i> <b>software developer</b> with a wide array of <i>skills</i>."];
    const headerRef = useRef<HTMLParagraphElement>(null);
    const [animate, setAnimate] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const bannerTextClasses = [classes.BannerText];
    const animationEndCallback = () => {
        if (!startTyping) {
            headerRef.current.removeEventListener('transitionend', memoizedCallback);
            setStartTyping(true);
        }
    };
    const memoizedCallback = useCallback(animationEndCallback, []);
    useEffect(() => {
        const timer = window.setTimeout(() => {
            setAnimate(true);
        }, 0);
        const header = headerRef.current;
        header?.addEventListener('transitionend', memoizedCallback);

        return () => {
            window.clearTimeout(timer);
            header?.removeEventListener('transitionend', memoizedCallback);
        };
    }, [memoizedCallback]);
    const headerLineClasses = [classes.HeaderLine];
    if (animate) {
        headerLineClasses.push(classes.Animate);
    }
    return (
        <div className={classes.Home}>
            <div className={classes.BannerBlock}>
                <p ref={headerRef} className={headerLineClasses.join(' ')}>
                    Hello, I am&nbsp;
                    <strong className={headerLineClasses.join(' ')}>Abhinn Ankit</strong>
                </p>
                {startTyping ? (
                    <ReactTyped className={bannerTextClasses.join(' ')} strings={message} typeSpeed={40} />
                ) : (
                    <div style={{ height: '32px' }} />
                )}
            </div>
            <Particles
                id="tsparticles"
                className={classes.Particles}
                options={
                    {
                        particles: {
                            number: {
                                value: 160,
                                density: {
                                    enable: false,
                                },
                            },
                            size: {
                                value: {
                                    min: 0.3,
                                    max: 3,
                                },
                            },
                            links: { enable: false },
                            move: {
                                direction: 'top',
                                enable: true,
                                outModes: 'out',
                                random: true,
                                speed: 3,
                            },
                            opacity: {
                                value: {
                                    min: 0.3,
                                    max: 0.9,
                                },
                                animation: {
                                    enable: true,
                                    speed: 1,
                                    sync: false,
                                },
                            },
                        },
                        detectRetina: true,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: 'bubble',
                                },
                                onClick: {
                                    enable: true,
                                    mode: 'push',
                                },
                            },
                            modes: {
                                grab: {
                                    distance: 400,
                                    links: {
                                        opacity: 1,
                                    },
                                },
                                bubble: {
                                    distance: 250,
                                    size: 3,
                                    duration: 3,
                                    opacity: 1,
                                },
                                push: {
                                    quantity: 4,
                                },
                                remove: {
                                    quantity: 2,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                    } satisfies ISourceOptions
                }
            />
        </div>
    );
};

export default Home;
