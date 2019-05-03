import React from 'react';
import PropTypes from 'prop-types';
import NavigationList from './NavigationList/NavigationList';

const header = props => {
    return (
        <header>
            <nav>
                <NavigationList />
            </nav>
        </header>
    );
};

header.propTypes = {};

export default header;
