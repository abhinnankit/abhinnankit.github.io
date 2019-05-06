import React from 'react';
import NavigationList from './NavigationList/NavigationList';
import classes from './Header.module.scss';
import Row from '../../hoc/Row/Row';
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

const header = props => {
    const headerClass = [classes.Header, 'container-fluid'];
    return (
        <header className={headerClass.join(' ')}>
            <Row>
                <nav className={'container'}>
                    <Row style={{ flexDirection: 'column' }}>
                        <HamburgerMenu />
                        <NavigationList />
                    </Row>
                </nav>
            </Row>
        </header>
    );
};

header.propTypes = {};

export default header;
