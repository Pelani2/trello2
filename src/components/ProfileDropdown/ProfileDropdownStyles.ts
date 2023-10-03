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

    background-image: linear-gradient(to right, pink, purple, blue); 
    border: 1px solid black; 
    border-radius: 20px; 
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); 
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to right, pink, purple, blue);
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
    color: white;
    text-shadow: 3px 3px 0 rgba(0, 0, 0, 0.2);
    animation: pulse 2s infinite;
    background-image: linear-gradient(to right, pink, purple, blue);
    padding: 5px 10px;
    cursor: pointer;
    margin-top: 10px;
    text-decoration: none;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

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

    &:hover {
        color: #ff69b4;
        text-shadow: none;
    }
`;