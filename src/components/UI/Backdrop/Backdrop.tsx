import React, { FC } from 'react';
import classes from './Backdrop.module.scss';

interface IProps {
    show: boolean;
    clicked(): void;
}

const Backdrop: FC<IProps> = React.memo(props => {
    return props.show ? <div className={classes.Backdrop} onClick={props.clicked} /> : null;
});

export default Backdrop;
