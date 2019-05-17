import React, { FC } from 'react';
import Skill from './Skill/Skill';
import classes from './Skills.module.scss';

interface IProps {
    animate: boolean;
}

const skills: FC<IProps> = props => {
    const technologies = {
        java: 80,
        javascript: 80,
        typescript: 85,
        html: 95,
        css: 90,
        scss: 85,
        react: 80,
        angular: 85,
        'spring boot': 65,
        express: 65,
        aws: 70,
        circleci: 65,
    };
    const firstSpanClasses = ['opaque'];
    const secondSpanClasses = ['opaque'];
    if (props.animate) {
        firstSpanClasses.push(classes.animateSpanSlideInLeft);
        secondSpanClasses.push(classes.animateSpanSlideInRight);
    }
    return (
        <div className={classes.Skills}>
            <h2>
                <span className={firstSpanClasses.join(' ')}>TECHNO</span>
                <span className={secondSpanClasses.join(' ')}>LOGIES</span>
            </h2>
            {Object.keys(technologies).map(technology => (
                <Skill key={technology} animate={props.animate} skill={technology} percent={technologies[technology]} />
            ))}
        </div>
    );
};

export default skills;
