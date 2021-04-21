import React, { FC, useRef } from 'react';
import classes from './Backdrop.module.scss';

interface IProps {
    show: boolean;
    clicked(): void;
}

const Backdrop: FC<IProps> = React.memo((props) => {
    const backdropRef = useRef(null);
    if (!props.show) {
        document.body.style.overflowY = 'auto';
    } else {
        document.body.style.overflowY = 'hidden';
    }
    return <>{props.show ? <div ref={backdropRef} className={classes.Backdrop} onClick={props.clicked} /> : null}</>;
});

export default Backdrop;
