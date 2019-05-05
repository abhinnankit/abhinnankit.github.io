import React from 'react';
import NavigationList from './NavigationList/NavigationList';

const header = props => {
    return (
        <header className={'container-fluid'}>
            <nav className={'container'}>
                <NavigationList />
            </nav>
        </header>
    );
};

header.propTypes = {};

export default header;
