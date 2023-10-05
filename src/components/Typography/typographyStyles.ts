import styled from "styled-components";

interface TextProps {
    smallFont?: boolean;
}

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

    @media (max-width: 321px) {
        display: none;
    }
`;

export const StyledNotificationText = styled.div`
    font-size: 16px;
    color: #333;
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledBracketText = styled.div<TextProps>`
    font-size: 30px;
    color: #333;
    line-height: 1.6;
    letter-spacing: 0.05em;
`;

export const StyledProfileOptionsText = styled.div`
    position: relative;
    z-index: 1;
    color: white;
    font-size: 16px;
    margin: 10px;
    cursor: pointer;
    text-shadow: 3px 3px 0 rgba(0,0,0,0.2);

    &:hover {
        color: #ff69b4;
        text-shadow: none;
    }
`;

export const StyledCardTitle = styled.div`
    color: white;
    text-shadow: 0 0 5px black, 0 0 10px black, 0 0 15px black, 0 0 20px black;
    font-size: 32px;
    font-weight: bold;
    perspective: 500px;
    transition: transform 0.3s;

    &:hover {
        transform: rotateY(180deg);
    }
`;

export const StyledCardBodyText = styled.div<TextProps>`
    color: white;
    text-shadow: 0 0 2px black, 0 0 4px black, 0 0 6px black, 0 0 8px black;
    font-size: ${(props) => (props.smallFont ? '12px' : '16px')};
    font-weight: normal;
`;

export const StyledCardSubText = styled.div`
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9em;
    text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
`;