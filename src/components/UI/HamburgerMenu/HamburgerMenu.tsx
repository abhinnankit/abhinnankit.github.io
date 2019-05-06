import React, { MouseEvent, FC } from 'react';
import classes from './HamburgerMenu.module.scss';

interface IProps {
    show: boolean;
    clicked(e: MouseEvent<HTMLElement>): void;
}

const hamburgerMenu: FC<IProps> = props => {
    const bar1Class = [classes.bar1];
    const bar2Class = [classes.bar2];
    const bar3Class = [classes.bar3];
    if (props.show) {
        bar1Class.push(classes.change);
        bar2Class.push(classes.change);
        bar3Class.push(classes.change);
    }
    return (
        <div className={classes.HamburgerMenu} onClick={props.clicked}>
            <div className={bar1Class.join(' ')} />
            <div className={bar2Class.join(' ')} />
            <div className={bar3Class.join(' ')} />
        </div>
    );
};

export default hamburgerMenu;
