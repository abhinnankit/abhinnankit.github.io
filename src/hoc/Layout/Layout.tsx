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
                    <Section title={'ABOUT'} style={{ backgroundColor: 'rgba(250,250,250, 0.8)' }}>
                        <About />
                    </Section>
                    <Section title={'Projects'}>
                        <Projects />
                    </Section>
                    <Section title="contact" style={{ backgroundColor: 'rgba(250,250,250, 0.8)' }}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
