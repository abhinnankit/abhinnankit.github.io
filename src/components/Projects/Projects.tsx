import React, { useLayoutEffect, useRef, useState } from 'react';
import Project from './Project/Project';
import classes from './Projects.module.scss';
import giftedUrl from '../../assets/images/gifted/1-min.png';
import bostonEventsUrl from '../../assets/images/boston_events/1-min.png';

const Projects = () => {
    const moreSection = [classes.More, 'col-12'];
    const projectRef = useRef(null);
    const threshold = window.innerHeight / 1.6;
    const [animate, setAnimate] = useState(false);
    const scrollListener = () => {
        if (!animate && projectRef.current && projectRef.current.getBoundingClientRect().top < threshold) {
            setAnimate(true);
            window.removeEventListener('scroll', scrollListener);
        }
    };
    useLayoutEffect(() => {
        window.addEventListener('scroll', scrollListener);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className={classes.Projects} ref={projectRef}>
                <Project animate={animate} imgUrl={giftedUrl} justifyContentStart={false} />
                <Project animate={animate} imgUrl={bostonEventsUrl} justifyContentStart={true} />
            </div>
            <div className={moreSection.join(' ')}>
                More projects on&nbsp;
                <a href="https://github.com/abhinn-ankit?tab=repositories" rel="noopener noreferrer" target="_blank">
                    github
                </a>
                .
            </div>
        </>
    );
};

export default Projects;
