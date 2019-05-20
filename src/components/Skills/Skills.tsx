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
    const skillsClasses = ['col-12', 'col-lg-6', classes.Skills];
    const expertiseClasses = ['col-12', 'col-lg-6'];
    const firstSpanClasses = ['opaque'];
    const secondSpanClasses = ['opaque'];
    if (props.animate) {
        firstSpanClasses.push(classes.AnimateSlideInLeft);
        secondSpanClasses.push(classes.AnimateSlideInRight);
    }
    return (
        <>
            <div className={expertiseClasses.join(' ')} />
            <div className={skillsClasses.join(' ')}>
                <h2>
                    <span className={firstSpanClasses.join(' ')}>WHAT&nbsp;</span>
                    <span className={secondSpanClasses.join(' ')}>I KNOW</span>
                </h2>
                {Object.keys(technologies).map(technology => (
                    <Skill
                        key={technology}
                        animate={props.animate}
                        skill={technology}
                        percent={technologies[technology]}
                    />
                ))}
            </div>
        </>
    );
};

export default skills;
