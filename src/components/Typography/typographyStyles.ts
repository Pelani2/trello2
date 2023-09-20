import styled from "styled-components";

export const StyledDefault = styled.div`
    font-size: 16px;
    color: #333;
`;

export const StyledPrimaryTitle = styled.div`
    font-size: 24px;
    color: #007bff;
`;

export const StyledErrorMessge = styled.div`
    color: #F44336;
    font-weight: bold;
    box-shadow: 0 0 10px #F44336;
    transition: box-shadow 0.5s ease-in-out;

    &:hover {
        box-shadow: 0 0 10px white;
    }
`;

export const StyledSuccessMessage = styled.div`
    color: #4caf50;
    font-weight: bold;
    box-shadow: 0 0 10px #4caf50;
    transition: box-shadow 0.5s ease-in-out;

    &: {
        box-shadow: 0 0 10px white;
    }
`;