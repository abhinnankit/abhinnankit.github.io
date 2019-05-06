import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';

const about = props => {
    const sectionClasses = ['col-xl-6', 'col-12', classes.About, classes.justifyContentEvenly];
    return (
        <div className={sectionClasses.join(' ')}>
            <AboutMe />
        </div>
    );
};

export default about;
