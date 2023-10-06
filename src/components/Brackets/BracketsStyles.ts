import styled from "styled-components";

interface WrapperProps {
    smallMargin?: boolean;
    respMargin?: boolean;
}

export const StyledBracketsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    @media (max-width: 321px) {
        width: 321px;
    }
`;

export const StyledBracketsIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 321px) {
        gap: 10px;
        justify-content: space-between;
    }
`;

export const StyledPublicWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;

    @media (max-width: 321px) {
        gap: 10px;
    }
`;

export const StyledBracketsAndIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const StyledIconsAndMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;

export const StyledUserIconWrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > * {
        margin-right: ${(props) => (props.smallMargin ? '-12px' : '-20px')};
    }

    & > :last-child {
        margin-right: 0;
    }

    @media (max-width: 321px) {
        
    }
`;