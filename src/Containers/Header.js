import React from "react";
import PropTypes from 'prop-types';
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
import Icon from "../Components/Icon";

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

// TODO add prop types for history and match
Header.propTypes = {
    history: PropTypes.object,
    match: PropTypes.object
};
