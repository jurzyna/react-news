import React from "react";
import ReactRouterPropTypes from 'react-router-prop-types';

import {
    HamburgerMenu,
    HamburgerMenuBottom,
    HamburgerMenuMiddle,
    HamburgerMenuTop,
    HeaderWrap,
    Logo,
    LogoWrap
} from "./Header.styled";
import LogoFile from '../Assets/Images/logo_large.png';
import Icon from "./Icon";

class Header extends React.Component {

    toggleMenu = () => {
        if (!this.props.match.isExact) {
            this.props.history.push('/');
        }
    };

    render() {
        return (
            <HeaderWrap>
                <HamburgerMenu pose={this.props.match.isExact ? 'closed' : 'open'} onClick={this.toggleMenu}>
                    <HamburgerMenuTop/>
                    <HamburgerMenuMiddle/>
                    <HamburgerMenuBottom/>
                </HamburgerMenu>
                <LogoWrap>
                    <Logo src={LogoFile}/>
                </LogoWrap>
                <Icon icon="search"/>
            </HeaderWrap>
        )
    }
}

export default Header;


Header.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
};
