import React, { Component } from 'react';
import NavigationList from './NavigationList/NavigationList';
import classes from './Header.module.scss';
import Row from '../../hoc/Row/Row';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

const initialState = { show: false, sticky: false };
type State = Readonly<typeof initialState>;

interface IProps {
    markActive: boolean[];
    clicked(e: string): void;
}

class Header extends Component<IProps, State> {
    readonly state: State = initialState;
    height = 0;
    readonly headerRef = React.createRef<HTMLElement>();

    toggleHamburgerMenu = () => {
        this.setState((prevState: State) => {
            return { show: !prevState.show };
        });
    };

    reCalcHeight = () => {
        this.height = window.innerHeight;
    };

    hideNavBar = () => {
        if (this.isMobile() && this.state.show) {
            this.setState({ show: false });
        }
    };

    isMobile = () => {
        const isMobile = window.matchMedia('only screen and (max-width: 575px)');
        return isMobile.matches;
    };

    addStickyClass = () => {
        if (!this.isMobile()) {
            if (!this.state.sticky && window.pageYOffset >= this.height + this.headerRef.current.offsetHeight - 5) {
                this.setState({
                    sticky: true,
                });
            } else if (this.state.sticky && window.pageYOffset <= this.height) {
                this.setState({
                    sticky: false,
                });
            }
        }
        this.hideNavBar();
    };

    componentDidMount(): void {
        this.height = window.innerHeight;
        window.addEventListener('resize', this.reCalcHeight);
        window.addEventListener('scroll', this.addStickyClass);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.reCalcHeight);
        window.removeEventListener('scroll', this.addStickyClass);
    }

    onNavItemClick = navItem => {
        if (this.isMobile()) {
            this.setState({
                show: false,
            });
        }
        this.props.clicked(navItem);
    };

    render() {
        const headerClass = [classes.Header, 'container-fluid', 'header-bg-color'];
        if (this.state.sticky && !this.isMobile()) {
            headerClass.push(classes.HeaderSticky);
            headerClass.push(classes.HeaderAnimate);
        } else if (this.isMobile()) {
            headerClass.push(classes.HeaderSticky);
        }
        return (
            <header ref={this.headerRef} className={headerClass.join(' ')}>
                <Row>
                    <nav className={'container'}>
                        <Row style={{ flexDirection: 'column' }}>
                            <HamburgerMenu show={this.state.show} clicked={this.toggleHamburgerMenu} />
                            <NavigationList
                                markActive={this.props.markActive}
                                show={this.state.show}
                                clicked={this.onNavItemClick}
                            />
                        </Row>
                    </nav>
                </Row>
            </header>
        );
    }
}

export default Header;
