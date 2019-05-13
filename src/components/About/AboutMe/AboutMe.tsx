import React from 'react';
import myImage from '../../../assets/images/me.jpg';
import classes from './AboutMe.module.scss';

const aboutMe = () => {
    return (
        <React.Fragment>
            <figure className={classes.Figure}>
                <img src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            </figure>
            <article className={classes.article}>
                <h2>ABHINN ANKIT</h2>
                <h3>Full-stack web developer</h3>
                <p>I'm a full-stack web developer from Boston.</p>
                <p>I strive to create visually appealing sites with intuitive design and clear navigation.</p>
            </article>
        </React.Fragment>
    );
};

export default aboutMe;
