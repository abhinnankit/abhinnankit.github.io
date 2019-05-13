import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.scss';
import giftedUrl from '../../assets/images/gifted/1-min.png';

const projects = () => {
    const moreSection = [classes.More, 'col-12'];
    return (
        <>
            <div className={classes.Projects}>
                <Project imgUrl={giftedUrl} />
            </div>
            <div className={moreSection.join(' ')}>
                You can find more projects on&nbsp;
                <a href="https://github.com/abhinn-ankit" rel="noopener noreferrer" target="_blank">
                    github
                </a>
                .
            </div>
        </>
    );
};

export default projects;
