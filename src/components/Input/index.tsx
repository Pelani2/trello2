import React from "react";
import { StyledFormInput } from "./inputStyles";

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
}