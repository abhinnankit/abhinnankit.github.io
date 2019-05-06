import React from 'react';
import myImage from '../../../assets/images/sjanasjncpascmxan.jpg';
import classes from './AboutMe.module.scss';

const aboutMe = () => {
    return (
        <React.Fragment>
            <img src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            <article className={classes.article}>
                <p>Hello! My name is Abhinn Ankit.</p>
                <p>I am a Full-stack developer</p>
            </article>
        </React.Fragment>
    );
};

export default aboutMe;
