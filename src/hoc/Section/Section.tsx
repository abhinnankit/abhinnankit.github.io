import React, { Ref, RefForwardingComponent } from 'react';
import classes from './Section.module.scss';
import Container from '../Container/Container';
import Row from '../Row/Row';

interface IProps {
    title: string;
    style?: object;
}

const section: RefForwardingComponent<HTMLElement, IProps & { ref: Ref<HTMLElement> }> = React.forwardRef(
    (props, ref) => {
        return (
            <section ref={ref} className={classes.Section} style={props.style}>
                <Container>
                    <Row style={{ flexDirection: 'column' }}>
                        <h1>{props.title.toUpperCase()}</h1>
                        <div className={classes.SectionUnderline} />
                    </Row>
                    <Row>{props.children}</Row>
                </Container>
            </section>
        );
    }
);

export default section;
