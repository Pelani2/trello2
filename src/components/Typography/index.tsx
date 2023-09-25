import React from "react";
import { StyledPrimaryTitle, StyledDefault, StyledErrorMessge, StyledSuccessMessage, StyledLoginPrompt, StyledPassValidationMesasges, StyledSubTitle } from "./typographyStyles";

const variantClassMap:  Record<string, string> = {
    "primary-title": "primary-title",
    "error-message": "error-message",
    "success-message": "success-message",
    "login-prompt": "login-prompt",
    "pass-validation-message": "pass-validation-message",
    "sub-title": "sub-title",
};

interface TypographyProps {
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, style }) => {
    let StyledTypography;

    switch(variant) {
        case 'primary-title':
            StyledTypography = StyledPrimaryTitle;
            break;
        case 'sub-title': 
            StyledTypography = StyledSubTitle;
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
        case 'pass-validation-message':
            StyledTypography = StyledPassValidationMesasges;
            break;
        default:
            StyledTypography = StyledDefault;
            break;
    }

    return (
        <StyledTypography style={style}>
            {children}
        </StyledTypography>
    );
};

export default Typography;