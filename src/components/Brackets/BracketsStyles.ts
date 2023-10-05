import styled from "styled-components";

interface WrapperProps {
    smallMargin?: boolean;
}

export const StyledBracketsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
`;

export const StyledBracketsIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const StyledPublicWrapper = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
`;

export const StyledBracketsAndIconsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 100px;

    @media (max-width: 321px) {
        
    }
`;

export const StyledIconsAndMenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 450px;
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
        margin-left: 80px;
    }
`;