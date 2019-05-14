import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';
import Skills from './Skills/Skills';

const about = props => {
    const aboutMeClasses = ['col-12', classes.AboutSpace];
    const skillClasses = ['col-12', classes.AboutSkill];
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
