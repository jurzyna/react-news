import React from "react";
import styled from "styled-components";
import {rem} from "polished";

const HeaderWrap= styled.div`
 
`;
const MenuIcon = styled.div`
 
`;

class Header extends React.Component{
    render(){
        return(
            <HeaderWrap>
                <MenuIcon>Icon</MenuIcon>

                <h1>Logo</h1>
                <h3>SearchIcon</h3>
            </HeaderWrap>
        )
    }
}

export default Header;
