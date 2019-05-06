import React, { Component } from 'react';
import NavigationList from '../../components/NavigationList/NavigationList';
import classes from './Header.module.scss';
import Row from '../../hoc/Row/Row';
import HamburgerMenu from '../../components/UI/HamburgerMenu/HamburgerMenu';

const initialState = { show: false };
type State = Readonly<typeof initialState>;

class Header extends Component<object, State> {
    readonly state: State = initialState;

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

    componentDidMount(): void {
        window.addEventListener('resize', this.hideNavBar);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.hideNavBar);
    }

    render() {
        const headerClass = [classes.Header, 'container-fluid'];
        return (
            <header className={headerClass.join(' ')}>
                <Row>
                    <nav className={'container'}>
                        <Row style={{ flexDirection: 'column' }}>
                            <HamburgerMenu clicked={this.toggleHamburgerMenu} />
                            <NavigationList show={this.state.show} />
                        </Row>
                    </nav>
                </Row>
            </header>
        );
    }
}

export default Header;
