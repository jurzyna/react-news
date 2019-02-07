import React from 'react';
import {ArticleDetailsImageWrap, Frame, Image} from "./StyledComponents/ArticleDetailsImage.styled";
import PropTypes from "prop-types";

class ArticleDetailsImage extends React.Component {
    state = {
        isZoomed: false,
        imageContainerHeight: 0
    };

    zoomIn() {
        window.addEventListener('scroll', this.zoomOut);
        this.setState({isZoomed: true});
    }

    zoomOut = () => {
        window.removeEventListener('scroll', this.zoomOut);
        this.setState({isZoomed: false});
    };

    toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

    componentDidMount() {
        const height = this.imageElem.clientHeight;
        this.setState({imageContainerHeight: height});
    }

    render() {
        const {isZoomed, imageContainerHeight} = this.state;
        const pose = isZoomed ? 'zoom' : 'init';
        const {urlToImage} = this.props;

        return (
            <ArticleDetailsImageWrap
                height={imageContainerHeight}
                onClick={this.toggleZoom}>
                <Frame pose={pose}/>
                <Image pose={pose} src={urlToImage} ref={(imageElem) => this.imageElem = imageElem}/>
            </ArticleDetailsImageWrap>
        );
    }
}

export default ArticleDetailsImage;

ArticleDetailsImage.propTypes = {
    urlToImage: PropTypes.string.isRequired
};

