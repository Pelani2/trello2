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
    isOpened: boolean;
    handleClick: () => void;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ variant, isOpened, handleClick }) => {
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
        <div onClick={handleClick}>
            <StyledIcon />
            <StyledDropdownContent isOpen={isOpened}>
                <Typography variant="notification-text">
                    Notification content
                </Typography>
            </StyledDropdownContent>
        </div>
    );
};

export default NavbarIcon;