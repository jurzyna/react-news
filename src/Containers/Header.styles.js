import styled from "styled-components";
import {rem} from "polished";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  height: ${rem(55)};
  padding: 0 ${rem(20)};
`;
export const MenuIcon = styled.div`
  flex: 0 0 ${rem(40)};
`;

export const LogoWrap = styled.div`
  display: flex;
  flex: 1 1 auto;
`;
export const Logo = styled.img`
    src: url(${props => props.src});
    height: ${rem(30)};
    width: auto;
`;
