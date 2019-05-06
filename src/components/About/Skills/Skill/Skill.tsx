import React, { FC } from 'react';

interface IProps {
    skill: string;
    percent: number;
}

const skill: FC<IProps> = props => {
    return (
        <div>
            <div>{props.skill}</div>
            <span>{props.percent}</span>
        </div>
    );
};

export default skill;
