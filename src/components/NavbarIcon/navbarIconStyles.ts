import styled from "styled-components";
import { AiOutlinePlus, AiOutlineExclamation, AiOutlineBell } from "react-icons/ai";

export const StyledPlus = styled(AiOutlinePlus)`
    color: #00ff00;
    font-size: 32px;
    border: 4px dashed #00ff00;
    transition: transform 0.5s ease;
    
    &:hover {
        transform: rotate(45deg);
        cursor: pointer;
    }
`;

export const StyledExclamation = styled(AiOutlineExclamation)`
    color: #00ff00;
    font-size: 32px;
    border: 4px dashed #00ff00;
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
    color: #00ff00;
    font-size: 32px;
    border: 4px dashed #00ff00;
    box-shadow: 0 0 10px #00ff00;
`;