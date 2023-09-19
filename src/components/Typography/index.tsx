import React from "react";
import { StyledPrimaryTitle, StyledDefault } from "./typographyStyles";

const variantClassMap:  Record<string, string> = {
    "primary-title": "primary-title",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({ variant, children }) => {
    let StyledTypography;

    switch(variant) {
        case 'primary-title':
            StyledTypography = StyledPrimaryTitle;
            break;
        default:
            StyledTypography = StyledDefault;
            break;
    }

    return (
        <StyledTypography>
            {children}
        </StyledTypography>
    );
};

export default Typography;