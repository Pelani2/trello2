import styled, { css } from "styled-components";

interface DropdownProps {
    open?: boolean;
}

export const StyledProfileDropdown = styled.div<DropdownProps>`
    position: absolute;
    right: 0;
    top: 100%;
    width: 200px;
    background-color: red;
    transform: translateY(-100%);
    opacity: 0; 
    pointer-events: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    ${props => props.open && css`
        transform: translateY(0);
        opacity: 1; 
        pointer-events: auto;
    `}
`;