import React, { FC, useState } from 'react';
import classes from './Project.module.scss';
import Modal from '../../UI/Modal/Modal';

interface IProps {
    imgUrl: string;
    justifyContentStart: boolean;
    animate: boolean;
}

const Project: FC<IProps> = props => {
    const [showDetails, setShowDetails] = useState(false);
    const mainDivClass = ['col-lg-6', classes.Project, classes.p0];
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
                <img
                    onClick={openDetailsHandler}
                    width="570"
                    height="400"
                    src={props.imgUrl}
                    alt="Shopping site"
                    className={classes.ProjectImg}
                />
            </div>
        </>
    );
};

export default Project;
