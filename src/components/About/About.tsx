import React, { FC, useEffect } from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';
import Skills from './Skills/Skills';

interface IProps {
    animateAbout: {
        aboutMe: boolean;
        skills: boolean;
    };
}

const About: FC<IProps> = React.memo(props => {
    const aboutMeClasses = ['col-lg-10 col-xl-10 col-12', classes.AboutSpace];
    const skillClasses = ['col-lg-10 col-xl-10 col-12', classes.AboutSkill];
    return (
        <>
            <div className={aboutMeClasses.join(' ')}>
                <AboutMe animate={props.animateAbout.aboutMe} />
            </div>
            <div className={skillClasses.join(' ')}>
                <Skills animate={props.animateAbout.skills} />
            </div>
        </>
    );
});

export default About;
