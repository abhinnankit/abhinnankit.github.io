import React from 'react';
import classes from './Expertise.module.scss';

const Expertise = () => {
    const wrapperClasses = [classes.Wrapper];
    return (
        <div className={wrapperClasses.join(' ')}>
            <h2>What I Work on</h2>
        </div>
    );
};

export default Expertise;
