import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
`;

export const StyledCardTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, pink, purple, blue);
    border-radius: 20px;
    padding: 10px;
`;

export const StyledCardContentWrapper = styled.div`
    border: 1px solid black;
    width: 100%;
    display: flex;
`;