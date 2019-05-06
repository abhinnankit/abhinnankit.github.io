import React from 'react';
import myImage from '../../../assets/images/sjanasjncpascmxan.jpg';
import classes from './AboutMe.module.scss';

const aboutMe = () => {
    return (
        <React.Fragment>
            <img src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            <article className={classes.article}>
                <h2>This is Abhinn Ankit!</h2>
                <p>He is a full-stack web developer from Boston.</p>
            </article>
        </React.Fragment>
    );
};

export default aboutMe;
