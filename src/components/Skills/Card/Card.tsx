import React, { FC } from 'react';
import classes from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    return (
        <div className={wrapperClasses.join(' ')}>
            <div className={imageClasses.join(' ')}>
                <FontAwesomeIcon icon={props.icon} className="fa-2x" />
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
