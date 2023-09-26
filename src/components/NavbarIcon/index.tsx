import React from "react";
import { AiOutlinePlus, AiOutlineExclamation, AiOutlineBell } from "react-icons/ai";

const variantClassMap = {
    "plus": "plus",
    "exclamation": "exclamation",
    "bell": "bell",
};

interface NavbarIconProps {
    variant: keyof typeof variantClassMap;
}

const NavbarIcon: React.FC<NavbarIconProps> = ({ variant }) => {
    let StyledIcon;
    switch (variant) {
        case "plus":
            break;
        case "exclamation":
            break;
        case "bell":
            break;
        default:
            break;
    }

    return (
        <StyledIcon />
    );
}