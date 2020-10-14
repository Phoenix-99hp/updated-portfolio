import React, { useState } from 'react';
// import LazyLoad from 'react-lazy-load';
import { StyledLazyLoad } from "./ImageItemStyle";


const ImageItem = ({ source, link, title }) => {

    const [isVisible, setIsVisible] = useState(false);

    const handleImgClick = () => {
        window.open(link);
    }

    return (
        <div>
            <StyledLazyLoad isVisible={isVisible} height={210} width={210}>
                <img onClick={handleImgClick} onLoad={() => setIsVisible(true)} src={source} />
            </StyledLazyLoad>
            <div><a href={link}
                target={"_blank"} rel={"noreferrer"}>{title}</a>
            </div>
        </div>
    )
}

export default ImageItem