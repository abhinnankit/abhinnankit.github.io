import React from 'react';
import Project from './Project/Project';
import classes from './Projects.module.scss';
import giftedUrl from '../../assets/images/gifted/1-min.png';
import bostonEventsUrl from '../../assets/images/boston_events/1-min.png';

const projects = () => {
    const moreSection = [classes.More, 'col-12'];
    return (
        <>
            <div className={classes.Projects}>
                <Project imgUrl={giftedUrl} justifyContentStart={false} />
                <Project imgUrl={bostonEventsUrl} justifyContentStart={true} />
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

export default projects;
