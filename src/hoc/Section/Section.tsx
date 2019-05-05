import React from 'react';
import PropTypes from 'prop-types';
import classes from './Section.module.scss';

const section = props => {
    return (
        <section className={classes.Section}>
            <div className={'container'}>
                <h1>{props.title}</h1>
                <div className={classes.SectionBlock} />
            </div>
        </section>
    );
};

section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default section;
