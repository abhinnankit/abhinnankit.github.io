import React, { FC } from 'react';
import Backdrop from './Backdrop/Backdrop';
import classes from './Modal.module.scss';
import { ReactComponent as Close } from '../../../assets/images/svg/close.svg';
import Row from '../../../hoc/Row/Row';
import Carousel from './Carousel/Carousel';

interface IProps {
    show: boolean;
    title: string;
    description: string;
    about: string;
    carImgUrls: string[];

    modalClosed(): void;
}

const Modal: FC<IProps> = React.memo((props) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };
    return (
        <>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={'container ' + classes.ModalContainer}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-180vh)',
                    opacity: props.show ? 1 : 0,
                }}
            >
                <Row onClick={props.modalClosed}>
                    <div className={['col-12 col-md-10 col-lg-6', classes.Modal].join(' ')} onClick={stopPropagation}>
                        <span className={classes.close} onClick={props.modalClosed}>
                            <Close className={['svg-inline--fa fa-times-square fa-w-14'].join(' ')} />
                        </span>
                        <Carousel carImgUrls={props.carImgUrls} />
                        <div className={classes.CarouselInfo}>
                            <h2 className={classes.Title}>{props.title}</h2>
                            <h4 className={classes.About}>{props.about}</h4>
                            <p className={classes.Description}>{props.description}</p>
                        </div>
                    </div>
                </Row>
            </div>
        </>
    );
});

export default Modal;
