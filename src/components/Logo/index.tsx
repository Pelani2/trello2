import React from "react";
import { StyledDefaultLogo, StyledPrimaryLogo, StyledNavbarLogo, StyledNavbarStatsIcon } from "./logoStyles";

const variantClassMap: Record<string, string> = {
    "primary-logo": "primary-logo",
    "navbar-logo": "navbar-logo",
    "navbar-stats-icon": "navbar-stats-icon",
};

interface LogoProps {
    variant: keyof typeof variantClassMap;
    src: string;
    alt?: string;
}

const Logo: React.FC<LogoProps> = ({ variant, src, alt }) => {
    let StyledLogo;

    switch(variant) {
        case 'primary-logo':
            StyledLogo = StyledPrimaryLogo;
            break;
        case 'navbar-logo':
            StyledLogo = StyledNavbarLogo;
            break;
        case 'navbar-stats-icon':
            StyledLogo = StyledNavbarStatsIcon;
            break;
        default:
            StyledLogo = StyledDefaultLogo;
            break;
    }

    return (
        <StyledLogo 
            src={src}
            alt={alt}
        />
    );
};

export default Logo;