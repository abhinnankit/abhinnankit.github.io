import React, { FC } from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';

interface IProps {
    animateAbout: boolean;
}

const About: FC<IProps> = React.memo((props) => {
    const aboutMeClasses = ['col-12', classes.AboutSpace];
    return (
        <>
            <div className={aboutMeClasses.join(' ')}>
                <AboutMe animate={props.animateAbout} />
            </div>
        </>
    );
});

export default About;
