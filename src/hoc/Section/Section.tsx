import React, { Ref, RefForwardingComponent } from 'react';
import classes from './Section.module.scss';
import Container from '../Container/Container';
import Row from '../Row/Row';

interface IProps {
    title: string;
    animateZoomIn?: boolean;
    animateSlideInLeft?: boolean;
    animateSlideInRight?: boolean;
    style?: object;
}

const section: RefForwardingComponent<HTMLElement, IProps & { ref: Ref<HTMLElement> }> = React.forwardRef(
    (props, ref) => {
        const h1Classes = [classes.h1, 'opaque'];
        const sectionUnderlineClass = [classes.SectionUnderline, 'opaque', classes.AnimateUnderline];
        if (props.animateZoomIn) {
            h1Classes.push(classes.AnimateZoomIn);
            sectionUnderlineClass.push(classes.AnimateZoomIn);
        }
        if (props.animateSlideInLeft) {
            h1Classes.push(classes.AnimateSlideInLeft);
            sectionUnderlineClass.push(classes.AnimateSlideInLeft);
        }
        if (props.animateSlideInRight) {
            h1Classes.push(classes.AnimateSlideInRight);
            sectionUnderlineClass.push(classes.AnimateSlideInRight);
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
