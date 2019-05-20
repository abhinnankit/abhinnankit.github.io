import React, { useEffect, useRef, useState } from 'react';
import classes from './Home.module.scss';
import Particles from 'react-particles-js';
import Typed from 'react-typed';

const Home = () => {
    // 'I\'m a <i>full-stack</i> <b>versatile</b> <i>developer</i> from <b>Boston</b>.',
    // 'I strive to <i>create</i> visually appealing sites with <i>intuitive</i> <b>design</b> and <i>clear</i>' +
    // ' <b>navigation</b>.',
    const message = ["I'm a <i>versatile</i> <b>software developer</b> with diverse set of skills."];
    const headerRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const [startTyping, setStartTyping] = useState(false);
    const bannerTextClasses = [classes.BannerText];
    const animationEndCallback = () => {
        if (!startTyping) {
            headerRef.current.removeEventListener('transitionend', animationEndCallback);
            setStartTyping(true);
        }
    };
    useEffect(() => {
        setAnimate(true);
        headerRef.current.addEventListener('transitionend', animationEndCallback);
        // eslint-disable-next-line
    }, []);
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
                    <Typed className={bannerTextClasses.join(' ')} strings={message} typeSpeed={40} />
                ) : (
                    <div style={{ height: '32px' }} />
                )}
            </div>
            <Particles
                className={classes.Particles}
                params={{
                    particles: {
                        number: {
                            value: 160,
                            density: {
                                enable: false,
                                value_area: 789.1476416322727,
                            },
                        },
                        size: {
                            value: 3,
                            random: true,
                            anim: {
                                speed: 4,
                                size_min: 0.3,
                            },
                        },
                        line_linked: {
                            enable: false,
                        },
                        move: {
                            random: true,
                            speed: 1,
                            direction: 'top',
                            out_mode: 'out',
                        },
                    },
                    interactivity: {
                        detect_on: 'canvas',
                        events: {
                            onhover: {
                                enable: true,
                                mode: 'bubble',
                            },
                            onclick: {
                                enable: true,
                                mode: 'push',
                            },
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                            bubble: {
                                distance: 250,
                                size: 3,
                                duration: 3,
                                opacity: 1,
                                speed: 3,
                            },
                            push: {
                                particles_nb: 4,
                            },
                            remove: {
                                particles_nb: 2,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                }}
            />
        </div>
    );
};

export default Home;
