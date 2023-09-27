import React from "react";
import { StyledNavbarProfileIcon } from "./ProfileIconStyles";

const variantClassMap: Record<string, string> = {
    "navbar-profile-icon": "navbar-profile-icon",
};

interface PorfileIconProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
}

const ProfileIcon: React.FC<PorfileIconProps> = ({ variant, src, alt }) => {
    let StyledProfileIcon;

    switch(variant) {
        case "navbar-profile-icon":
            StyledProfileIcon = StyledNavbarProfileIcon;
            break;
        default:
            return null;
    }

    return (
        <StyledProfileIcon 
            src={src}
            alt={alt}
        />
    );
};

export default ProfileIcon;