import React from "react";
import { StyledFormLabel, StyledDefaultLabel, StyledRememberLabel } from "./labelStyles";

const variantClassMap: Record<string, string> = {
    "form-label": "form-label",
    "remember-label": "remember-label",
};

interface LabelProps {
    htmlFor: string;
    variant: keyof typeof variantClassMap;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, variant, children }) => {
    let StyledLabel;

    switch(variant) {
        case "form-label":
            StyledLabel = StyledFormLabel;
            break;
        case "remember-label":
            StyledLabel = StyledRememberLabel;
            break;
        default:
            StyledLabel = StyledDefaultLabel;
            break;
    }

    return (
        <StyledLabel htmlFor={htmlFor}>
            {children}
        </StyledLabel>
    );
};

export default Label;