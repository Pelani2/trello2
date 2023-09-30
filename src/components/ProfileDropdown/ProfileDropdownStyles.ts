import styled, { css } from "styled-components";

interface DropdownProps {
    open?: boolean;
}

export const StyledProfileDropdown = styled.div<DropdownProps>`
    position: absolute;
    right: 0;
    top: 100%;
    color: black;
    width: 200px;
    background-color: red;
    transform: translateY(- 100%); // Initial state
    opacity: 0; // Initial state
    pointer-events: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    ${props => props.open && css`
        transform: translateY(0); // Final state
        opacity: 1; // Final state
        pointer-events: auto;
    `}
`;