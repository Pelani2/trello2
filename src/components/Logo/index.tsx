import React from "react";
import { StyledDefaultLogo, StyledPrimaryLogo } from "./logoStyles";

const variantClassMap: Record<string, string> = {
    "primary-logo": "primary-logo",
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