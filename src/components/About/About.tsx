import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import classes from './About.module.scss';

const about = props => {
    const sectionClasses = ['col-md-6', 'col-12', classes.About];
    return (
        <section className={sectionClasses.join(' ')}>
            <AboutMe />
        </section>
    );
};

about.propTypes = {};

export default about;
