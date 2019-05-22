import React, { FC } from 'react';
import myImage from '../../../assets/images/me.jpg';
import classes from './AboutMe.module.scss';
// @ts-ignore
import resumeLink from '../../../assets/doc/resume.pdf';

interface IProps {
    animate: boolean;
}

const aboutMe: FC<IProps> = props => {
    const figureClasses = [classes.Figure, 'opaque'];
    const articleClasses = [classes.article, 'opaque'];
    if (props.animate) {
        figureClasses.push(classes.AnimateFigure);
        articleClasses.push(classes.AnimateArticle);
    }
    return (
        <React.Fragment>
            <article className={articleClasses.join(' ')}>
                <p>
                    I am a graduate student at Northeastern University in Boston. I strive to create visually appealing
                    web apps and websites with intuitive design and clear navigation, accompanied by modern and
                    efficient backend.
                </p>
                <p>
                    I've interned at Amadeus North America, where I brought ideas to life by building prototypes and
                    also, developed web apps using state-of-the-art technologies.&nbsp;
                </p>
                <p>
                    <a className={classes.link} href={resumeLink} download="Abhinn_Ankit_resume">
                        Download my resume.
                    </a>
                </p>
            </article>
            <figure className={figureClasses.join(' ')}>
                <div />
                <img width="224" height="271" src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            </figure>
        </React.Fragment>
    );
};

export default aboutMe;
