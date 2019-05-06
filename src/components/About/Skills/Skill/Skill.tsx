import React, { FC } from 'react';
import classes from './Skill.module.scss';

interface IProps {
    skill: string;
    percent: number;
}

const skill: FC<IProps> = props => {
    return (
        <div className={classes.Skill}>
            <div className={classes.SkillProgress}>
                <div className={classes.SkillProgressBar} style={{ width: props.percent + '%' }} />
            </div>
            <div className={classes.SkillName}>
                <strong>{props.skill.toUpperCase()}, %</strong>
                <span>{props.percent}</span>
            </div>
        </div>
    );
};

export default skill;
