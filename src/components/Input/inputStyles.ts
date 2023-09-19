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