import React, { FC, useRef } from 'react';
import classes from './Skill.module.scss';

interface IProps {
    skill: string;
    percent: number;
    animate: boolean;
}

const Skill: FC<IProps> = props => {
    const progressBarRef = useRef(null);
    const progressBlockRef = useRef(null);
    const percentRef = useRef(null);
    const skillAttrNameClasses = ['opaque'];
    const skillAttrScoreClasses = ['opaque'];
    const skillProgressClasses = [classes.SkillProgress, 'opaque'];
    const skillProgressbarClasses = [classes.SkillProgressBar, 'opaque'];
    let progressBarStyle = null;
    if (props.animate) {
        skillProgressClasses.push(classes.AnimateSkillProgressSpreadOut);
        skillAttrNameClasses.push(classes.SkillNameVisible);
        skillAttrScoreClasses.push(classes.SkillValueVisible);
        progressBarStyle = {
            width: props.percent + '%',
            opacity: 1,
        };
    }
    return (
        <div className={classes.Skill}>
            <div ref={progressBlockRef} className={skillProgressClasses.join(' ')}>
                <div ref={progressBarRef} className={skillProgressbarClasses.join(' ')} style={progressBarStyle} />
            </div>
            <div className={classes.SkillAttr} style={{ width: props.percent + '%' }}>
                <strong className={skillAttrNameClasses.join(' ')}>{props.skill.toUpperCase()}</strong>
                <span ref={percentRef} className={skillAttrScoreClasses.join(' ')}>
                    {props.percent}
                </span>
            </div>
        </div>
    );
};

export default Skill;
