import React, { Component, Ref } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Home from '../../components/Home/Home';

class Layout extends Component {
    private readonly aboutRef: React.RefObject<any>;
    private readonly workRef: React.RefObject<any>;
    private readonly contactRef: React.RefObject<any>;

    private navItems = ['Home', 'About', 'Work', 'Contact'];

    constructor(props) {
        super(props);
        this.aboutRef = React.createRef<HTMLElement>();
        this.workRef = React.createRef<HTMLElement>();
        this.contactRef = React.createRef<HTMLElement>();
    }

    linkClicked = navItem => {
        switch (navItem) {
            case this.navItems[1]:
                window.scrollTo(0, this.aboutRef.current.offsetTop + 60);
                break;
            case this.navItems[2]:
                window.scrollTo(0, this.workRef.current.offsetTop - 60);
                break;
            case this.navItems[3]:
                window.scrollTo(0, this.contactRef.current.offsetTop - 60);
                break;
            default:
                window.scrollTo(0, 0);
                break;
        }
    };

    render() {
        return (
            <>
                <Home />
                <Header clicked={this.linkClicked} />
                <main>
                    <Section
                        ref={this.aboutRef}
                        title={'ABOUT'}
                        style={{ backgroundColor: '#18191a', paddingTop: '10em' }}
                    >
                        <About />
                    </Section>
                    <Section ref={this.workRef} title={'Projects'} style={{ backgroundColor: '#131415' }}>
                        <Projects />
                    </Section>
                    <Section ref={this.contactRef} title="contact" style={{ backgroundColor: '#1a1c1c' }}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
