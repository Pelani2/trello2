import styled from "styled-components";

interface NavbarProps {
    color?: string;
}

export const StyledNavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    @media (max-width: 321px) {
        width: 100%;
        padding: 30px;
    }
`;

export const StyledNavContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 321px) {
        justify-content: flex-start;
        gap: 10px;
    }

`;

export const StyledVerticalBreak = styled.div`
    width: 2px;
    height: 50px;
    background-color: ${props => props.color || "black"};
    margin: 0 10px;
    
    @media (max-width: 321px) {
        width: 1px;
        height: 25px;
        margin: 0;
    }
`;

export const StyledStatsAndTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;