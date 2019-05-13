import React, { FC } from 'react';
import classes from './Project.module.scss';

interface IProps {
    imgUrl: string;
}

const project: FC<IProps> = props => {
    const mainDivClass = ['col-lg-6', classes.Project];
    return (
        <>
            <div className={mainDivClass.join(' ')}>
                <img src={props.imgUrl} alt="Shopping site" className={classes.ProjectImg} />
            </div>
        </>
    );
};

export default project;
