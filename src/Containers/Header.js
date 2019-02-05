import React from "react";
import {HeaderWrap, Logo, LogoWrap, MenuIcon} from "./Header.styled";
import LogoFile from '../Assets/Images/logo_large.png';
import Icon from "../Components/Icon";
import posed from 'react-pose';

const Box = posed.div({
    hidden: {opacity: 0},
    visible: {opacity: 1}
});

class Header extends React.Component {
    state = {isOpen: false};


    toggleMenu = () => {
        // this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        const {isOpen} = this.state;
        return (
            <HeaderWrap>
                <MenuIcon onClick={this.toggleMenu()} pose={isOpen ? 'open' : 'close'}>Icon</MenuIcon>
                <LogoWrap>
                    <Logo src={LogoFile}/>
                </LogoWrap>
                <Icon icon="search"/>
            </HeaderWrap>
        )
    }
}

export default Header;
