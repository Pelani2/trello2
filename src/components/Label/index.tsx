import React from "react";
import { StyledFormLabel, StyledDefaultLabel } from "./labelStyles";

const variantClassMap: Record<string, string> = {
    "form-label": "form-label",
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