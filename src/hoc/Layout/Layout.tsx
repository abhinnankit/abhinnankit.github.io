import React, { Component, Fragment } from 'react';
import Header from '../../containers/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <main>
                    <Section title={'ABOUT'} style={{ backgroundColor: 'rgba(250,250,250, 0.8)' }}>
                        <About />
                    </Section>
                    <Section title={'Projects'}>a</Section>
                    <Section title="contact" style={{ backgroundColor: 'rgba(250,250,250, 0.8)' }}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </Fragment>
        );
    }
}

export default Layout;
