import styled from "styled-components";
import { AiOutlinePlus, AiOutlineExclamation, AiOutlineBell } from "react-icons/ai";

interface StyledDropdownContentProps {
    isOpen: boolean;
}

export const StyledPlus = styled(AiOutlinePlus)`
    color: #5f9ea0;
    font-size: 32px;
    border: 4px dashed #5f9ea0;
    transition: transform 0.5s ease;
    
    &:hover {
        cursor: pointer;
    }
`;

export const StyledExclamation = styled(AiOutlineExclamation)`
    color: #5f9ea0;
    font-size: 32px;
    border: 4px dashed #5f9ea0;
    animation: pulse 1s infinite;
    
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
        cursor: pointer;
    }
`;

export const StyledBell = styled(AiOutlineBell)`
    color: #5f9ea0;
    font-size: 32px;
    border: 4px dashed #5f9ea0;
    box-shadow: 0 0 10px #5f9ea0;

    &:hover {
        cursor: pointer;
    }
`;

export const StyledDropdownContent = styled.div<StyledDropdownContentProps>`
    position: absolute;
    background-color: black;
    width: 200px;
    display: ${({ isOpen }) => isOpen ? "block" : "none"};
    overflow: hidden;
    transition: max-height 0.2s ease-in-out;
    z-index: 999;

    ${({ isOpen }) => isOpen && `
        max-height: 500px;
        background: linear-gradient(90deg, rgba(113,89,193,1) 0%, rgba(81,74,219,1) 35%, rgba(48,58,242,1) 100%);
        border: 2px solid #fff;
        border-radius: 10px;
        box-shadow: 0 20px 20px rgba(0,0,0,0.2);
        display: flex;
        flex-direction: column;
        padding: 10px;
    `}
`;
