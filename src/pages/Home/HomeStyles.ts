import styled from "styled-components";

export const StyledHomeCardsWrapper = styled.div`
    display: flex;

    @media (max-width: 321px) {
        flex-direction: column;   
    }
`;

export const StyledHomeContainer = styled.div`
    width: min-content;

    @media (max-width: 321px) {
        width: 321px;
    }
`;