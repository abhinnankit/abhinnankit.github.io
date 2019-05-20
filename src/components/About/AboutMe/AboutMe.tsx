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
                    I am a graduate student at Northeastern University in Boston. I'm well versed in various computer
                    languages as well as the principles and techniques of website development and maintenance.
                </p>
                <p>
                    I strive to create visually appealing sites with intuitive design and clear navigation. I've
                    interned at Amadeus North America, where I brought ideas to life by building prototypes.&nbsp;
                    <a className={classes.link} href={resumeLink} download="Abhinn_Ankit_resume">
                        Download my resume.
                    </a>
                </p>
                {/*<p>A versatile developer from Boston.</p>*/}
                {/*<p>I strive to create visually appealing sites with intuitive design and clear navigation.</p>*/}
            </article>
            <figure className={figureClasses.join(' ')}>
                <div />
                <img src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            </figure>
        </React.Fragment>
    );
};

export default aboutMe;
