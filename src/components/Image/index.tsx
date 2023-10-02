import React from "react";
import { StyledImage1, StyledCardImage } from "./ImageStyles";

const variantClassMap: Record<string, any> = {
    "image1": StyledImage1,
    "card-image": StyledCardImage,
};

interface ImageProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
}

const Image: React.FC<ImageProps> = ({ variant, src, alt}) => {
    let StyledImage = variantClassMap[variant];

    switch (variant) {
        case "image1": 
            StyledImage = StyledImage1;
            break;
        case 'card-image':
            StyledImage = StyledCardImage;
            break;
        default:
            return null;
    }

    return (
        <StyledImage 
            src={src}
            alt={alt}
        />
    );
};

export default Image;