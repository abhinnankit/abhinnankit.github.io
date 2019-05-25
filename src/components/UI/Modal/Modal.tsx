import React, { FC } from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.scss';
import { ReactComponent as Close } from '../../../assets/images/svg/close.svg';

interface IProps {
    show: boolean;
    modalClosed(): void;
}

const Modal: FC<IProps> = React.memo(props => {
    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-180vh)',
                    opacity: props.show ? 1 : 0,
                }}
                className={classes.Modal}
            >
                <Close
                    onClick={props.modalClosed}
                    className={[classes.close, 'svg-inline--fa fa-times-square fa-w-14 fa-2x'].join(' ')}
                />
                {props.children}
            </div>
        </>
    );
});

export default Modal;
