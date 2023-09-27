import React from "react";
import { StyledPlus, StyledExclamation, StyledBell } from "./navbarIconStyles";

const variantClassMap = {
    "plus": StyledPlus,
    "exclamation": StyledExclamation,
    "bell": StyledBell,
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