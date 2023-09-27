import React from "react";
import { StyledBracketsIcon } from "./IconStyles";

const variantClassMap: Record<string, string> = {
    "brackets-icon": "brackets-icon",
};

interface IconProps {
    variant: keyof typeof variantClassMap;
}


const Icon: React.FC<IconProps> = ({ variant }) => {
    let StyledIcon;

    switch(variant) {
        case "brackets-icon":
            StyledIcon = StyledBracketsIcon;
            break;
        default:
            return null;
    }
    return (
        <StyledIcon />
    );
};

export default Icon;