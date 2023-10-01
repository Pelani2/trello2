import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 360px;
    margin: 10px;
`;

export const StyledCardTitleWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(to right, pink, purple, blue);
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const StyledCardContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(to right, pink, purple, blue);
    border-radius: 20px;
    padding: 10px;
    gap: 20px;
`;

export const StyledCardStatWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
`;

export const StyledCardIconAndText = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

export const StyledIconAndTextGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;