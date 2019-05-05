import React from 'react';
import AboutMe from './AboutMe/AboutMe';

const about = props => {
    const sectionClasses = ['col-md-6', 'col-12'];
    return (
        <section className={sectionClasses.join(' ')} style={{ display: 'flex' }}>
            <AboutMe />
        </section>
    );
};

about.propTypes = {};

export default about;
