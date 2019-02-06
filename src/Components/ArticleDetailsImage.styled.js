import posed from "react-pose";
import styled from "styled-components";

export const ArticleDetailsImageWrap = styled.div`
  overflow: hidden;
  height: ${props => props.height}px;
`;

const FramePoseProps = {
    init: {
        applyAtEnd: {display: 'none'},
        opacity: 0
    },
    zoom: {
        applyAtStart: {display: 'block'},
        opacity: 1
    }
};

export const Frame = styled(posed.div(FramePoseProps))`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    background: white;
    transform: translateZ(0);
`;

const transition = {
    duration: 400,
    ease: [0.08, 0.69, 0.2, 0.99]
};

const ImagePoseProps = {
    init: {
        position: 'static',
        width: 'auto',
        height: 'auto',
        transition,
        scale: 1.2,
        flip: true
    },
    zoom: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        transition,
        flip: true
    }
};

export const Image = styled(posed.img(ImagePoseProps))`
  cursor: zoom-in;
  display: block;
  max-width: 100%;
  margin: auto;
`;
