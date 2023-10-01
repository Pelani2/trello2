import React, { useState } from "react";
import { StyledBracketIcon, StyledGlobeIconClicked, StyledHardDriveIconClicked, StyledUserIcon, StyledHeart, StyledMeatballsIcon, StyledMessageBoxIcon, StyledAttachmentIcon } from "./IconStyles";

const variantClassMap: Record<string, any> = {
    "globe-icon": StyledBracketIcon,
    "globe-icon-clicked": StyledGlobeIconClicked,
    "hard-drive-icon": StyledBracketIcon,
    "hard-drive-icon-clicked": StyledHardDriveIconClicked,
    "user-icon": StyledUserIcon,
    "heart-icon": StyledHeart,
    "meatballs-icon": StyledMeatballsIcon,
    'message-box-icon': StyledMessageBoxIcon,
    'attachment-icon': StyledAttachmentIcon,
};

interface IconProps {
    variant: keyof typeof variantClassMap;
    src?: string;
    alt?: string;
    onClick?: () => void;
    small?: boolean;
    colorScheme?: string;
}


const Icon: React.FC<IconProps> = ({ variant, src, alt, onClick, small, colorScheme }) => {
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
        case "heart-icon":
            StyledIcon = StyledHeart;
            break;
        case "meatballs-icon":
            StyledIcon = StyledMeatballsIcon;
            break;
        case 'message-box-icon':
            StyledIcon = StyledMessageBoxIcon;
            break;
        case 'attachment-icon':
            StyledIcon = StyledAttachmentIcon;
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
            small={small}
            colorScheme={colorScheme}
            isClicked={isClicked}
        />
    );
};

export default Icon;