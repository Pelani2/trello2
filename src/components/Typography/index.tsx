import React from "react";
import { StyledPrimaryTitle, StyledDefault, StyledErrorMessge, StyledSuccessMessage, StyledLoginPrompt } from "./typographyStyles";

const variantClassMap:  Record<string, string> = {
    "primary-title": "primary-title",
    "error-message": "error-message",
    "success-message": "success-message",
    "login-prompt": "login-prompt",
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
        case 'error-message':
            StyledTypography = StyledErrorMessge;
            break;
        case 'success-message':
            StyledTypography = StyledSuccessMessage;
            break;
        case 'login-prompt':
            StyledTypography = StyledLoginPrompt;
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