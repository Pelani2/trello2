import React, { useState } from "react";
import { StyledBracketIcon, StyledGlobeIconClicked, StyledHardDriveIconClicked, StyledUserIcon } from "./IconStyles";

const variantClassMap: Record<string, any> = {
    "globe-icon": StyledBracketIcon,
    "globe-icon-clicked": StyledGlobeIconClicked,
    "hard-drive-icon": StyledBracketIcon,
    "hard-drive-icon-clicked": StyledHardDriveIconClicked,
    "user-icon": StyledUserIcon,
};

interface IconProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
    onClick?: () => void;
}


const Icon: React.FC<IconProps> = ({ variant, src, alt, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    let StyledIcon;

    switch(variant) {
        case "globe-icon":
            StyledIcon = isClicked ? variantClassMap["globe-icon-clicked"] : variantClassMap["globe-icon"];
            break;
        case "hard-drive-icon":
            StyledIcon = isClicked ? variantClassMap["hard-drive-icon-clicked"] : variantClassMap["hard-drive-icon"];
            break;
        case "user-icon":
            StyledIcon = StyledUserIcon;
            break;
        default:
            return null;
    }

    const handleClick = () => {
        setIsClicked(!isClicked);
        if (onClick) {
            onClick();
        }
    };

    return (
        <StyledIcon 
            src={src}
            alt={alt}
            onClick={handleClick}
        />
    );
};

export default Icon;