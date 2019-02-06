import React from "react";
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
    state = {isOpen: false};

    toggleMenu = () => {
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    };

    render() {
        const {isOpen} = this.state;
        return (
            <HeaderWrap>
                <HamburgerMenu pose={isOpen ? 'open' : 'closed'} onClick={this.toggleMenu}>
                    <HamburgerMenuTop />
                    <HamburgerMenuMiddle />
                    <HamburgerMenuBottom />
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
