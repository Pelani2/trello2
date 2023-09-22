import styled from "styled-components";

export const StyledDefaultLogo = styled.img`

`;

export const StyledPrimaryLogo = styled.img`
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: rotate(180deg);
    }
`;