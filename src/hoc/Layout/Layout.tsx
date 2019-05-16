import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Home from '../../components/Home/Home';

class Layout extends Component {
    state = {
        markActive: [false, false, false, false],
    };

    private readonly aboutRef: React.RefObject<any>;
    private readonly workRef: React.RefObject<any>;
    private readonly contactRef: React.RefObject<any>;
    private readonly headerRef: React.RefObject<Header>;

    constructor(props) {
        super(props);
        this.aboutRef = React.createRef<HTMLElement>();
        this.workRef = React.createRef<HTMLElement>();
        this.contactRef = React.createRef<HTMLElement>();
        this.headerRef = React.createRef<Header>();
    }

    linkClicked = navItem => {
        switch (navItem.toLowerCase()) {
            case 'about':
                window.scrollTo(0, this.aboutRef.current.offsetTop + 57);
                break;
            case 'work':
                window.scrollTo(0, this.workRef.current.offsetTop - 54);
                break;
            case 'contact':
                window.scrollTo(0, this.contactRef.current.offsetTop - 54);
                break;
            default:
                window.scrollTo(0, 0);
                break;
        }
    };

    addClasses = () => {
        const headerHeight = this.headerRef.current.height + this.headerRef.current.headerRef.current.offsetHeight - 53;
        const aboutHeight = this.aboutRef.current.offsetHeight + this.headerRef.current.height - 55;
        const workHeight = aboutHeight + this.workRef.current.offsetHeight;
        if (window.pageYOffset >= workHeight || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!this.state.markActive[3]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 3),
                });
            }
        } else if (window.pageYOffset >= aboutHeight) {
            if (!this.state.markActive[2]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 2),
                });
            }
        } else if (window.pageYOffset >= headerHeight) {
            if (!this.state.markActive[1]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 1),
                });
            }
        } else if (window.pageYOffset >= 0) {
            if (!this.state.markActive[0]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 0),
                });
            }
        }
    };

    componentDidMount(): void {
        window.addEventListener('scroll', this.addClasses);
        this.addClasses();
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.addClasses);
    }

    render() {
        if (window.matchMedia('only screen and (min-width: 1440px)')) {
        }
        return (
            <>
                <Home />
                <Header ref={this.headerRef} clicked={this.linkClicked} markActive={this.state.markActive} />
                <main>
                    <Section
                        ref={this.aboutRef}
                        title={'ABOUT'}
                        style={{ backgroundColor: '#f0f0f0', paddingTop: '10em' }}
                    >
                        <About />
                    </Section>
                    <div
                        style={{ background: 'linear-gradient(to right top, #e5e0da 50%, #f0f0f0 50%)', height: '5em' }}
                    />
                    <Section ref={this.workRef} title={'Projects'} style={{ backgroundColor: '#e5e0da' }}>
                        <Projects />
                    </Section>
                    <div
                        style={{
                            background: 'linear-gradient(to right bottom, #e5e0da 50%, #f0f0f0 50%)',
                            height: '5em',
                        }}
                    />
                    <Section ref={this.contactRef} title="contact" style={{ backgroundColor: '#f0f0f0' }}>
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
