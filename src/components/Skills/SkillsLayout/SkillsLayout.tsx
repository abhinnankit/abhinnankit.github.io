import React, { FC } from 'react';
import classes from './SkillsLayout.module.scss';

interface IProps {
    animate: boolean;
    firstHalfHeader: string;
    secondHalfHeader: string;
    colClass: string;
}

const SkillsLayout: FC<IProps> = props => {
    const skillsClasses = [props.colClass, classes.Wrapper];
    const firstSpanClasses = ['opaque'];
    const secondSpanClasses = ['opaque'];
    const headerWrapperClasses = [classes.HeaderWrapper];
    if (props.animate) {
        firstSpanClasses.push(classes.AnimateSlideInLeft);
        secondSpanClasses.push(classes.AnimateSlideInRight);
        headerWrapperClasses.push(classes.Animate);
    }
    return (
        <div className={skillsClasses.join(' ')}>
            <div className={headerWrapperClasses.join(' ')}>
                <h2 className={props.firstHalfHeader === 'EXPER' ? classes.LessMarginTop : null}>
                    <span className={firstSpanClasses.join(' ')}>{props.firstHalfHeader}</span>
                    <span className={secondSpanClasses.join(' ')}>{props.secondHalfHeader}</span>
                </h2>
            </div>
            {props.children}
        </div>
    );
};

export default SkillsLayout;
