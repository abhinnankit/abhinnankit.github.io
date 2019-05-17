import React, { Ref, RefForwardingComponent } from 'react';
import classes from './Section.module.scss';
import Container from '../Container/Container';
import Row from '../Row/Row';

interface IProps {
    title: string;
    animateH1ZoomIn?: boolean;
    style?: object;
}

const section: RefForwardingComponent<HTMLElement, IProps & { ref: Ref<HTMLElement> }> = React.forwardRef(
    (props, ref) => {
        const h1Classes = [classes.h1, classes.opaque];
        const sectionUnderlineClass = [classes.SectionUnderline, classes.opaque];
        if (props.animateH1ZoomIn) {
            h1Classes.push(classes.animateZoomIn);
            sectionUnderlineClass.push(classes.animateZoomIn);
        }
        return (
            <section ref={ref} className={classes.Section} style={props.style}>
                <Container>
                    <Row style={{ flexDirection: 'column' }}>
                        <h1 className={h1Classes.join(' ')}>{props.title.toUpperCase()}</h1>
                        <div className={sectionUnderlineClass.join(' ')} />
                    </Row>
                    <Row>{props.children}</Row>
                </Container>
            </section>
        );
    }
);

export default section;
