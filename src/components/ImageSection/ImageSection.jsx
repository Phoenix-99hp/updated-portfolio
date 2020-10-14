import React from 'react';
import ImageItem from "../ImageItem/ImageItem";

const ImageSection = ({ images }) => {
    return (
        <>
            {images.map((image, index) => (
                <ImageItem key={index} link={image.link} source={image.source} title={image.title} />
            ))}
        </>
    )
}

export default ImageSection
