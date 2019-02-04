import React from "react";
import {HeaderWrap, Logo, LogoWrap, MenuIcon} from "./Header.styles";
import LogoFile from '../Assets/Images/logo_large.png';
import Icon from "../Components/Icon";

class Header extends React.Component{
    render(){
        return(
            <HeaderWrap>
                <MenuIcon>Icon</MenuIcon>
                <LogoWrap>
                    <Logo src={LogoFile}/>
                </LogoWrap>
                <Icon icon="search"/>
            </HeaderWrap>
        )
    }
}

export default Header;
