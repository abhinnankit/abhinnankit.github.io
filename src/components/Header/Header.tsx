import React, { Component } from 'react';
import NavigationList from './NavigationList/NavigationList';
import classes from './Header.module.scss';
import Row from '../../hoc/Row/Row';
import HamburgerMenu from '../UI/HamburgerMenu/HamburgerMenu';

const initialState = { show: false, sticky: false };
type State = Readonly<typeof initialState>;

interface IProps {
    clicked(e: string): void;
}

class Header extends Component<IProps, State> {
    readonly state: State = initialState;
    private readonly headerRef = React.createRef<HTMLElement>();
    private height = 0;

    toggleHamburgerMenu = () => {
        this.setState((prevState: State) => {
            return { show: !prevState.show };
        });
    };

    hideNavBar = () => {
        if (this.state) {
            this.setState({ show: false });
        }
    };

    isMobile = () => {
        const isMobile = window.matchMedia('only screen and (max-width: 760px)');
        return isMobile.matches;
    };

    addStickyClass = () => {
        console.dir(this.height + this.headerRef.current.offsetHeight);
        console.log(window.pageYOffset);
        if (!this.state.sticky && window.pageYOffset >= this.height + this.headerRef.current.offsetHeight) {
            this.setState({
                sticky: true,
            });
        } else if (this.state.sticky && window.pageYOffset <= this.height) {
            this.setState({
                sticky: false,
            });
        }
    };

    componentDidMount(): void {
        this.height = this.headerRef.current.offsetTop;
        window.addEventListener('resize', this.hideNavBar);
        window.addEventListener('scroll', this.addStickyClass);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.hideNavBar);
        window.removeEventListener('scroll', this.addStickyClass);
    }

    render() {
        const headerClass = [classes.Header, 'container-fluid', 'header-bg-color'];
        if (this.state.sticky) {
            headerClass.push(classes.HeaderSticky);
            if (!this.isMobile()) {
                headerClass.push(classes.HeaderAnimate);
            }
        }
        return (
            <header ref={this.headerRef} className={headerClass.join(' ')}>
                <Row>
                    <nav className={'container'}>
                        <Row style={{ flexDirection: 'column' }}>
                            <HamburgerMenu show={this.state.show} clicked={this.toggleHamburgerMenu} />
                            <NavigationList show={this.state.show} clicked={this.props.clicked} />
                        </Row>
                    </nav>
                </Row>
            </header>
        );
    }
}

export default Header;
