import React from 'react';

const row = (props) => (
    <div className={'row'} style={props.style} onClick={props.onClick}>
        {props.children}
    </div>
);

export default row;
