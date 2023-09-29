import React from "react";
import { StyledImage1 } from "./ImageStyles";

const variantClassMap: Record<string, any> = {
    "image1": StyledImage1,
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