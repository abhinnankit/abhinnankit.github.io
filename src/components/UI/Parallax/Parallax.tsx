import React from 'react';
import classes from './Parallax.module.scss';
import imgUrl from '../../../assets/images/banner.png';

const Parallax = () => {
    return (
        <div className={classes.parallax} style={{ backgroundImage: `url(${imgUrl})` }}>
            <div className={classes.tint}>
                <div className={classes.TopAngle} />
                <div className={classes.BottomAngle} />
            </div>
        </div>
    );
};

export default Parallax;
