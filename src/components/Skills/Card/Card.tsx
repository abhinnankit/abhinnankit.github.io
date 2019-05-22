import React, { FC } from 'react';
import classes from './Card.module.scss';

interface IProps {
    icon: any;
    headerPart1: string;
    headerPart2: string;
    description: string;
    animate: boolean;
}

const Card: FC<IProps> = props => {
    const wrapperClasses = ['row', classes.Wrapper];
    const imageClasses = ['col-3', classes.Card];
    const descClasses = ['col-9', classes.CardDescription];
    if (props.animate) {
        wrapperClasses.push(classes.Animate);
    }
    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={imageClasses.join(' ')}>
                <span className={classes.TopMargin}>
                    <span>{props.icon}</span>
                </span>
            </div>
            <div className={descClasses.join(' ')}>
                <h3>{props.headerPart1}</h3>
                <h3>{props.headerPart2}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;
