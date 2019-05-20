import React, { FC } from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';

interface IProps {
    animateAbout: boolean;
}

const About: FC<IProps> = React.memo(props => {
    const aboutMeClasses = ['col-lg-10 col-xl-10 col-12', classes.AboutSpace, classes.Wrapper];
    return (
        <>
            <div className={aboutMeClasses.join(' ')}>
                <AboutMe animate={props.animateAbout} />
            </div>
        </>
    );
});

export default About;
