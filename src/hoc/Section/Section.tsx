import React from 'react';
import PropTypes from 'prop-types';
import classes from './Section.module.scss';
import Container from '../Container/Container';
import Row from '../Row/Row';

const section = props => {
    return (
        <section className={classes.Section}>
            <Container>
                <Row style={{ flexDirection: 'column' }}>
                    <h1>{props.title}</h1>
                    <div className={classes.SectionBlock} />
                </Row>
                <Row>{props.children}</Row>
            </Container>
        </section>
    );
};

section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default section;
