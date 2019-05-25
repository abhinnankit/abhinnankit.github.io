import React, { FC } from 'react';
import classes from './Project.module.scss';

interface IProps {
    imgUrl: string;
    justifyContentStart: boolean;
}

const project: FC<IProps> = props => {
    const mainDivClass = ['col-lg-6', classes.Project, classes.p0];
    if (props.justifyContentStart) {
        mainDivClass.push(classes.ProjectFlexStart);
    } else {
        mainDivClass.push(classes.ProjectFlexEnd);
    }
    return (
        <>
            <div className={mainDivClass.join(' ')}>
                <img src={props.imgUrl} alt="Shopping site" className={classes.ProjectImg} />
            </div>
        </>
    );
};

export default project;
