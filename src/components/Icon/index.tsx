import React from "react";
import { StyledBracketsIcon } from "./IconStyles";

const variantClassMap: Record<string, string> = {
    "brackets-icon": "brackets-icon",
};

interface IconProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
}


const Icon: React.FC<IconProps> = ({ variant, src, alt }) => {
    let StyledIcon;

    switch(variant) {
        case "brackets-icon":
            StyledIcon = StyledBracketsIcon;
            break;
        default:
            return null;
    }
    return (
        <StyledIcon 
            src={src}
            alt={alt}
        />
    );
};

export default Icon;