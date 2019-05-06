import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Section title={'ABOUT'}>
                        <About />
                    </Section>
                </main>
            </Fragment>
        );
    }
}

export default Layout;
