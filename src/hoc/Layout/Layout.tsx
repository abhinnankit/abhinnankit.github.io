import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Home from '../../components/Home/Home';

class Layout extends Component {
    static isDesktop() {
        const isMobile = window.matchMedia('only screen and (min-width: 768px)');
        return isMobile.matches;
    }

    state = {
        markActive: [false, false, false, false],
        animateHeader: [false, false, false],
        animateAbout: {
            aboutMe: false,
            skills: false,
        },
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
        this.addAnimateClass();
    };

    addAnimateClass = () => {
        const headerHeight = this.headerRef.current.height + this.headerRef.current.headerRef.current.offsetHeight;
        const aboutHeight = this.height.about + this.headerRef.current.height;
        const workHeight = aboutHeight + this.height.work;
        if (!this.state.animateHeader.every(_ => _)) {
            this.animateHeaders(headerHeight, aboutHeight, workHeight);
        }
        if (!this.state.animateAbout.aboutMe || !this.state.animateAbout.skills) {
            this.animateAbout(headerHeight);
        }
    };

    animateHeaders(headerHeight, aboutHeight, workHeight) {
        headerHeight -= 300;
        aboutHeight -= 280;
        workHeight -= 280;
        console.log(window.pageYOffset + ' ' + headerHeight + ' ' + aboutHeight + ' ' + workHeight);
        if (
            !this.state.animateHeader[2] &&
            (window.pageYOffset >= workHeight || window.innerHeight + window.scrollY >= document.body.offsetHeight)
        ) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[2] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[1] && window.pageYOffset >= aboutHeight) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[1] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[0] && window.pageYOffset >= headerHeight) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[0] = true;
            this.setState({
                animateHeader,
            });
        }
    }

    animateAbout(headerHeight) {
        headerHeight -= 200;
        if (!this.state.animateAbout.aboutMe && window.pageYOffset >= headerHeight) {
            const animateAbout = { ...this.state.animateAbout };
            animateAbout.aboutMe = true;
            this.setState({
                animateAbout,
            });
        }
        headerHeight += 300;
        // console.log(window.pageYOffset + ' ' + headerHeight);
        if (!this.state.animateAbout.skills && window.pageYOffset >= headerHeight) {
            const animateAbout = { ...this.state.animateAbout };
            animateAbout.skills = true;
            this.setState({
                animateAbout,
            });
        }
    }

    componentDidMount(): void {
        this.height.about = this.aboutRef.current.clientHeight + 156;
        this.height.work = this.workRef.current.clientHeight + 460;
        window.addEventListener('scroll', this.addClasses);
        window.addEventListener('resize', () => {
            this.height.about = this.aboutRef.current.clientHeight + 156;
            this.height.work = this.workRef.current.clientHeight + 460;
        });
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
                        animateZoomIn={this.state.animateHeader[0]}
                        ref={this.aboutRef}
                        title={'ABOUT'}
                        style={{ backgroundColor: '#f0f0f0', paddingTop: '10em' }}
                    >
                        <About animateAbout={this.state.animateAbout} />
                    </Section>
                    <div
                        style={{
                            background: 'linear-gradient(to right top, #e5e0da 50%, #f0f0f0 50%)',
                            height: '5em',
                        }}
                    />
                    <Section
                        animateSlideInLeft={this.state.animateHeader[1]}
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
                        animateSlideInRight={this.state.animateHeader[2]}
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
