import React from 'react';

const row = props => (
    <div className={'row'} style={props.style}>
        {props.children}
    </div>
);

export default row;
