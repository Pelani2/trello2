import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #f5f5f5;
    height: 100vh;
`;

export const StyledFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    width: 400px; 
`;

export const StyledPasswordCheckerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 400px;
`;

export const StyledLink = styled(Link)`
    background: linear-gradient(to right, #F44336, #FF9800);
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transform: perspective(1px) translateZ(0);
    transition: transform 0.3s ease-out;
    width: 100%;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1) translateZ(0);
    }
`;

export const StyledAccountPromptWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    gap: 10px;
`;

export const StyledPromptLink = styled(Link)`
    display: inline-block;
    background: #9C27B0;
    color: white;
    padding: 5px 10px;
    margin-left: 10px;
    box-shadow: inset 0 -3px #7B1FA2;
    transition: box-shadow 0.3s;
    text-decoration: none;

    &:hover {
        box-shadow: inset 0 3px #7B1FA2;
    }
`;