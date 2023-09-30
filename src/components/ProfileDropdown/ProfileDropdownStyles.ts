import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

interface DropdownProps {
    open?: boolean;
}

export const StyledProfileDropdown = styled.div<DropdownProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 100%;
    width: 200px;
    transform: translateY(-100%);
    opacity: 0; 
    pointer-events: none;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    ${props => props.open && css`
        transform: translateY(0);
        opacity: 1; 
        pointer-events: auto;
    `}

    background-color: black;
    border: 2px solid lime;
    border-radius: 10px;
    box-shadow: 0 0 10px lime;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, transparent, lime, transparent);
        animation: slide 2s infinite;
    }

    @keyframes slide {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(100%);
        }
    }
`;

export const StyledProfileLogoutLink = styled(Link)`
    color: lime;
    text-shadow: 0 0 5px lime, 0 0 10px lime, 0 0 15px lime, 0 0 20px lime;
    animation: pulse 2s infinite;
    background-color: black;
    border: 2px solid lime;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    text-decoration: none;

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
`;