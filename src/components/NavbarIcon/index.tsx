import React, { useState } from "react";
import { StyledPlus, StyledExclamation, StyledBell, StyledDropdownContent } from "./NavbarIconStyles";
import Typography from "../Typography";

const variantClassMap = {
    "plus": StyledPlus,
    "exclamation": StyledExclamation,
    "bell": StyledBell,
};

interface NavbarIconProps {
    variant: keyof typeof variantClassMap;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ variant }) => {
    const [isOpen, setIsOpen] = useState(false);
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
        <div onClick={() => setIsOpen(!isOpen)}>
            <StyledIcon />
            <StyledDropdownContent isOpen={isOpen}>
                <Typography variant="notification-text">
                    Some dropdown content
                </Typography>
            </StyledDropdownContent>
        </div>
    );
};

export default NavbarIcon;