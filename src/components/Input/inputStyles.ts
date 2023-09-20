import styled from "styled-components";

export const StyledFormInput = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;

    ::placeholder {
        color: #999;
    }

    &:hover,
    &:focus {
        border-color: #007bff;
    }
`;

export const StyledDefaultInput = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 14px;
    outline: none;

    ::placeholder {
        color: #999;
    }

    &:hover,
    &:focus {
        border-color: #007bff;
    }
`;