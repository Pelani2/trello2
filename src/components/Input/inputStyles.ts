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

export const StyledSearchBarInput = styled.input`
    width: 100%;
    border: none;
    background-color: transparent;
    font-size: 16px;
    color: #333;
    outline: none;

    &::placeholder {
        color: #999;
    }
`;

export const StyledDefaultInput = styled.input`
    
`;