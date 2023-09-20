import React, { ReactNode } from "react";
import { StyledDefaultButton, StyledSubmitButton } from "./button-styles";

const variantClassMap: Record<string, string> = {
    "submit-button": "submit-button",
};

interface ButtonProps {
    variant?: keyof typeof variantClassMap;
    children: ReactNode;
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ variant, children, type }) => {
    let StyledButton;

    switch(variant) {
        case "submit-button":
            StyledButton = StyledSubmitButton;
            break;
        default:
            StyledButton = StyledDefaultButton;
            break;
    }

    return (
        <StyledButton
            type={type}
        >
            {children}
        </StyledButton>
    );
}

export default Button;