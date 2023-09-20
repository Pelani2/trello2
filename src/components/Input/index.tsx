import React from "react";
import { StyledFormInput, StyledDefaultInput } from "./inputStyles";

const variantClassMap: Record<string, string> = {
    "form-input": "form-input",
};

interface InputProps {
    variant: keyof typeof variantClassMap;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    type: string;
}

const Input: React.FC<InputProps> = ({
    name,
    placeholder,
    value,
    onChange,
    onBlur,
    variant,
    type,
}) => {
    let StyledInput;

    switch(variant) {
        case "form-input":
            StyledInput = StyledFormInput;
            break;
        default: 
            StyledInput = StyledDefaultInput;
            break;
    }

    return (
        <StyledInput
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
        />
    );
};

export default Input;