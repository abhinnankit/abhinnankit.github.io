import React from 'react';
import classes from './Parallax.module.scss';

const Parallax = () => {
    return (
        <div className={classes.parallax}>
            <div className={classes.tint}>
                <div
                    style={{
                        background: 'linear-gradient(to right top, transparent 50%, #f0f0f0 50%)',
                        height: '5em',
                    }}
                />
                <div style={{ height: '12em' }} />
                <div
                    style={{
                        background: 'linear-gradient(to right top, #f0f0f0 50%, transparent 50%)',
                        height: '5em',
                    }}
                />
            </div>
        </div>
    );
};

export default Parallax;
