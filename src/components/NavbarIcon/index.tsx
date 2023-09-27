import React from "react";
import { AiOutlinePlus, AiOutlineExclamation, AiOutlineBell } from "react-icons/ai";

const variantClassMap = {
    "plus": AiOutlinePlus,
    "exclamation": AiOutlineExclamation,
    "bell": AiOutlineBell,
};

interface NavbarIconProps {
    variant: keyof typeof variantClassMap;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ variant }) => {
    let StyledIcon;
    switch (variant) {
        case "plus":
            StyledIcon = variantClassMap.plus;
            break;
        case "exclamation":
            StyledIcon = variantClassMap.exclamation;
            break;
        case "bell":
            StyledIcon = variantClassMap.bell;
            break;
        default:
            return null;
    }

    return (
        <StyledIcon />
    );
};

export default NavbarIcon;