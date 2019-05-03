import React from 'react';

const navigationListItem = props => {
    return (
        <li>
            <a href="/">{props.children}</a>
        </li>
    );
};

export default navigationListItem;
