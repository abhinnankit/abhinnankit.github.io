import React from 'react';
import NavigationList from './NavigationList/NavigationList';
import classes from './Header.module.scss';

const header = props => {
    const headerClass = [classes.Header, 'container-fluid'];
    return (
        <header className={headerClass.join(' ')}>
            <nav className={'container'}>
                <NavigationList />
            </nav>
        </header>
    );
};

header.propTypes = {};

export default header;
