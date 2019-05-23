import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Section from '../Section/Section';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Projects from '../../components/Projects/Projects';
import Home from '../../components/Home/Home';
import Skills from '../../components/Skills/Skills';
import Parallax from '../../components/UI/Parallax/Parallax';

const initialState = {
    markActive: [false, false, false, false, false],
    animateHeader: [false, false, false, false],
    animateSkills: false,
    animateAbout: false,
};

type State = Readonly<typeof initialState>;

class Layout extends Component<object, State> {
    static isDesktop() {
        const isMobile = window.matchMedia('only screen and (min-width: 768px)');
        return isMobile.matches;
    }

    readonly state: State = initialState;

    private readonly aboutRef: React.RefObject<any>;
    private readonly workRef: React.RefObject<any>;
    private readonly contactRef: React.RefObject<any>;
    private readonly skillRef: React.RefObject<any>;
    private readonly headerRef: React.RefObject<Header>;

    constructor(props) {
        super(props);
        this.aboutRef = React.createRef<HTMLElement>();
        this.workRef = React.createRef<HTMLElement>();
        this.contactRef = React.createRef<HTMLElement>();
        this.skillRef = React.createRef<HTMLElement>();
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
            case 'skills':
                window.scrollTo(0, this.skillRef.current.offsetTop - 54);
                break;
            default:
                window.scrollTo(0, 0);
                break;
        }
    };

    addClasses = () => {
        const aboutTop = this.aboutRef.current.getBoundingClientRect().top;
        const skillTop = this.skillRef.current.getBoundingClientRect().top;
        const workTop = this.workRef.current.getBoundingClientRect().top;
        const contactTop = this.contactRef.current.getBoundingClientRect().top;
        if (contactTop <= 100 || window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            if (!this.state.markActive[4]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 4),
                });
            }
        } else if (workTop <= 100) {
            if (!this.state.markActive[3]) {
                this.setState({
                    markActive: this.state.markActive.map((_, i) => i === 3),
                });
            }
        } else if (skillTop <= 100) {
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
        this.addAnimateClass(aboutTop, skillTop, workTop, contactTop);
    };

    addAnimateClass = (aboutTop, skillTop, workTop, contactTop) => {
        const threshold = window.innerHeight / 2.8;
        if (!this.state.animateHeader.every(_ => _)) {
            this.animateHeaders(threshold, aboutTop, skillTop, workTop, contactTop);
        }
        if (!this.state.animateAbout) {
            this.animateAbout(threshold, aboutTop);
        }
        if (!this.state.animateSkills) {
            this.animateSkill(threshold, skillTop);
        }
    };

    animateHeaders(threshold, aboutTop, skillTop, workTop, contactTop) {
        // console.log(threshold + ' ' + aboutTop + ' ' + skillTop + ' ' + workTop + ' ' + contactTop);
        if (
            !this.state.animateHeader[3] &&
            (contactTop < threshold || window.innerHeight + window.scrollY >= document.body.offsetHeight)
        ) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[3] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[2] && workTop < threshold) {
            const animateHeader = this.state.animateHeader.slice();
            animateHeader[2] = true;
            this.setState({
                animateHeader,
            });
        }
        if (!this.state.animateHeader[1] && skillTop < threshold) {
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
        if (!this.state.animateAbout && aboutTop <= threshold) {
            const animateAbout = true;
            this.setState({
                animateAbout,
            });
        }
    }

    animateSkill(threshold, skillTop) {
        skillTop += 200;
        if (!this.state.animateSkills && skillTop <= threshold) {
            const animateSkills = true;
            this.setState({
                animateSkills,
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
                        title={'ABOUT me'}
                        style={{ backgroundColor: '#f0f0f0', paddingTop: '10em' }}
                    >
                        <About animateAbout={this.state.animateAbout} />
                    </Section>
                    <Parallax />
                    <Section
                        animateSlideInRight={this.state.animateHeader[1]}
                        ref={this.skillRef}
                        title={'Skills'}
                        style={{ backgroundColor: '#ffffff', paddingTop: '10em' }}
                    >
                        <Skills animate={this.state.animateSkills} />
                    </Section>
                    <div
                        style={{
                            background: 'linear-gradient(to right top, #e5e0da 50%, #ffffff 50%)',
                            height: 'calc(16px + (90 - 16) * ((100vw - 250px) / (1600 - 250)))',
                        }}
                    />
                    <Section
                        animateSlideInLeft={this.state.animateHeader[2]}
                        ref={this.workRef}
                        title={'Projects'}
                        style={{ backgroundColor: '#e5e0da' }}
                    >
                        <Projects />
                    </Section>
                    <div
                        style={{
                            background: 'linear-gradient(to right bottom, #e5e0da 50%, #f0f0f0 50%)',
                            height: 'calc(16px + (90 - 16) * ((100vw - 250px) / (1600 - 250)))',
                        }}
                    />
                    <Section
                        animateSlideInRight={this.state.animateHeader[3]}
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
