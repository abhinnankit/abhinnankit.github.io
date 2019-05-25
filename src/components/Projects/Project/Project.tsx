import React, { FC } from 'react';
import classes from './Project.module.scss';

interface IProps {
    imgUrl: string;
    justifyContentStart: boolean;
    animate: boolean;
}

const project: FC<IProps> = props => {
    const mainDivClass = ['col-lg-6', classes.Project, classes.p0];
    if (props.justifyContentStart) {
        mainDivClass.push(classes.ProjectFlexStart);
    } else {
        mainDivClass.push(classes.ProjectFlexEnd);
    }
    if (props.animate) {
        mainDivClass.push(classes.Animate);
    }
    return (
        <>
            <div className={mainDivClass.join(' ')}>
                <img width="570" height="400" src={props.imgUrl} alt="Shopping site" className={classes.ProjectImg} />
            </div>
        </>
    );
};

export default project;
