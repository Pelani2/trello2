import styled from "styled-components";

export const StyledDefaultButton = styled.button`
    background-color: #2196F3;
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
        background-color: #64B5F6;
    }
`;

export const StyledSubmitButton = styled.button`
    background: linear-gradient(to right, #2196F3, #64B5F6);
    color: white;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition: transform 0.3s ease-out;
    width: 100%;
    font-size: 1rem;

    &:hover {
        transform: scale(1.1) translateZ(0);
    }
`;

export const StyledSearchBarButton = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;

    svg {
        font-size: 20px;
        color: #333;
    }
`;