import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledBackToLoginLink = styled(Link)`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
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