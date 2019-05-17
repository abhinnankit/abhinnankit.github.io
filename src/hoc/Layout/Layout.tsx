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
        const aboutTop = this.aboutRef.current.getBoundingClientRect().top;
        const workTop = this.workRef.current.getBoundingClientRect().top;
        const contactTop = this.contactRef.current.getBoundingClientRect().top;
        if (contactTop <= 100 || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!this.state.markActive[3]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 3),
                });
            }
        } else if (workTop <= 100) {
            if (!this.state.markActive[2]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 2),
                });
            }
        } else if (aboutTop <= 0) {
            if (!this.state.markActive[1]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 1),
                });
            }
        } else if (aboutTop > 0) {
            if (!this.state.markActive[0]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 0),
                });
            }
        }
        this.addAnimateClass(aboutTop, workTop, contactTop);
    };

    addAnimateClass = (aboutTop, workTop, contactTop) => {
        const threshold = window.innerHeight / 2.8;
        if (!this.state.animateHeader.every(_ => _)) {
            this.animateHeaders(threshold, aboutTop, workTop, contactTop);
        }
        if (!this.state.animateAbout.aboutMe || !this.state.animateAbout.skills) {
            this.animateAbout(threshold, aboutTop);
        }
    };

    animateHeaders(threshold, aboutTop, workTop, contactTop) {
        // console.log(threshold + ' ' + aboutTop + ' ' + workTop + ' ' + contactTop);
        if (
            !this.state.animateHeader[2] &&
            (contactTop < threshold || window.innerHeight + window.scrollY >= document.body.offsetHeight)
        ) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[2] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[1] && workTop < threshold) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[1] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[0] && aboutTop < threshold) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[0] = true;
            this.setState({
                animateHeader,
            });
        }
    }

    animateAbout(threshold, aboutTop) {
        aboutTop += 200;
        if (!this.state.animateAbout.aboutMe && aboutTop <= threshold) {
            const animateAbout = { ...this.state.animateAbout };
            animateAbout.aboutMe = true;
            this.setState({
                animateAbout,
            });
        }
        aboutTop += 300;
        if (!this.state.animateAbout.skills && aboutTop <= threshold) {
            const animateAbout = { ...this.state.animateAbout };
            animateAbout.skills = true;
            this.setState({
                animateAbout,
            });
        }
    }

    componentDidMount(): void {
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
