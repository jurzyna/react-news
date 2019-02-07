import styled from "styled-components";
import {rem} from "polished";
import posed from "react-pose";

export const NewsDetailsContainer = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 300
        }
    },
    exit: {
        y: 20,
        opacity: 0,
        transition: {
            duration: 300
        }
    }
});

export const NewsDetailsWrap = styled.div`
  padding: ${rem(20)};
`;
