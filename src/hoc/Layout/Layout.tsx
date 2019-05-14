import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';

class Layout extends Component {
    render() {
        return (
            <>
                <Header />
                <main>
                    <Section title={'ABOUT'} style={{ backgroundColor: '#18191a' }}>
                        <About />
                    </Section>
                    <Section title={'Projects'} style={{ backgroundColor: '#131415' }}>
                        <Projects />
                    </Section>
                    <Section title="contact" style={{ backgroundColor: '#1a1c1c' }}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
