import React, { FC } from 'react';
import classes from './SkillsLayout.module.scss';

interface IProps {
    animate: boolean;
    firstHalfHeader: string;
    secondHalfHeader: string;
}

const SkillsLayout: FC<IProps> = props => {
    const skillsClasses = ['col-12', 'col-lg-6', classes.Wrapper];
    const firstSpanClasses = ['opaque'];
    const secondSpanClasses = ['opaque'];
    if (props.animate) {
        firstSpanClasses.push(classes.AnimateSlideInLeft);
        secondSpanClasses.push(classes.AnimateSlideInRight);
    }
    return (
        <div className={skillsClasses.join(' ')}>
            <h2>
                <span className={firstSpanClasses.join(' ')}>{props.firstHalfHeader}&nbsp;</span>
                <span className={secondSpanClasses.join(' ')}>{props.secondHalfHeader}</span>
            </h2>
            {props.children}
        </div>
    );
};

export default SkillsLayout;
