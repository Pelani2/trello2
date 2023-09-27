import styled from "styled-components";
import { AiOutlinePlus, AiOutlineExclamation, AiOutlineBell } from "react-icons/ai";

export const StyledPlus = styled(AiOutlinePlus)`
    color: #5f9ea0;
    font-size: 32px;
    border: 4px dashed #5f9ea0;
    transition: transform 0.5s ease;
    
    &:hover {
        transform: rotate(45deg);
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
`;

export const StyledBell = styled(AiOutlineBell)`
    color: #5f9ea0;
    font-size: 32px;
    border: 4px dashed #5f9ea0;
    box-shadow: 0 0 10px #5f9ea0;
`;