import React from "react";
import {HeaderWrap, Logo, LogoWrap} from "./Header.styled";
import LogoFile from '../Assets/Images/logo_large.png';
import Icon from "../Components/Icon";
import posed from 'react-pose';

const MenuIcon = posed.div({
    closed: {
        rotate: 0,
        transition: { duration: 500 }
    },
    open: {
        rotate: 180,
        transition: { duration: 500 }
    }
});

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
                <MenuIcon pose={isOpen ? 'open' : 'closed'} onClick={this.toggleMenu}>Box</MenuIcon>
                <LogoWrap>
                    <Logo src={LogoFile}/>
                </LogoWrap>
                <Icon icon="search"/>
            </HeaderWrap>
        )
    }
}

export default Header;
