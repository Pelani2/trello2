import styled from "styled-components";

export const StyledNavbarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transform: perspective(600px);
    transform-origin: center bottom;
`;

export const StyledNavContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`;

export const StyledVerticalBreak = styled.div`
    width: 2px;
    height: 50px;
    background-color: black;
    margin: 0 10px;
`;

export const StyledStatsAndTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
`;