import styled from "styled-components";

export const StyledDefault = styled.div`
    font-size: 16px;
    color: white;
`;

export const StyledPrimaryTitle = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: #7B1FA2;
    text-shadow: 1px 1px 0 black;
`;

export const StyledErrorMessge = styled.div`
    color: #F44336;
    font-weight: bold;
    box-shadow: 0 0 10px #F44336;
    transition: box-shadow 0.5s ease-in-out;
    text-align: left;
    width: 390px;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0 0 10px white;
    }
`;

export const StyledSuccessMessage = styled.div`
    color: #4caf50;
    font-weight: bold;
    box-shadow: 0 0 10px #4caf50;
    transition: box-shadow 0.5s ease-in-out;
    margin-bottom: 10px;

    &:hover {
        box-shadow: 0 0 10px white;
    }

    &::after {
        content: ' ✅';
        margin-left: 10px;
    }
`;

export const StyledLoginPrompt = styled.div`
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const StyledPassValidationMesasges = styled.div`
    color: #333;
    font-size: 0.9rem;
    text-align: left;
`;

export const StyledSubTitle = styled.div`
    font-size: 14px;
    color: black;
    font-weight: bold;
    text-align: center;
    margin: 10px;
`;

export const StyledNavbarText = styled.div`
    font-size: 18px;
    color: black;
`;

export const StyledNotificationText = styled.div`
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledBracketText = styled.div`
    font-size: 1.7rem;
    color: #333;
    line-height: 1.6;
    letter-spacing: 0.05em;
`;

export const StyledProfileOptionsText = styled.div`
    position: relative;
    z-index: 1;
    color: white;
    font-family: "Courier New", monospace;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        color: lime;
    }
`;