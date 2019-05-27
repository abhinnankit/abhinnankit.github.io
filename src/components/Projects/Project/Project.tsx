import React, { FC, useState } from 'react';
import classes from './Project.module.scss';
import Modal from '../Modal/Modal';

interface IProps {
    imgUrl: string;
    justifyContentStart: boolean;
    animate: boolean;
    title: string;
    technologies: string;
}

const Project: FC<IProps> = props => {
    const [showDetails, setShowDetails] = useState(false);
    const mainDivClass = ['col-md-6 col-lg-5', classes.Project, classes.p0];
    if (props.justifyContentStart) {
        mainDivClass.push(classes.ProjectFlexStart, classes.AnimateLate);
    } else {
        mainDivClass.push(classes.ProjectFlexEnd);
    }
    if (props.animate) {
        mainDivClass.push(classes.Animate);
    }
    const closeDetailsHandler = () => {
        setShowDetails(false);
    };
    const openDetailsHandler = () => {
        setShowDetails(true);
    };
    return (
        <>
            <Modal show={showDetails} modalClosed={closeDetailsHandler}>
                show me
            </Modal>
            <div className={mainDivClass.join(' ')}>
                <div className={classes.ProjectInfo}>
                    <div className={classes.ProjectInfoTextWrapper}>
                        <h2 className={classes.Title}>{props.title}</h2>
                        <p className={classes.Technologies}>{props.technologies}</p>
                    </div>
                    <button type="button" className={classes.Button} onClick={openDetailsHandler}>
                        Know More
                    </button>
                </div>
                <img width="570" height="400" src={props.imgUrl} alt="Shopping site" className={classes.ProjectImg} />
            </div>
        </>
    );
};

export default Project;
