import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';
import Skills from './Skills/Skills';

const about = props => {
    const aboutMeClasses = ['col-xl-6', 'col-lg-10', 'col-12', classes.About, classes.AboutSpace];
    const skillClasses = ['col-xl-6', 'col-lg-10', 'col-12', classes.AboutSkill];
    return (
        <>
            <div className={aboutMeClasses.join(' ')}>
                <AboutMe />
            </div>
            <div className={skillClasses.join(' ')}>
                <Skills />
            </div>
        </>
    );
};

export default about;
