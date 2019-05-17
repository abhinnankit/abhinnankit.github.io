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
        animateHeader: [false, false, false],
    };

    height = {
        work: 0,
        about: 0,
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

    isDesktop() {
        const isMobile = window.matchMedia('only screen and (min-width: 768px)');
        return isMobile.matches;
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
        const workHeight = aboutHeight + this.workRef.current.offsetHeight + 80;
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
        if (this.isDesktop()) {
            this.addAnimateClass();
        }
    };

    addAnimateClass = () => {
        const headerHeight =
            this.headerRef.current.height + this.headerRef.current.headerRef.current.offsetHeight - 330;
        const aboutHeight = this.height.about + this.headerRef.current.height - 330;
        const workHeight = aboutHeight + this.height.work;
        if (window.pageYOffset >= workHeight || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!this.state.animateHeader[2]) {
                const animateHeader = this.state.animateHeader.slice();
                animateHeader[2] = true;
                this.setState({
                    animateHeader,
                });
            }
        } else if (window.pageYOffset >= aboutHeight) {
            if (!this.state.animateHeader[1]) {
                const animateHeader = this.state.animateHeader.slice();
                animateHeader[1] = true;
                this.setState({
                    animateHeader,
                });
            }
        } else if (window.pageYOffset >= headerHeight) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[0] = true;
            if (!this.state.animateHeader[0]) {
                this.setState({
                    animateHeader,
                });
            }
        }
    };

    componentDidMount(): void {
        this.height.about = this.aboutRef.current.clientHeight + 156;
        this.height.work = this.workRef.current.clientHeight + 460;
        window.addEventListener('scroll', this.addClasses);
    }

    componentWillUnmount(): void {
        window.removeEventListener('scroll', this.addClasses);
    }

    render() {
        return (
            <>
                <Home />
                <Header ref={this.headerRef} clicked={this.linkClicked} markActive={this.state.markActive} />
                <main>
                    <Section
                        animateH1ZoomIn={this.state.animateHeader[0]}
                        ref={this.aboutRef}
                        title={'ABOUT'}
                        style={{ backgroundColor: '#f0f0f0', paddingTop: '10em' }}
                    >
                        <About />
                    </Section>
                    <div
                        style={{ background: 'linear-gradient(to right top, #e5e0da 50%, #f0f0f0 50%)', height: '5em' }}
                    />
                    <Section
                        animateH1ZoomIn={this.state.animateHeader[1]}
                        ref={this.workRef}
                        title={'Projects'}
                        style={{ backgroundColor: '#e5e0da' }}
                    >
                        <Projects />
                    </Section>
                    <div
                        style={{
                            background: 'linear-gradient(to right bottom, #e5e0da 50%, #f0f0f0 50%)',
                            height: '5em',
                        }}
                    />
                    <Section
                        animateH1ZoomIn={this.state.animateHeader[2]}
                        ref={this.contactRef}
                        title="contact"
                        style={{ backgroundColor: '#f0f0f0' }}
                    >
                        <Contact />
                    </Section>
                </main>
                <Footer />
            </>
        );
    }
}

export default Layout;
