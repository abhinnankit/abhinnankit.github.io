import React, { Component, Fragment } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Section title={'ABOUT'}>
                    <About />
                </Section>
            </Fragment>
        );
    }
}

export default Layout;
