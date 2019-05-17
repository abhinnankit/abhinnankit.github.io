import React, { FC } from 'react';
import myImage from '../../../assets/images/me.jpg';
import classes from './AboutMe.module.scss';

interface IProps {
    animate: boolean;
}

const aboutMe: FC<IProps> = props => {
    const figureClasses = [classes.Figure, 'opaque'];
    const articleClasses = [classes.article, 'opaque'];
    if (props.animate) {
        figureClasses.push(classes.animateFigure);
        articleClasses.push(classes.animateArticle);
    }
    return (
        <React.Fragment>
            <figure className={figureClasses.join(' ')}>
                <img src={myImage} alt={'Abhinn Ankit'} className={classes.img} />
            </figure>
            <article className={articleClasses.join(' ')}>
                <h3>Summary</h3>
                <p>
                    Innovative and enthusiastic full-stack developer with good understanding of software development
                    life cycle. Well-read in various computer languages as well as the principles and techniques of
                    website development and maintenance.Proficient at conveying complex technical information in a lucid
                    manner.
                </p>

                {/*<h2>ABHINN ANKIT</h2>*/}
                {/*<h3>Full-stack web developer</h3>*/}
                {/*<p>A versatile developer from Boston.</p>*/}
                {/*<p>I strive to create visually appealing sites with intuitive design and clear navigation.</p>*/}
            </article>
        </React.Fragment>
    );
};

export default aboutMe;
