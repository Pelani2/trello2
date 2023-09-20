import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSignupForm = styled.form`
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

export const StyledSignupButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border: 1px solid black;
    width: 400px;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-size: 1em;
    transition: background-color 0.3s ease;
    width: 100%;

    &:hover {
        background-color: #0056b3;
    }
`;